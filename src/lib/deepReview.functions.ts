import { createServerFn } from "@tanstack/react-start";

type DeepReviewApplication = {
  fullName: string;
  email: string;
  organisation?: string;
  workingOn: string;
  researchProblem: string;
  desiredClarity: string;
  deadline?: string;
  feeAcknowledgement: string;
};

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const submitDeepReviewApplication = createServerFn({
  method: "POST",
})
  .validator((data: DeepReviewApplication) => data)
  .handler(async ({ data }) => {

    const apiKey = process.env["BREVO_API_KEY"];
    const recipient = process.env["DEEP_REVIEW_TO_EMAIL"];
    const senderEmail = process.env["BREVO_SENDER_EMAIL"];

    if (!apiKey || !recipient || !senderEmail) {
      throw new Error("Email service is not configured.");
    }

    const response = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "api-key": apiKey,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          sender: {
            name: "Ruth Mwongeli Website",
            email: senderEmail,
          },

          to: [
            {
              email: recipient,
              name: "Dr. Ruth Mwongeli Muthoka",
            },
          ],

          replyTo: {
            email: data.email,
            name: data.fullName,
          },

          subject: `New Deep Review Application - ${data.fullName}`,

          htmlContent: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #5b453e;">
              <h2>New Deep Review Application</h2>

              <p><strong>Full name</strong><br />
              ${escapeHtml(data.fullName)}</p>

              <p><strong>Email address</strong><br />
              ${escapeHtml(data.email)}</p>

              <p><strong>University, company, organisation, or independent researcher</strong><br />
              ${escapeHtml(data.organisation || "Not provided")}</p>

              <p><strong>What are you working on?</strong><br />
              ${escapeHtml(data.workingOn)}</p>

              <p><strong>What research question, problem, or decision are you stuck on?</strong><br />
              ${escapeHtml(data.researchProblem)}</p>

              <p><strong>What would you like to be clearer about by the end of the Deep Review?</strong><br />
              ${escapeHtml(data.desiredClarity)}</p>

              <p><strong>Deadline</strong><br />
              ${escapeHtml(data.deadline || "Not provided")}</p>

              <p><strong>Fee acknowledgement</strong><br />
              ${escapeHtml(data.feeAcknowledgement)}</p>
            </div>
          `,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Brevo error:", errorText);

      throw new Error(
        "Your application could not be submitted. Please try again."
      );
    }

    return { success: true };
  });