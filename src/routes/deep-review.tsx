import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/Layout";

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
      <DeepReviewApplication />
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
          <div className="flex items-center lg:justify-center">
            <div className="max-w-[500px]">
              <a
                href="/deep-review/apply"
                className="group block no-underline"
              >
                <h2 className="font-display text-[1.8rem] font-bold uppercase leading-[1.25] text-[#5b453e] sm:text-[2.1rem]">
                  Apply for the Deep
                  <br />
                  Review{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </h2>
              </a>
  
              <p className="mt-3 text-sm leading-[1.55] text-[#5b453e]/90 sm:text-base">
                I read every application myself. You&apos;ll hear from me within
                2 business days.
              </p>
            </div>
          </div>
  
        </div>
      </section>
    );
  }

function DeepReviewApplication() {
  return (
    <section
      id="apply"
      className="scroll-mt-20 bg-[#5b453e] text-white"
    >
      <div className="mx-auto w-full max-w-[1100px] px-6 py-20 text-center sm:px-10 lg:py-24">

        <h2 className="font-display text-[1.6rem] font-bold uppercase leading-tight text-white sm:text-[2rem]">
          Apply for the Deep Review
        </h2>

        <p className="mx-auto mt-6 max-w-[1000px] text-base leading-[1.5] text-white/95 sm:text-lg">
          Takes about 5 minutes. Tell me where the research is getting stuck.
          I read every application myself. You&apos;ll hear from me within 2
          business days.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="mx-auto mt-12 max-w-[950px]"
        >
          <div className="grid gap-4 sm:grid-cols-2">

            <input
              type="text"
              name="firstName"
              required
              placeholder="First name"
              className="w-full rounded-lg border-0 bg-white px-5 py-5 text-lg text-[#5b453e] outline-none placeholder:text-[#5b453e]/45 focus:ring-2 focus:ring-[#9a8555]"
            />

            <input
              type="text"
              name="lastName"
              required
              placeholder="Last name"
              className="w-full rounded-lg border-0 bg-white px-5 py-5 text-lg text-[#5b453e] outline-none placeholder:text-[#5b453e]/45 focus:ring-2 focus:ring-[#9a8555]"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full rounded-lg border-0 bg-white px-5 py-5 text-lg text-[#5b453e] outline-none placeholder:text-[#5b453e]/45 focus:ring-2 focus:ring-[#9a8555]"
            />

            <input
              type="text"
              name="research"
              required
              placeholder="What are you working on?"
              className="w-full rounded-lg border-0 bg-white px-5 py-5 text-lg text-[#5b453e] outline-none placeholder:text-[#5b453e]/45 focus:ring-2 focus:ring-[#9a8555]"
            />

          </div>

          <button
            type="submit"
            className="mt-5 rounded-lg bg-[#9a8555] px-6 py-3 text-sm font-bold uppercase text-white transition hover:bg-[#8b774c]"
          >
            Submit Application
          </button>
        </form>

      </div>
    </section>
  );
};

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