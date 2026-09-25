import { useSession } from "@tanstack/react-start/server";

export type DeepReviewSessionData = {
  pendingEmail?: string;
  otpHash?: string;
  otpExpiresAt?: number;
  otpAttempts?: number;
  lastCodeSentAt?: number;

  accessGranted?: boolean;
  verifiedEmail?: string;
  paymentId?: string;
};

export function useDeepReviewSession() {
  const password =
    process.env["DEEP_REVIEW_SESSION_SECRET"];

  if (!password || password.length < 32) {
    throw new Error(
      "DEEP_REVIEW_SESSION_SECRET must be at least 32 characters."
    );
  }

  return useSession<DeepReviewSessionData>({
    name: "deep-review-access",
    password,

    cookie: {
      httpOnly: true,
      secure: process.env["NODE_ENV"] === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60,
    },
  });
}