import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/Layout";
import { Arrow, Card, Check, Eyebrow, ExternalCta, Section } from "@/components/site/ui";
import { WHOP } from "@/lib/links";

const TITLE = "Dr. Ruth Mwongeli Muthoka — Research Design for Researchers, Founders & R&D Teams";
const DESC =
  "Find the real research problem, sharpen the question, choose methods that can answer it, and work out what your results actually support. Free research guide, 1:1 calls and The Deep Review.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Home,
});

const struggles = [
  "You have a topic or idea that feels important, but you are struggling to define the actual research problem underneath it.",
  "You have read paper after paper, but you are still not sure where the real gap is or what question your study should answer.",
  "You already have a method, dataset, experiment, or model in mind, but you are not sure whether it can actually answer the question you care about.",
  "Your experiments, simulations, or analyses are producing results, but you are struggling to work out what they really mean and what deserves investigation next.",
  "Your supervisor, collaborator, or technical team keeps asking you to narrow, justify, or rethink the study, and you are not quite sure where the logic is breaking.",
];

const helpWith = [
  {
    n: "01",
    title: "Finding the Real Research Problem",
    body: "Working out what is actually unresolved beneath a broad topic or interesting idea, whether the gap you think you have found is real, and why the problem is worth investigating.",
  },
  {
    n: "02",
    title: "Research Questions & Scope",
    body: "Turning the problem into a question that is clear, answerable, appropriately scoped, and capable of producing an answer that actually matters.",
  },
  {
    n: "03",
    title: "Methodology & Research Design",
    body: "Working out what you need to observe, measure, compare, model, or investigate, and whether the method you are considering can genuinely answer the question.",
  },
  {
    n: "04",
    title: "Results, Interpretation & What Comes Next",
    body: "Making sense of confusing, unexpected, or incomplete results, understanding what the work does and does not support, and deciding whether to repeat, redesign, investigate further, or change direction.",
  },
];

function Home() {
  return (
    <PageShell>
      <Hero />
      <SoundFamiliar />
      <MeetRuth />
      <WaysToWork />
      <DeepReview />
      <HelpWith />
      <Resources />
      <EcoRue />
    </PageShell>
  );
}

function Hero() {
  return (
    <Section className="pt-14 sm:pt-20">
      <Eyebrow>Research Design · Researchers, Founders &amp; R&amp;D Teams</Eyebrow>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-accent-foreground">
        Free Research Guide
      </p>
      <h1 className="mt-3 text-4xl leading-[1.08] sm:text-6xl">Before You Choose a Method</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        How to tell whether you have a real research problem, turn it into an answerable question,
        and avoid building a study around the wrong thing.
      </p>

      <div id="free-guide" className="mt-10 max-w-xl scroll-mt-24">
        <FreeGuideForm />
      </div>

      <p className="mt-10 max-w-3xl border-t border-border pt-6 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        PhD Mechanical Engineering / 8+ Years in Research / 22+ Research Publications /
        Experimental + Computational Research / Founder, EcoRue
      </p>
    </Section>
  );
}

function FreeGuideForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  return (
    <Card className="bg-card">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (typeof window !== "undefined") {
            window.localStorage.setItem("rmm_free_guide_email", email);
          }
          navigate({ to: "/free-guide" });
        }}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Your email address"
          className="w-full rounded-full border border-border bg-background px-5 py-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-ring/30"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-accent-contrast transition-all hover:-translate-y-0.5 hover:opacity-90"
        >
          Get the free guide →
        </button>
      </form>
      <p className="mt-3 text-xs text-muted-foreground">
        Free PDF. Sent straight to the download page — no waiting on email.
      </p>
    </Card>
  );
}

