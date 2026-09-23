import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/Layout";
import { submitDeepReviewApplication } from "@/server/DeepReview";

const TITLE = "The Deep Review — Dr. Ruth Mwongeli Muthoka";
const DESCRIPTION =
  "An independent research review for problems that need more than a 60-minute conversation.";

export const Route = createFileRoute("/deep-review")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: DeepReview,
});

function DeepReview() {
  return (
    <PageShell>
      <DeepReviewHero />
      <WhatToExpect />
      <WhichOption/>
    </PageShell>
  );
}

function DeepReviewHero() {
  return (
    <section className="bg-[#5b453e] text-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 pb-10 pt-20 text-center sm:px-10 sm:pb-12 sm:pt-24 lg:pb-10 lg:pt-28">

        <p className="text-sm font-medium uppercase tracking-[0.02em] text-white/90">
          Apply · The Deep Review
        </p>

        <h1 className="mt-9 max-w-[1200px] font-display text-[1.5rem] font-bold leading-[1.2] text-white sm:text-[1.9rem] lg:text-[2.2rem]">
  When the research problem is bigger than one
  <br className="hidden sm:block" />
  conversation.
</h1>

        <p className="mt-8 max-w-[590px] text-sm leading-[1.6] text-white/95 sm:text-base">
          Tell me what you are working on and where the research is getting
          difficult. I read every application myself. If I think a Deep Review
          is the right way to help, I will come back to you with the next step.
          If the problem is better suited to just a 1:1 call, or needs expertise
          I do not have, I will tell you that too.
        </p>

      </div>
    </section>
  );
}
function WhatToExpect() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

 
    return (
      <section className="bg-white text-[#5b453e]">
        <div className="mx-auto grid w-full max-w-[1450px] gap-14 px-6 py-10 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24 lg:px-20 lg:py-12">
  
          {/* LEFT SIDE */}
          <div>
            <h2 className="font-display text-base font-bold uppercase sm:text-lg">
              What to expect
            </h2>
  
            <div className="mt-9 max-w-[760px] space-y-9">
  
              <div>
                <h3 className="font-display text-base font-bold">
                  → I read every application
                </h3>
  
                <p className="mt-2 text-sm leading-[1.65] text-[#5b453e]/90 sm:text-base">
                  I want to understand the research problem before asking you to
                  send substantial material. At this stage, tell me what you are
                  working on, where you are stuck, what you have already done, and
                  what you need to decide. You do not need to send confidential
                  documents with the initial application.
                </p>
              </div>
  
              <div>
                <h3 className="font-display text-base font-bold">
                  → We agree on the question and scope
                </h3>
  
                <p className="mt-2 text-sm leading-[1.65] text-[#5b453e]/90 sm:text-base">
                  If the review makes sense, we agree exactly what I am reviewing,
                  the main question the review should answer, the material I need,
                  the timeline, confidentiality arrangements, deliverables, and
                  price.
                </p>
              </div>
  
              <div>
                <h3 className="font-display text-base font-bold">
                  → I spend proper time with the research
                </h3>
  
                <p className="mt-2 text-sm leading-[1.65] text-[#5b453e]/90 sm:text-base">
                  Depending on the question, that may include your research
                  problem, research questions, proposal, literature logic,
                  methodology, experimental design, model assumptions, results,
                  analyses, figures, interpretation, limitations, intended
                  claims, or other relevant material.
                </p>
              </div>
  
              <div>
                <h3 className="font-display text-base font-bold">
                  → You receive a written Deep Review
                </h3>
  
                <p className="mt-2 text-sm leading-[1.65] text-[#5b453e]/90 sm:text-base">
                  I set out what I think is working, where the research logic may
                  be weak or incomplete, what assumptions deserve closer
                  attention, what the current work does and does not support, and
                  what I would prioritize next.
                </p>
  
                <p className="mt-5 text-sm leading-[1.65] text-[#5b453e]/90 sm:text-base">
                  Where appropriate, I may also suggest questions to investigate,
                  changes to the research design, additional checks, or areas that
                  need specialist input.
                </p>
              </div>
  
              <div>
                <h3 className="font-display text-base font-bold">
                  → We talk through what I found
                </h3>
  
                <p className="mt-2 text-sm leading-[1.65] text-[#5b453e]/90 sm:text-base">
                  You will not receive a document and be left to interpret it
                  alone. We meet afterwards and work through the findings,
                  including the areas where I think the project needs the most
                  thought.
                </p>
              </div>
  
              <div>
                <h3 className="font-display text-base font-bold">
                  → This Deep Review is $1,500
                </h3>
  
                <p className="mt-2 text-sm leading-[1.65] text-[#5b453e]/90 sm:text-base">
                  <strong className="font-bold text-[#5b453e]">
                    Application required.
                  </strong>{" "}
                  If your application is a fit, we begin with a $150 scoping call
                  to agree on the research question, material, and scope. If we
                  proceed, the $150 is credited toward the Deep Review, leaving a
                  balance of $1,350.
                </p>
              </div>
  
              <div>
                <h3 className="font-display text-base font-bold">
                  → Honest fit check
                </h3>
  
                <p className="mt-2 text-sm leading-[1.65] text-[#5b453e]/90 sm:text-base">
                  If the question requires expertise outside my competence, if the
                  material needs a different specialist, or if a call with me
                  would be enough, I will say that too.
                </p>
              </div>
  
            </div>
          </div>
  
          {/* RIGHT SIDE */}
          <div
  id="apply"
  className="flex scroll-mt-24 justify-center lg:justify-end"
>
  <div className="w-full max-w-[480px] rounded-2xl border border-[#5b453e]/15 bg-[#faf8f4] p-6 shadow-sm sm:p-8">

    <h2 className="font-display text-xl font-bold text-[#5b453e]">
      Apply for the Deep Review
    </h2>

    <p className="mt-2 text-sm leading-[1.6] text-[#5b453e]/75">
      Takes about 5 minutes.Be honest - vague answers get vague advice.
    </p>

    <form
  className="mt-7 space-y-5"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await submitDeepReviewApplication({
        data: {
          fullName: String(formData.get("fullName") || ""),
          email: String(formData.get("email") || ""),
          organisation: String(formData.get("organisation") || ""),
          workingOn: String(formData.get("workingOn") || ""),
          researchProblem: String(formData.get("researchProblem") || ""),
          desiredClarity: String(formData.get("desiredClarity") || ""),
          deadline: String(formData.get("deadline") || ""),
          feeAcknowledgement: String(
            formData.get("feeAcknowledgement") || ""
          ),
        },
      });

      form.reset();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting your application."
      );
    } finally {
      setIsSubmitting(false);
    }
  }}
