import { useEffect } from "react";

import {
  createFileRoute,
  redirect,
} from "@tanstack/react-router";

import { PageShell } from "@/components/site/Layout";

import {
  consumeDeepReviewAccess,
  getDeepReviewAccess,
} from "@/lib/deepReviewAccess.functions";

const TITLE =
  "Deep Review Confirmation | Dr. Ruth Mwongeli Muthoka";

export const Route = createFileRoute(
  "/deep-review-confirmation"
)({
  validateSearch: (search) => ({
    payment_id:
      typeof search["payment_id"] === "string"
        ? search["payment_id"]
        : "",
  }),

  beforeLoad: async ({ search }) => {
    const result =
      await getDeepReviewAccess();

    if (!result.allowed) {
      throw redirect({
        to: "/deep-review-payment-return",
        search: {
          payment_id:
            search.payment_id,
          receipt_id: "",
        },
      });
    }
  },

  head: () => ({
    meta: [
      {
        title: TITLE,
      },
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ],
  }),

  headers: () => ({
    "Cache-Control":
      "private, no-store",
  }),

  component: DeepReviewConfirmation,
});

function DeepReviewConfirmation() {
  useEffect(() => {
    void consumeDeepReviewAccess();
  }, []);

  return (
    <PageShell>
      <section className="bg-white text-[#5b453e]">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 sm:px-10 lg:px-12 lg:py-20">

          {/* Heading */}
          <div className="text-center">

            <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#5b453e]/80">
              Payment received.
            </p>

            <h1 className="mt-8 font-display text-[2rem] font-bold leading-tight text-[#5b453e] sm:text-[2.5rem] lg:text-[2.8rem]">
              Your Deep Review is confirmed.
            </h1>

            <p className="mx-auto mt-8 max-w-[700px] text-base leading-[1.6] text-[#5b453e]/85 sm:text-lg">
              Thank you. The next step is to agree the exact review question,
              scope, and material before I begin.
            </p>

            <div className="mt-10 flex justify-center gap-3">
              <span className="h-3.5 w-3.5 rounded-full bg-[#5b453e]" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#5b453e]" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#5b453e]" />
            </div>

          </div>

          {/* Steps */}
          <div className="mt-14 grid gap-6 lg:grid-cols-3">

            {/* Step 1 */}
            <div className="rounded-2xl border border-[#5b453e]/15 bg-[#faf8f4] p-7 shadow-sm sm:p-8">

              <p className="text-sm font-medium text-[#5b453e]/70">
                Step 1
              </p>

              <h2 className="mt-3 font-display text-lg font-bold leading-[1.4] text-[#5b453e]">
                Book your scoping call.
              </h2>

              <a
                href="https://calendly.com/mwongelinruth/book-a-call-withruth"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-[#5b453e] px-5 py-3.5 text-base font-bold uppercase tracking-[0.05em] text-white no-underline transition hover:bg-[#493731]"
              >
                HERE →
              </a>

            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-[#5b453e]/15 bg-[#faf8f4] p-7 shadow-sm sm:p-8">

              <p className="text-sm font-medium text-[#5b453e]/70">
                Step 2
              </p>

              <h2 className="mt-3 font-display text-lg font-bold leading-[1.4] text-[#5b453e]">
                I will create and share your private Google Drive workspace
                using the email address connected to your project.
              </h2>

            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-[#5b453e]/15 bg-[#faf8f4] p-7 shadow-sm sm:p-8">

              <p className="text-sm font-medium text-[#5b453e]/70">
                Step 3
              </p>

              <h2 className="mt-3 font-display text-lg font-bold leading-[1.4] text-[#5b453e]">
                During the scoping call, we will agree what you should upload,
                what I will review, and the boundaries of the work.
              </h2>

            </div>

          </div>

          {/* Bottom note */}
          <div className="mx-auto mt-12 max-w-[950px] border-t border-[#5b453e]/15 pt-7 text-center">

            <p className="text-base leading-[1.7] text-[#5b453e]/85">
              Please do not send a large volume of additional material before
              the scoping call unless we have already agreed that I need it.
            </p>

          </div>

        </div>
      </section>
    </PageShell>
  );
}