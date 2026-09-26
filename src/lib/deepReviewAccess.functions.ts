import { createServerFn } from "@tanstack/react-start";
import { useDeepReviewSession } from "@/lib/deepReviewSession";

type WhopMoney = {
  currency: string;
  amount: string;
  decimals?: number;
  display_decimals?: number;
};

type WhopPayment = {
  id: string;
  status: string;
  substatus?: string | null;

  total?: WhopMoney | number;

  user?: {
    email?: string | null;
  } | null;
};





function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function createSixDigitCode() {
  const values = new Uint32Array(1);
  crypto.getRandomValues(values);

  const randomValue = values[0] ?? 0;

  return String(
    100000 + (randomValue % 900000)
  );
}

async function hashVerificationCode(
  email: string,
  code: string,
  secret: string
) {
  const value =
    `${email}:${code}:${secret}`;

  const bytes =
    new TextEncoder().encode(value);

  const digest = await crypto.subtle.digest(
    "SHA-256",
    bytes
  );

  return Array.from(
    new Uint8Array(digest)
  )
    .map((byte) =>
      byte.toString(16).padStart(2, "0")
    )
    .join("");
}

async function findPaidDeepReview(
  paymentId: string,
  email: string
) {
  const apiKey =
    process.env["WHOP_API_KEY"];

  const planId =
    process.env["WHOP_DEEP_REVIEW_PLAN_ID"];

  if (!apiKey || !planId) {
    throw new Error(
      "Whop payment verification is not configured."
    );
  }

  if (!/^pay_[A-Za-z0-9]+$/.test(paymentId)) {
    return null;
  }

  const normalizedEmail =
    normalizeEmail(email);

  const url = new URL(
    "https://api.whop.com/api/v1/payments"
  );

  /*
    Ask Whop for payments belonging to:
    1. this customer's email
    2. this exact Deep Review plan

    include_free=true is required for
    the $0 test checkout.
  */
  url.searchParams.set(
    "query",
    normalizedEmail
  );

  url.searchParams.append(
    "plan_ids",
    planId
  );

  url.searchParams.set(
    "include_free",
    "true"
  );

  url.searchParams.set(
    "first",
    "20"
  );

  url.searchParams.set(
    "order",
    "created_at"
  );

  url.searchParams.set(
    "direction",
    "desc"
  );

  const response = await fetch(
    url.toString(),
    {
      method: "GET",

      headers: {
        Authorization: `Bearer ${apiKey}`,
        accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    const errorText =
      await response.text();

    console.error(
      "Whop payment lookup error:",
      response.status,
      errorText
    );

    throw new Error(
      "Payment verification is temporarily unavailable."
    );
  }

  const result =
    (await response.json()) as {
      data?: WhopPayment[];
    };

  
  const payment =
    result.data?.find(
      (item) =>
        item.id === paymentId &&
        item.substatus === "succeeded"
    ) ?? null;

  return payment;
}
export const requestDeepReviewAccessCode =
  createServerFn({
    method: "POST",
  })
  .validator(
    (data: {
      email: string;
      paymentId: string;
    }) => data
  )
    .handler(async ({ data }) => {
      const email =
        normalizeEmail(data.email);

      if (
        !email ||
        !email.includes("@")
      ) {
        return {
          success: false,
          message:
            "Please enter a valid email address.",
        };
      }

      const payment =
      await findPaidDeepReview(
        data.paymentId,
        email
      );

      /*
        Do not expose detailed payment
        information to the browser.
      */
      if (!payment) {
        return {
          success: false,
          message:
            "We could not verify a completed Deep Review payment for that email. Please use the same email address you used at checkout.",
        };
      }

      const brevoApiKey =
        process.env["BREVO_API_KEY"];

      const senderEmail =
        process.env["BREVO_SENDER_EMAIL"];

      const sessionSecret =
        process.env[
          "DEEP_REVIEW_SESSION_SECRET"
        ];

      if (
        !brevoApiKey ||
        !senderEmail ||
        !sessionSecret
      ) {
        throw new Error(
          "Verification email service is not configured."
        );
      }

      const session =
        await useDeepReviewSession();

      const now = Date.now();

      /*
        Prevent immediately requesting
        many codes from the same session.
      */
      const previousSentAt =
        session.data.lastCodeSentAt ?? 0;

      if (
        now - previousSentAt <
        60 * 1000
      ) {
        return {
          success: false,
          message:
            "A verification code was recently sent. Please wait a moment before requesting another.",
        };
      }

      const code =
        createSixDigitCode();

      const codeHash =
        await hashVerificationCode(
          email,
          code,
          sessionSecret
        );

        const {
            verifiedEmail: _verifiedEmail,
            ...sessionWithoutVerifiedEmail
          } = session.data;
          
          await session.update({
            ...sessionWithoutVerifiedEmail,
          
            pendingEmail: email,
            paymentId: payment.id,
          
            otpHash: codeHash,
            otpExpiresAt:
              now + 10 * 60 * 1000,
          
            otpAttempts: 0,
            lastCodeSentAt: now,
          
            accessGranted: false,
          });

      const emailResponse = await fetch(
        "https://api.brevo.com/v3/smtp/email",
        {
          method: "POST",

          headers: {
            accept: "application/json",
            "api-key": brevoApiKey,
            "content-type":
              "application/json",
          },

          body: JSON.stringify({
            sender: {
              name:
                "Dr. Ruth Mwongeli | The Deep Review",
              email: senderEmail,
            },

            to: [
              {
                email,
              },
            ],

            subject:
              "Your Deep Review verification code",

            htmlContent: `
              <div
                style="
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  color: #5b453e;
                "
              >
                <h2>
                  Confirm your Deep Review
                </h2>

                <p>
                  Your verification code is:
                </p>

                <p
                  style="
                    font-size: 28px;
                    font-weight: bold;
                    letter-spacing: 6px;
                  "
                >
                  ${code}
                </p>

                <p>
                  This code expires in
                  10 minutes.
                </p>

                <p>
                  If you did not request
                  this code, you can ignore
                  this email.
                </p>
              </div>
            `,
          }),
        }
      );

      if (!emailResponse.ok) {
        const errorText =
          await emailResponse.text();

        console.error(
          "Brevo verification error:",
          errorText
        );

        throw new Error(
          "The verification code could not be sent."
        );
      }

      return {
        success: true,
      };
    });

export const verifyDeepReviewAccessCode =
  createServerFn({
    method: "POST",
  })
    .validator(
      (data: { code: string }) => data
    )
    .handler(async ({ data }) => {
      const session =
        await useDeepReviewSession();

      const email =
        session.data.pendingEmail;

      const storedHash =
        session.data.otpHash;

      const expiresAt =
        session.data.otpExpiresAt;

      const paymentId =
        session.data.paymentId;

      const attempts =
        session.data.otpAttempts ?? 0;

      const sessionSecret =
        process.env[
          "DEEP_REVIEW_SESSION_SECRET"
        ];

      if (
        !email ||
        !storedHash ||
        !expiresAt ||
        !paymentId ||
        !sessionSecret
      ) {
        return {
          success: false,
          message:
            "Please request a new verification code.",
        };
      }

      if (Date.now() > expiresAt) {
        return {
          success: false,
          message:
            "This verification code has expired. Please request a new one.",
        };
      }

      if (attempts >= 5) {
        return {
          success: false,
          message:
            "Too many incorrect attempts. Please request a new verification code.",
        };
      }

      const submittedHash =
        await hashVerificationCode(
          email,
          data.code.trim(),
          sessionSecret
        );

      if (
        submittedHash !== storedHash
      ) {
        await session.update({
          ...session.data,
          otpAttempts: attempts + 1,
        });

        return {
          success: false,
          message:
            "That verification code is incorrect.",
        };
      }

      const {
        otpHash: _otpHash,
        otpExpiresAt: _otpExpiresAt,
        otpAttempts: _otpAttempts,
        ...sessionWithoutOtp
      } = session.data;
      
      await session.update({
        ...sessionWithoutOtp,
      
        accessGranted: true,
        verifiedEmail: email,
      });

      return {
        success: true,
      };
    });

export const getDeepReviewAccess =
  createServerFn({
    method: "GET",
  }).handler(async () => {
    const session =
      await useDeepReviewSession();

    return {
      allowed:
        session.data.accessGranted === true,
    };
  });