>
  <input
    type="hidden"
    name="_subject"
    value="New Deep Review Application"
  />

  <input
    type="hidden"
    name="service"
    value="The Deep Review"
  />
  {/* Full name */}
  <div>
    <label
      htmlFor="Full Name"
      className="mb-2 block text-xs font-semibold text-[#5b453e]"
    >
      Full name *
    </label>

    <input
      id="fullName"
      name="fullName"
      type="text"
      required
      className="w-full rounded-lg border border-[#5b453e]/20 bg-white px-4 py-3 text-sm text-[#5b453e] outline-none transition focus:border-[#9a8555]"
    />
  </div>

  {/*  Email address */}
  <div>
    <label
      htmlFor="email"
      className="mb-2 block text-xs font-semibold text-[#5b453e]"
    >
       Email address *
    </label>

    <input
      id="email"
      name="email"
      type="email"
      required
      className="w-full rounded-lg border border-[#5b453e]/20 bg-white px-4 py-3 text-sm text-[#5b453e] outline-none transition focus:border-[#9a8555]"
    />
  </div>

  {/*  University / company / organisation */}
  <div>
    <label
      htmlFor="organisation"
      className="mb-2 block text-xs font-semibold leading-relaxed text-[#5b453e]"
    >
      University, company, organisation, or independent researcher
    </label>

    <input
      id="organisation"
      name="organisation"
      type="text"
      className="w-full rounded-lg border border-[#5b453e]/20 bg-white px-4 py-3 text-sm text-[#5b453e] outline-none transition focus:border-[#9a8555]"
    />

    <p className="mt-1 text-[0.7rem] text-[#5b453e]/55">
      Optional
    </p>
  </div>

  {/*  What are you working on? */}
  <div>
    <label
      htmlFor="workingOn"
      className="mb-2 block text-xs font-semibold text-[#5b453e]"
    >
      What are you working on? *
    </label>

    <textarea
      id="workingOn"
      name="workingOn"
      required
      rows={4}
      placeholder="Give me enough context to understand the research or technical problem.You do not need to explain everything here."
      className="w-full resize-none rounded-lg border border-[#5b453e]/20 bg-white px-4 py-3 text-sm leading-relaxed text-[#5b453e] outline-none transition focus:border-[#9a8555]"
    />

   
  </div>

  {/* Research question / problem / decision */}
  <div>
    <label
      htmlFor="researchProblem"
      className="mb-2 block text-xs font-semibold leading-relaxed text-[#5b453e]"
    >
       What research question, problem, or decision are you stuck on? *
    </label>

    <textarea
      id="researchProblem"
      name="researchProblem"
      required
      rows={4}
      placeholder="This could be the research question, methodology, experimental or computational approach, results, interpretation, or deciding what to do next."
      className="w-full resize-none rounded-lg border border-[#5b453e]/20 bg-white px-4 py-3 text-sm leading-relaxed text-[#5b453e] outline-none transition focus:border-[#9a8555]"
    />

  </div>

  {/*  Desired clarity */}
  <div>
    <label
      htmlFor="desiredClarity"
      className="mb-2 block text-xs font-semibold leading-relaxed text-[#5b453e]"
    >
       What would you like to be clearer about by the end of the Deep Review? *
    </label>

    <textarea
      id="desiredClarity"
      name="desiredClarity"
      required
      rows={4}
      placeholder="What question, uncertainty, or decision would you like the review to help you resolve?"
      className="w-full resize-none rounded-lg border border-[#5b453e]/20 bg-white px-4 py-3 text-sm leading-relaxed text-[#5b453e] outline-none transition focus:border-[#9a8555]"
    />

  </div>

  {/*  Deadline */}
  <div>
    <label
      htmlFor="deadline"
      className="mb-2 block text-xs font-semibold text-[#5b453e]"
    >
       Is there a deadline I should know about?
    </label>

    <input
      id="deadline"
      name="deadline"
      type="text"
      placeholder="e.g. thesis submission, funding deadline, experiment starting next month"
      className="w-full rounded-lg border border-[#5b453e]/20 bg-white px-4 py-3 text-sm text-[#5b453e] outline-none placeholder:text-[#5b453e]/40 focus:border-[#9a8555]"
    />

    <p className="mt-1 text-[0.7rem] text-[#5b453e]/55">
      Optional
    </p>
  </div>

  {/*  Fee acknowledgement */}
  <div>
    <p className="mb-3 text-xs font-semibold text-[#5b453e]">
      Fee acknowledgement *
    </p>

    <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#5b453e]/15 bg-white p-4">
      <input
        type="checkbox"
        id="feeAcknowledgement"
        name="feeAcknowledgement"
        value="I understand and accept the US$1,500 fee"
        required
        className="mt-0.5 h-4 w-4 shrink-0 accent-[#5b453e]"
      />

      <span className="text-xs leading-[1.6] text-[#5b453e]/90">
        I understand that The Deep Review is US$1,500 if my application is
        accepted.
      </span>
    </label>
  </div>

  {/* Submit */}
  <button
  type="submit"
  disabled={isSubmitting || submitted}
  className="w-full rounded-lg bg-[#5b453e] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#493731] disabled:cursor-not-allowed disabled:opacity-60"