function SoundFamiliar() {
  return (
    <Section tone="alt">
      <Eyebrow>Sound familiar?</Eyebrow>
      <h2 className="mt-4 max-w-3xl text-3xl leading-tight sm:text-4xl">
        Your research is moving. But something still doesn&apos;t quite hold together.
      </h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {struggles.map((s) => (
          <li
            key={s}
            className="rounded-xl border border-accent/20 bg-card p-5 text-[0.95rem] leading-relaxed"
          >
            {s}
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-3xl border-l-2 border-accent/50 pl-5 text-[0.95rem] italic leading-relaxed text-muted-foreground">
        Sometimes the difficulty is not a lack of effort. The problem, question, method, and
        interpretation have simply stopped lining up somewhere along the way. An outside research
        perspective can help you see where the logic is breaking, what you may be assuming, and what
        needs attention before you keep building on it.
      </p>
    </Section>
  );
}

function MeetRuth() {
  return (
    <Section>
      <Eyebrow>Meet Ruth</Eyebrow>
      <h2 className="mt-4 max-w-3xl text-3xl leading-tight sm:text-4xl">
        I have spent years learning that good research starts long before the method.
      </h2>
      <div className="mt-8 grid gap-5 text-[0.98rem] leading-relaxed text-muted-foreground sm:grid-cols-2">
        <p>
          I am Dr. Ruth Mwongeli Muthoka, a mechanical engineer and materials scientist. I have
          spent more than eight years working across experimental and computational research, from
          designing studies and running experiments to modeling materials, interpreting results,
          publishing research, and figuring out what to do when the work does not behave the way you
          expected.
        </p>
        <p>
          I know what it is to spend weeks following a question before realizing that the real
          problem was somewhere earlier. I know what it is to repeat an experiment because the
          result makes no sense, read paper after paper without feeling any closer to the answer,
          and build a technically sound method only to discover that it does not quite answer the
          question you thought you were asking.
        </p>
        <p>
          Those experiences changed the way I think about research. A good study is not simply a
          collection of correct methods. The problem, question, investigation, results, and
          interpretation have to belong together. When they do not, working harder rarely fixes the
          problem. You have to find where the logic stopped holding.
        </p>
        <p>
          That is the part of research I care most about teaching. I help researchers, technical
          founders, and R&amp;D teams think through what they are actually trying to understand,
          whether the question is worth pursuing, what kind of investigation can answer it, what the
          results really allow them to conclude, and what should happen next. If your research feels
          stuck, unclear, too broad, or technically busy without becoming more convincing, that is
          exactly the kind of problem I like working through.
        </p>
      </div>
    </Section>
  );
}

function WaysToWork() {
  return (
    <Section id="work" tone="deep" className="scroll-mt-20">
      <Eyebrow>
        <span className="text-primary-foreground/70">Two ways to work with me</span>
      </Eyebrow>
      <h2 className="mt-4 max-w-3xl text-3xl leading-tight sm:text-4xl">
        Bring me the research problem you keep coming back to.
      </h2>
      <p className="mt-5 max-w-3xl text-[0.98rem] leading-relaxed text-primary-foreground/80">
        You may have a research idea that is still too vague, a question that does not quite work, a
        methodology problem, confusing results, an experiment that keeps failing, or several
        possible directions and no clear way to choose between them. Bring it. We will spend 60
        minutes working through where the research is getting stuck and what makes sense to do next.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <ExternalCta href={WHOP.bookCall150} variant="primary">
          Book a call with me · 60 min · $150
        </ExternalCta>
        <span className="text-xs uppercase tracking-[0.14em] text-primary-foreground/60">
          01 · Book a Call with Me
        </span>
      </div>
    </Section>
  );
}

function DeepReview() {
  return (
    <Section tone="alt">
      <Eyebrow>When a call isn&apos;t enough</Eyebrow>
      <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">The Deep Review</h2>
      <p className="mt-4 max-w-3xl text-lg font-medium">
        Let me spend proper time with the research before you decide what to do next.
      </p>
      <div className="mt-6 grid gap-5 text-[0.98rem] leading-relaxed text-muted-foreground sm:grid-cols-2">
        <p>
          Some research problems cannot be understood responsibly in a 60-minute conversation. You
          may need me to read the proposal, follow the research logic, look closely at the
          methodology, examine results or model assumptions, or understand how several pieces of the
          work fit together.
        </p>
        <p>
          That is what The Deep Review is for. You send me the agreed material. I spend proper time
          with it, then give you an independent research view of where the work is strong, where the
          logic may be breaking, what I would question, and what deserves attention next.
        </p>
      </div>

      <div className="mt-9 grid gap-5 sm:grid-cols-2">
        <Card>
          <Eyebrow>What&apos;s included</Eyebrow>
          <ul className="mt-4 space-y-3">
            <Check>A short scoping call to agree on the research problem and scope</Check>
            <Check>Review of the agreed research materials</Check>
            <Check>
              Independent assessment of the problem, question, design, assumptions, results,
              interpretation, and relevant gaps
            </Check>
            <Check>
              A written Deep Review setting out my findings, concerns, and recommended priorities
            </Check>
            <Check>A findings call to work through the review together</Check>
          </ul>
        </Card>
        <Card>
          <Eyebrow>What you leave with</Eyebrow>
          <ul className="mt-4 space-y-3">
            <Check>
              A clearer view of whether the research holds together from problem to conclusion
            </Check>
            <Check>The parts of the work that are already well supported</Check>
            <Check>
              Assumptions, methodological issues, or gaps that may be weakening the study
            </Check>
            <Check>
              A clearer understanding of what your results do and do not allow you to conclude
            </Check>
            <Check>The research questions or decisions that deserve attention next</Check>
            <Check>A written review you can return to after the engagement</Check>
          </ul>
        </Card>
      </div>

      <Card className="mt-6">
        <p className="font-display text-4xl font-semibold text-foreground">$1,500</p>
        <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Application required.</strong> If your application is
          a fit, we start with a $150 scoping call. If we proceed with the Deep Review, the $150 is
          credited toward the $1,500 fee.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="/deep-review/apply"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-accent-contrast no-underline transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            Apply for the Deep Review →
          </a>
          <span className="text-xs text-muted-foreground">
            I read every application myself. You&apos;ll hear from me within 2 business days.
          </span>
        </div>
      </Card>
    </Section>
  );
}

function HelpWith() {
  return (
    <Section>
      <Eyebrow>What I can help with</Eyebrow>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {helpWith.map((h) => (
          <Card key={h.n}>
            <p className="font-display text-sm font-semibold text-accent-foreground">{h.n}</p>
            <h3 className="mt-2 text-xl">{h.title}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{h.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Resources() {
  return (
    <Section id="resources" tone="alt" className="scroll-mt-20">
      <Eyebrow>Resources</Eyebrow>
      <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
        The research guides I wish I had earlier.
      </h2>
      <p className="mt-4 max-w-3xl text-[0.98rem] leading-relaxed text-muted-foreground">
        Practical guides and tools for finding the real research problem, asking better questions,
        choosing methods that actually fit the question, making sense of results, and knowing what
        to do when the work gets messy. Some are free, some go deeper. Start with the problem you
        are trying to solve.
      </p>

      <div className="mt-9 grid gap-5 lg:grid-cols-2">
        <Card>
          <Eyebrow>Start here · Before the method</Eyebrow>
          <h3 className="mt-3 text-2xl">Before You Choose a Method</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
            This guide is designed to help you work out whether you actually have a research
            problem, whether the question can be answered, and what needs to be clear before you
            choose a method.
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em]">Inside:</p>
          <ul className="mt-3 space-y-2.5 text-muted-foreground">
            <Arrow>The difference between a topic, a problem, a gap, and a research question</Arrow>
            <Arrow>Bad, mediocre, and strong examples, with explanations</Arrow>
            <Arrow>
              The Research Spine, a seven-part way to check whether your study holds together before
              you start
            </Arrow>
            <Arrow>A nine-question Research Question Stress Test</Arrow>
            <Arrow>
              A Method-Last Test to stop you choosing methods because they are familiar,
              fashionable, or available
            </Arrow>
            <Arrow>Worked cases from experimental, computational, and people-based research</Arrow>
            <Arrow>
              A one-page Research Readiness Check you can use before writing a proposal or starting
              data collection
            </Arrow>
            <Arrow>
              A short section on using AI without handing over the thinking that makes you a
              researcher
            </Arrow>
          </ul>
          <p className="mt-6 text-sm font-semibold tracking-wide text-accent-foreground">
            FREE · PDF
          </p>
          <a
            href="/#free-guide"
            className="mt-3 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-accent-contrast no-underline transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            Get the guide ↗
          </a>
        </Card>

        <Card>
          <Eyebrow>Research design guide</Eyebrow>
          <h3 className="mt-3 text-2xl">Design Research That Holds Together</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
            A practical research-design handbook for moving from the problem through the question,
            literature, methodology, investigation, interpretation, and the conclusions you can
            responsibly defend.
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em]">Inside:</p>
          <ul className="mt-3 space-y-2.5 text-muted-foreground">
            <Arrow>
              A practical process for moving from a vague idea to a research problem worth
              investigating
            </Arrow>
            <Arrow>
              How to read literature to change your understanding rather than merely collect
              citations
            </Arrow>
            <Arrow>
              How to design research questions that are answerable, consequential, and appropriately
              scoped
            </Arrow>
            <Arrow>How to decide what kind of evidence would actually answer the question</Arrow>
            <Arrow>
              How to choose methods from the question rather than force questions around familiar
              methods
            </Arrow>
            <Arrow>Experimental, computational, and people-based worked cases throughout</Arrow>
            <Arrow>
              Tools for assumptions, variables, measurement quality, controls, comparison, bias,
              uncertainty, and validity
            </Arrow>
            <Arrow>
              A section on exploratory vs confirmatory work, preregistration, and honest
              interpretation
            </Arrow>
            <Arrow>How to diagnose failed, confusing, or inconclusive research</Arrow>
          </ul>
          <p className="mt-6 text-sm font-semibold tracking-wide text-accent-foreground">
            $49 · PDF
          </p>
          <ExternalCta href={WHOP.researchGuide49} className="mt-3">
            Get the guide ↗
          </ExternalCta>
        </Card>
      </div>
    </Section>
  );
}

function EcoRue() {
  return (
    <Section>
      <div className="max-w-3xl">
        <Eyebrow>EcoRue</Eyebrow>
        <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground">
          EcoRue grew out of a problem I kept seeing in research: good ideas can stall long before
          they reach practical use, not because the thinking is weak, but because the tools,
          infrastructure, expertise, or connections needed to take the work further are not always
          within reach. I am building EcoRue as an R&amp;D company around that gap, beginning with
          sustainable materials, computational research, and the systems that help promising
          research move closer to real-world use.
        </p>
      </div>
    </Section>
  );
}