>
  {isSubmitting
    ? "Submitting..."
    : submitted
      ? "Application received"
      : "Submit Application"}
</button>

{submitted && (
  <div className="rounded-lg border border-[#9a8555]/30 bg-[#9a8555]/10 px-4 py-4">
    <p className="text-sm font-semibold text-[#5b453e]">
      Thank you. Your application has been received.
    </p>

    <p className="mt-2 text-xs leading-relaxed text-[#5b453e]/70">
      I read every application personally. Expect a reply within 2 business
      days.
    </p>
  </div>
)}

{submitError && (
  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-4">
    <p className="text-sm text-red-700">
      {submitError}
    </p>
  </div>
)}
</form>

{/*
<p className="mt-4 text-xs leading-relaxed text-[#5b453e]/60">
  I read every application personally. Expect a reply within 2 business days.
</p>

*/}

  </div>
</div>
  
        </div>
      </section>
    );
  }



function WhichOption() {
  return (
    <section className="bg-white text-[#5b453e]">
      <div className="mx-auto w-full max-w-[1450px] px-6 py-10 text-center sm:px-10 lg:px-20 lg:py-12">

        <h2 className="font-display text-base font-bold sm:text-lg">
          Not sure whether you need a call or a Deep Review?
        </h2>

        <div className="mx-auto mt-7 max-w-[1350px] space-y-7">
          <p className="text-sm font-semibold italic leading-[1.65] text-[#5b453e]/95 sm:text-base">
            If you have one contained research problem that I can understand
            from a short intake and work through with you in a conversation,
            book a call with me.
          </p>

          <p className="text-sm font-semibold italic leading-[1.65] text-[#5b453e]/95 sm:text-base">
            If I need to spend proper time reading your proposal, methodology,
            results, models, assumptions, analyses, or several pieces of the
            research before I can give you a responsible view, The Deep Review
            is the better fit.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">

          <a
            href="#book"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm font-bold uppercase text-[#5b453e] no-underline hover:underline hover:underline-offset-4 sm:text-base"
          >
            Book a call with me →
          </a>

          <a
            href="#apply"
            className="font-display text-sm font-bold uppercase text-[#5b453e] no-underline hover:underline hover:underline-offset-4 sm:text-base"
          >
            Apply for the Deep Review →
          </a>

        </div>

      </div>
    </section>
  );
}