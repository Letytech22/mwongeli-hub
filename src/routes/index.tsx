import {
  createFileRoute,
  useNavigate,
  Link,
} from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/Layout";
import { Card } from "@/components/site/ui";
import { SUBSTACK,WHOP } from "@/lib/links";

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
      <FreeResearchGuide />
      <SoundFamiliar />
      <MeetRuth />
      <ProfileLinks />
      <WaysToWork />
      <DeepReview />
      <TwoWaysToWork />
      <HelpWith />
      <Resources />
      <EcoRue />
      <WritingSection />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="w-full overflow-hidden bg-[#5b453e] text-white">
      <div className="mx-auto grid w-full max-w-[1460px] gap-10 px-5 pb-14 pt-8 sm:gap-12 sm:px-10 sm:pb-16 sm:pt-10 lg:grid-cols-[1.8fr_0.9fr] lg:items-center lg:gap-20 lg:px-16 lg:pb-20 lg:pt-12">

        {/* Left side */}
        <div className="min-w-0 max-w-[900px]">

          <p className="text-[0.7rem] font-bold uppercase leading-[1.5] tracking-[0.03em] text-white sm:text-sm">
            Research Design · Researchers, Founders &amp; R&amp;D Teams
          </p>

          <h1 className="mt-8 max-w-[760px] break-words font-display text-[1.7rem] font-bold leading-[1.18] tracking-[-0.02em] text-white sm:mt-10 sm:text-[2.4rem] lg:text-[3rem]">
            Know what you are
            <br className="hidden sm:block" /> actually trying to find out.
            <br />
            Build the research around that.
          </h1>

          <p className="mt-6 max-w-[820px] text-sm leading-[1.65] text-white/90 sm:text-[1.05rem] lg:text-[1.1rem]">
            You can have a promising topic, a stack of papers, and a method in
            mind and still be building the study around the wrong question. I
            work with researchers, technical founders, and R&amp;D teams to
            clarify the problem, sharpen the research question, choose methods
            that can actually answer it, and work out what the results really
            support.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">

            <a
              href={WHOP.bookCall150}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#a68b4d] px-5 text-xs font-bold uppercase tracking-[0.01em] text-white no-underline transition hover:bg-[#947a42] sm:min-h-14 sm:w-auto sm:px-6 sm:text-sm"
            >
              Book a call with me
            </a>

            <Link
              to="#deep-review"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white/80 bg-transparent px-5 text-xs font-bold uppercase tracking-[0.01em] text-white no-underline transition hover:bg-white hover:text-[#5b453e] sm:min-h-14 sm:w-auto sm:px-6 sm:text-sm"
            >
              The Deep Review
            </Link>

          </div>
        </div>

        {/* Right side */}
        <div className="min-w-0 flex justify-center lg:justify-end">
          <div className="w-full max-w-[460px] overflow-hidden">
            <img
              src="/ruth-hero.jpg"
              alt="Dr. Ruth Mwongeli Muthoka"
              className="h-[400px] w-full object-cover object-center sm:h-[620px] lg:h-[580px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
function FreeResearchGuide() {
  return (
    <>
      {/* Free research guide */}
      <section className="bg-[#9a8555] text-white">
        <div className="mx-auto grid w-full max-w-[1460px] gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1.7fr_0.8fr] lg:items-center lg:px-16 lg:py-12">

          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.03em] sm:text-sm">
              Free Research Guide
            </p>

            <h2 className="mt-7 font-display text-sm font-bold text-white sm:text-base">
              Before You Choose a Method
            </h2>

            <p className="mt-7 max-w-[850px] text-xs leading-[1.7] text-white/95 sm:text-sm">
              How to tell whether you have a real research problem, turn it
              into an answerable question, and avoid building a study around
              the wrong thing.
            </p>
          </div>

          {/* Right */}
          <div className="lg:flex lg:justify-center">
            <a
              href="/free-guide"
              className="inline-flex items-center gap-2 font-display text-base font-bold uppercase text-white no-underline transition-opacity hover:opacity-75"
            >
              Get the free guide
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="bg-[#5b453e] text-white">
        <div className="mx-auto w-full max-w-[1460px] px-6 py-7 text-center sm:px-10 lg:px-16">
          <p className="font-display text-[0.7rem] font-bold leading-relaxed sm:text-xs lg:text-sm">
            PhD Mechanical Engineering / 8+ Years in Research / 22+ Research
            Publications / Experimental + Computational Research / Founder,
            EcoRue
          </p>
        </div>
      </section>
    </>
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
    <section className="bg-white text-[#5b453e]">
      <div className="mx-auto w-full max-w-[900px] px-6 py-14 sm:px-10 sm:py-16">

        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.03em] text-[#5b453e] sm:text-sm">
            Sound familiar?
          </p>

          <h2 className="mx-auto mt-8 max-w-[680px] font-display text-[1.5rem] font-bold leading-[1.2] tracking-[-0.02em] text-[#5b453e] sm:text-[1.8rem]">
  Your research is moving. But
  <br className="hidden sm:block" />
  something still doesn&apos;t quite
  <br className="hidden sm:block" />
  hold together.
</h2>
</div>

        {/* Struggles */}
        <ul className="mx-auto mt-10 max-w-[720px] space-y-7">
          {struggles.map((struggle) => (
            <li
              key={struggle}
              className="flex items-start gap-2 text-sm leading-[1.6] text-[#5b453e] sm:text-[0.95rem]"
            >
              <span className="mt-[1px] shrink-0">–</span>
              <span>{struggle}</span>
            </li>
          ))}
        </ul>

        {/* Supporting note */}
        <p className="mx-auto mt-10 max-w-[720px] text-center text-sm italic leading-[1.7] text-[#5b453e] sm:text-[0.95rem]">
  Sometimes the difficulty is not a lack of effort. The problem,
  question, method, and interpretation have simply stopped lining up
  somewhere along the way. An outside research perspective can help
  you see where the logic is breaking, what you may be assuming, and
  what needs attention before you keep building on it.
</p>

      </div>
    </section>
  );
}
function MeetRuth() {
  return (
    <section className="bg-[#5b453e] text-white">
<div className="mx-auto grid w-full max-w-[1600px] gap-12 px-6 py-8 sm:px-10 lg:grid-cols-[340px_1fr] lg:gap-[90px] lg:px-[92px] lg:py-8">
        {/* Left image */}
        <div className="mt-0 lg:mt-[94px]">
          <img
            src="/ruth-research.JPG"
            alt="Dr. Ruth Mwongeli Muthoka"
            className="h-auto w-full object-cover object-center lg:h-[340px] lg:w-[340px]"
            />
        </div>

        {/* Right content */}
        <div className="max-w-[900px]">

          <p className="text-sm font-bold text-white">
            Meet Ruth
          </p>

          <h2 className="mt-10 max-w-[850px] font-display text-[1.3rem] font-bold leading-[1.35] text-white sm:text-[1.55rem]">
            I have spent years learning that good research starts long
            before the method.
          </h2>

          <div className="mt-8 space-y-7 text-[0.95rem] leading-[1.55] text-white/95 sm:text-base">

            <p>
              I am Dr. Ruth Mwongeli Muthoka, a mechanical engineer and
              materials scientist. I have spent more than eight years working
              across experimental and computational research, from designing
              studies and running experiments to modeling materials,
              interpreting results, publishing research, and figuring out what
              to do when the work does not behave the way you expected.
            </p>

            <p>
              I know what it is to spend weeks following a question before
              realizing that the real problem was somewhere earlier. I know
              what it is to repeat an experiment because the result makes no
              sense, read paper after paper without feeling any closer to the
              answer, and build a technically sound method only to discover
              that it does not quite answer the question you thought you were
              asking.
            </p>

            <p>
              Those experiences changed the way I think about research. A good
              study is not simply a collection of correct methods. The problem,
              question, investigation, results, and interpretation have to
              belong together. When they do not, working harder rarely fixes
              the problem. You have to find where the logic stopped holding.
            </p>

            <p>
              That is the part of research I care most about teaching. I help
              researchers, technical founders, and R&amp;D teams think through
              what they are actually trying to understand, whether the question
              is worth pursuing, what kind of investigation can answer it, what
              the results really allow them to conclude, and what should happen
              next.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileLinks() {
  return (
    <section className="bg-white text-[#5b453e]">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-5 px-6 py-8 text-center sm:grid-cols-2 sm:px-10 lg:px-16">

        <a
          href="https://www.linkedin.com/in/ruthmwongelimuthoka/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-sm font-bold text-[#5b453e]  transition-opacity hover:underline sm:text-base"
        >
          LinkedIn ↗
        </a>

        <a
          href="https://scholar.google.com/citations?user=2lL-ck8AAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-sm font-bold text-[#5b453e] no-underline transition-opacity hover:underline sm:text-base"
        >
          Google Scholar ↗
        </a>

      </div>
    </section>
  );
}

function WaysToWork() {
  const questions = [
    "Is this actually a research problem?",
    "Is my research question too broad, too weak, or disconnected from the problem?",
    "Does my methodology actually answer my research question?",
    "Where is the real gap in the literature?",
    "Should I repeat, redesign, or rethink an experiment that keeps failing?",
    "What can I reasonably conclude from unclear or unexpected results?",
    "Which research direction deserves investigation first?",
    "Where has my research stopped holding together?",
  ];

  return (
    <section
      id="work"
      className="scroll-mt-20 bg-[#9a8555] text-white"
    >
      <div className="mx-auto w-full max-w-[1150px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">

        <div className="text-center">
          <h2 className="font-display text-[1.7rem] font-bold leading-[1.25] text-white sm:text-[2rem] lg:text-[2.2rem]">
            Bring me the research problem you keep coming back to.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-[950px]">
          <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
            Questions we can work through
          </h3>

          <div className="mt-7 space-y-4">
            {questions.map((question) => (
              <div
                key={question}
                className="flex items-start gap-3"
              >
                <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white" />

                <p className="text-sm leading-[1.65] text-white/95 sm:text-base">
                  {question}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm leading-[1.75] text-white/95 sm:text-base lg:text-[1.05rem]">
            In this 60-minute session, we will work through where the research
            is getting stuck, what may be causing it, and what makes sense to
            do next.
          </p>

          <div className="mt-8">
            <a
              href={WHOP.bookCall150}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-[#5b453e] no-underline transition hover:bg-white/90"
            >
              Book a Call with Me · 60 min · $150
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}


function DeepReview() {
  return (
    <section
      id="deep-review"
      className="scroll-mt-20 bg-white text-[#5b453e]"
    >
      <div className="mx-auto w-full max-w-[1250px] px-6 py-14 sm:px-10 lg:px-12 lg:py-16">

        {/* Introduction */}
        <div className="mx-auto max-w-[740px]">
          <p className="text-center text-xs font-bold uppercase tracking-[0.03em]">
            When a call isn&apos;t enough
          </p>

          <h2 className="mt-4 text-center font-display text-[1.7rem] font-bold leading-tight sm:text-[2rem]">
            The Deep Review
          </h2>

          <p className="mt-8 text-sm font-bold leading-relaxed sm:text-[0.95rem]">
            Let me spend proper time with the research before you decide what
            to do next.
          </p>

          <p className="mt-6 text-sm leading-[1.55] sm:text-[0.95rem]">
            Some research problems cannot be understood responsibly in a
            60-minute conversation. You may need me to read the proposal,
            follow the research logic, look closely at the methodology,
            examine results or model assumptions, or understand how several
            pieces of the work fit together.
          </p>

          <p className="mt-6 text-sm leading-[1.55] sm:text-[0.95rem]">
            That is what The Deep Review is for. You send me the agreed
            material. I spend proper time with it, then give you an independent
            research view of where the work is strong, where the logic may be
            breaking, what I would question, and what deserves attention next.
          </p>
        </div>

        {/* What's included / What you leave with */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-0">

          {/* Left */}
          <div className="lg:border-r lg:border-[#5b453e]/20 lg:pr-16">
            <h3 className="text-xs font-bold uppercase tracking-[0.02em]">
              What&apos;s included
            </h3>

            <ul className="mt-7 space-y-1 text-sm leading-[1.45] sm:text-[0.9rem]">
              <li>✓ A short scoping call to agree on the research problem and scope</li>
              <li>✓ Review of the agreed research materials</li>
              <li>
                ✓ Independent assessment of the problem, question, design,
                assumptions, results, interpretation, and relevant gaps
              </li>
              <li>
                ✓ A written Deep Review setting out my findings, concerns, and
                recommended priorities
              </li>
              <li>✓ A findings call to work through the review together</li>
            </ul>

            <p className="mt-7 font-display text-[1.6rem] font-bold">
              $1,500
            </p>

            <p className="mt-5 max-w-[470px] text-xs leading-[1.55] sm:text-sm">
              <strong>Application required.</strong> If your application is a
              fit, we start with a $150 scoping call. If we proceed with the
              Deep Review, the $150 is credited toward the $1,500 fee.
            </p>

            <Link
  to="/deep-review"
  className="mt-7 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-accent-contrast no-underline transition-all hover:-translate-y-0.5 hover:opacity-90"
>
  Learn more
</Link>
          </div>

          {/* Right */}
          <div className="lg:pl-16">
            <h3 className="text-xs font-bold uppercase tracking-[0.02em]">
              What you leave with
            </h3>

            <ul className="mt-7 space-y-1 text-sm leading-[1.45] sm:text-[0.9rem]">
              <li>
                ✓ A clearer view of whether the research holds together from
                problem to conclusion
              </li>

              <li>✓ The parts of the work that are already well supported</li>

              <li>
                ✓ Assumptions, methodological issues, or gaps that may be
                weakening the study
              </li>

              <li>
                ✓ A clearer understanding of what your results do and do not
                allow you to conclude
              </li>

              <li>
                ✓ The research questions or decisions that deserve attention
                next
              </li>

              <li>
                ✓ A written review you can return to after the engagement
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

/*
function TwoWaysToWork() {
  return (
    <section className="bg-[#5b453e] text-white">
      <div className="mx-auto w-full max-w-[1100px] px-6 py-10 sm:px-10 lg:py-12">

        <h2 className="text-center text-xs font-bold uppercase tracking-[0.02em] text-white">
          Two ways to work with me
        </h2>

        <div className="mx-auto mt-10 grid max-w-[700px] gap-10 sm:grid-cols-2 sm:gap-0">
*/
          {/* 01 */}
          /*
          <div className="text-center sm:border-l sm:border-r sm:border-white/40 sm:px-12">
                      <p className="text-sm font-bold">
              01
            </p>

            <h3 className="mt-2 font-display text-sm font-bold">
              Book a Call with Me
            </h3>

            <p className="mt-7 text-xs text-white/90">
              60 minutes · $150
            </p>

            <a
              href={WHOP.bookCall150}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs font-bold uppercase text-white no-underline hover:underline hover:underline-offset-4"
            >
              Book a call →
            </a>
          </div>
          

          {/* 02 */ 
          /*
          <div className="text-center sm:border-r sm:border-white/40 sm:px-12">
            <p className="text-sm font-bold">
              02
            </p>

            <h3 className="mt-2 font-display text-sm font-bold">
              The Deep Review
            </h3>

            <p className="mt-7 text-xs font-bold text-white/90">
              $1,500
            </p>

            <a
              href="/deep-review/apply"
              className="mt-1 inline-block text-xs font-bold text-white no-underline hover:underline hover:underline-offset-4"
            >
              Learn more
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
*/


function TwoWaysToWork() {
  return (
    <section className="bg-[#5b453e] text-white">
      <div className="mx-auto w-full max-w-[1100px] px-6 py-12 sm:px-10 lg:py-14">

        <h2 className="text-center text-xs font-bold uppercase tracking-[0.02em] text-white">
          Two ways to work with me
        </h2>

        <div className="mx-auto mt-10 grid max-w-[760px] gap-5 sm:grid-cols-2">

          {/* 01 */}
          <div className="rounded-2xl border border-white/20 bg-white/5 px-8 py-10 text-center shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10">
            <p className="text-sm font-bold text-white/80">
              01
            </p>

            <h3 className="mt-3 font-display text-base font-bold">
              Book a Call with Me
            </h3>

            <p className="mt-6 text-sm text-white/85">
              60 minutes · $150
            </p>

            <a
              href={WHOP.bookCall150}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.05em] text-[#5b453e] no-underline transition hover:bg-white/90"
            >
              Book a call →
            </a>
          </div>

          {/* 02 */}
          <div className="rounded-2xl border border-white/20 bg-white/5 px-8 py-10 text-center shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10">
            <p className="text-sm font-bold text-white/80">
              02
            </p>

            <h3 className="mt-3 font-display text-base font-bold">
              The Deep Review
            </h3>

            <p className="mt-6 text-sm font-bold text-white/85">
              $1,500
            </p>

            <Link
              to="/deep-review"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-xs font-bold uppercase tracking-[0.05em] text-white no-underline transition hover:bg-white hover:text-[#5b453e]"
            >
              Learn more →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}


/*
function HelpWith() {
  return (
    <section className="bg-white text-[#5b453e]">
      <div className="mx-auto w-full max-w-[1450px] px-6 py-12 sm:px-10 lg:px-16 lg:py-14">

        <h2 className="text-center font-display text-[1.3rem] font-bold uppercase tracking-[0.01em] sm:text-[1.5rem]">
          What I can help with
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {helpWith.map((h, index) => (
            <div
              key={h.n}
              className={`lg:px-12 ${
                index !== helpWith.length - 1
                  ? "lg:border-r lg:border-[#5b453e]/15"
                  : ""
              }`}
            >
              <p className="text-sm text-[#5b453e]/80">
                {h.n}
              </p>

              <h3 className="mt-2 max-w-[220px] font-display text-[1rem] font-bold leading-[1.4] text-[#5b453e]">
                {h.title}
              </h3>

              <p className="mt-6 max-w-[230px] text-sm leading-[1.5] text-[#5b453e]/85">
                {h.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
  */

function HelpWith() {
  return (
    <section className="bg-white text-[#5b453e]">
      <div className="mx-auto w-full max-w-[1450px] px-6 py-12 sm:px-10 lg:px-16 lg:py-14">

        <h2 className="text-center font-display text-[1.3rem] font-bold uppercase tracking-[0.01em] sm:text-[1.5rem]">
          What I can help with
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {helpWith.map((h) => (
            <div
              key={h.n}
              className="rounded-2xl border border-[#5b453e]/15 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-[#9a8555]">
                {h.n}
              </p>

              <h3 className="mt-3 font-display text-[1rem] font-bold leading-[1.4] text-[#5b453e]">
                {h.title}
              </h3>

              <p className="mt-5 text-sm leading-[1.6] text-[#5b453e]/80">
                {h.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


function Resources() {
  return (
    <section
      id="resources"
      className="scroll-mt-20 border-t-2 border-[#5b453e] bg-white text-[#5b453e]"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-10 sm:px-10 lg:px-12 lg:py-12">

        {/* Section heading */}
        
        <div className="text-center">
          <p className="text-lg font-bold text-[#5b453e]">
            Resources
          </p>

          <h2 className="mt-8 font-display text-lg font-bold leading-tight text-[#5b453e] sm:text-[1.2rem]">
            The research guides I wish I had earlier.
          </h2>

          <p className="mx-auto mt-6 max-w-[1100px] text-[0.95rem] font-semibold leading-[1.6] text-[#5b453e]/90 sm:text-base lg:text-[1.05rem]">
  Practical guides and tools for finding the real research problem,
  asking better questions, choosing methods that actually fit the
  question, making sense of results, and knowing what to do when the
  work gets messy. Some are free, some go deeper. Start with the
  problem you are trying to solve.
</p>
        </div>

        {/* Guides */}
        
        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-0">

          {/* Free guide */}
          
          <div className="lg:border-r lg:border-[#5b453e]/60 lg:pr-12">

            <p className="text-[0.95rem] uppercase tracking-[0.02em] text-[#5b453e]/80">
              Start here · Before the method
            </p>

            <h3 className="mt-5 font-display text-sm font-bold text-[#5b453e]">
              Before You Choose a Method
            </h3>

            <p className="mt-6 text-base leading-[1.5] text-[#5b453e]/90">
              This guide is designed to help you work out whether you actually
              have a research problem, whether the question can be answered,
              and what needs to be clear before you choose a method.
            </p>

            <p className="mt-6 text-base text-[#5b453e]">
              Inside:
            </p>

            <ul className="mt-5 space-y-1 text-base leading-[1.45] text-[#5b453e]/90">
              <li>→ The difference between a topic, a problem, a gap, and a research question</li>
              <li>→ Bad, mediocre, and strong examples, with explanations</li>
              <li>→ The Research Spine, a seven-part way to check whether your study holds together before you start</li>
              <li>→ A nine-question Research Question Stress Test</li>
              <li>→ A Method-Last Test to stop you choosing methods because they are familiar, fashionable, or available</li>
              <li>→ Worked cases from experimental, computational, and people-based research</li>
              <li>→ A one-page Research Readiness Check you can use before writing a proposal or starting data collection</li>
              <li>→ A short section on using AI without handing over the thinking that makes you a researcher</li>
            </ul>
{/*
            <div className="mt-6 rounded-r-xl border-l-4 border-[#9a8555] bg-[#5b453e]/[0.04] px-5 py-4">
  <p className="text-[0.95rem] leading-[1.7] text-[#5b453e]/85">
    This guide is designed to help you work out whether you actually have a
    research problem, whether the question can be answered, and what needs to
    be clear before you choose a method.
  </p>
</div>

*/}

            <p className="mt-6 text-[0.95rem] font-bold uppercase">
              Free · PDF
            </p>

            <a
  href="/free-guide"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-1 inline-block text-[0.95rem] font-bold uppercase text-[#5b453e] no-underline hover:underline hover:underline-offset-4"
>
  Get the guide ↗
</a>
          </div>

          {/* Paid guide */}
          
          <div className="lg:pl-12">

            <p className="text-[0.95rem] uppercase tracking-[0.02em] text-[#5b453e]/80">
              Research design guide
            </p>

            <h3 className="mt-5 font-display text-sm font-bold text-[#5b453e]">
              Design Research That Holds Together
            </h3>

            <p className="mt-6 text-base leading-[1.5] text-[#5b453e]/90">
              A practical research-design handbook for moving from the problem
              through the question, literature, methodology, investigation,
              interpretation, and the conclusions you can responsibly defend.
            </p>

            <p className="mt-6 text-base text-[#5b453e]">
              Inside:
            </p>

            <ul className="mt-5 space-y-1 text-base leading-[1.45] text-[#5b453e]/90">
              <li>→ A practical process for moving from a vague idea to a research problem worth investigating</li>
              <li>→ How to read literature to change your understanding rather than merely collect citations</li>
              <li>→ How to design research questions that are answerable, consequential, and appropriately scoped</li>
              <li>→ How to decide what kind of evidence would actually answer the question</li>
              <li>→ How to choose methods from the question rather than force questions around familiar methods</li>
              <li>→ Experimental, computational, and people-based worked cases throughout</li>
              <li>→ Tools for assumptions, variables, measurement quality, controls, comparison, bias, uncertainty, and validity</li>
              <li>→ A section on exploratory vs confirmatory work, preregistration, and honest interpretation</li>
              <li>→ How to diagnose failed, confusing, or inconclusive research</li>
            </ul>

            <p className="mt-6 text-[0.95rem] font-bold uppercase">
              $49 · PDF
            </p>

            <a
              href={WHOP.researchGuide49}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-[0.95rem] font-bold uppercase text-[#5b453e] no-underline hover:underline hover:underline-offset-4"
            >
              Get the guide ↗
            </a>
          </div>

        </div>

        {/* Decorative divider */}
        
<div className="mt-16 flex items-center justify-center gap-3">
  <span className="h-3 w-3 rounded-full bg-[#7a4638]" />
  <span className="h-3 w-3 rounded-full bg-[#7a4638]" />
  <span className="h-3 w-3 rounded-full bg-[#7a4638]" />
</div>
      </div>
    </section>
  );
}
  

/*
function Resources() {
  return (
    <section
      id="resources"
      className="scroll-mt-20 border-t-2 border-[#5b453e] bg-white text-[#5b453e]"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-10 sm:px-10 lg:px-12 lg:py-12">

        {/* Section heading */
/*
        <div className="text-center">
          <p className="text-lg font-bold text-[#5b453e]">
            Resources
          </p>

          <h2 className="mt-8 font-display text-lg font-bold leading-tight text-[#5b453e] sm:text-[1.2rem]">
            The research guides I wish I had earlier.
          </h2>

          <p className="mx-auto mt-6 max-w-[1100px] text-[0.95rem] font-semibold leading-[1.6] text-[#5b453e]/90 sm:text-base lg:text-[1.05rem]">
            Practical guides and tools for finding the real research problem,
            asking better questions, choosing methods that actually fit the
            question, making sense of results, and knowing what to do when the
            work gets messy. Some are free, some go deeper. Start with the
            problem you are trying to solve.
          </p>
        </div>

        {/* Resource cards */
        /*
        <div className="mx-auto mt-12 grid max-w-[900px] gap-8 sm:grid-cols-2">

          {/* Free guide */
          /*
          <div className="group overflow-hidden rounded-2xl border border-[#5b453e]/15 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <a href="/#free-guide" className="block">
              <img
                src="/free-guide.jpg"
                alt="Before You Choose a Method research guide"
                className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </a>

            <div className="p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.06em] text-[#9a8555]">
                Free · PDF
              </p>

              <h3 className="mt-3 font-display text-base font-bold text-[#5b453e]">
                Before You Choose a Method
              </h3>

              <a
                href="/#free-guide"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-[#5b453e] px-6 py-3 text-xs font-bold uppercase tracking-[0.05em] text-white no-underline transition hover:bg-[#493731]"
              >
                Get the guide →
              </a>
            </div>
          </div>

          {/* Paid guide */
          /*
          <div className="group overflow-hidden rounded-2xl border border-[#5b453e]/15 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <a
              href={WHOP.researchGuide49}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="/research-design-guide.jpg"
                alt="Design Research That Holds Together research guide"
                className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </a>

            <div className="p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.06em] text-[#9a8555]">
                $49 · PDF
              </p>

              <h3 className="mt-3 font-display text-base font-bold text-[#5b453e]">
                Design Research That Holds Together
              </h3>

              <a
                href={WHOP.researchGuide49}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-[#5b453e] px-6 py-3 text-xs font-bold uppercase tracking-[0.05em] text-white no-underline transition hover:bg-[#493731]"
              >
                Get the guide →
              </a>
            </div>
          </div>

        </div>

        {/* Decorative divider */
        /*
        <div className="mt-16 flex items-center justify-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[#7a4638]" />
          <span className="h-3 w-3 rounded-full bg-[#7a4638]" />
          <span className="h-3 w-3 rounded-full bg-[#7a4638]" />
        </div>

      </div>
    </section>
  );
}
*/


function EcoRue() {
  return (
    <section className="bg-[#5b453e] text-white">
      <div className="mx-auto grid w-full max-w-[1450px] gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[0.8fr_1.5fr_0.7fr] lg:items-center lg:gap-16 lg:px-16 lg:py-14">

        {/* Left */}
        <div>
          <p className="text-base leading-relaxed text-white sm:text-[1.05rem]">
            I&apos;m also building{" "}
            <span className="font-bold">EcoRue</span>
          </p>
        </div>

        {/* Middle */}
        <div>
          <p className="max-w-[620px] text-sm leading-[1.65] text-white/95 sm:text-base">
            EcoRue grew out of a problem I kept seeing in research: good
            ideas can stall long before they reach practical use, not because
            the thinking is weak, but because the tools, infrastructure,
            expertise, or connections needed to take the work further are not
            always within reach. I am building EcoRue as an R&amp;D company
            around that gap, beginning with sustainable materials,
            computational research, and the systems that help promising
            research move closer to real-world use.
          </p>
        </div>

        {/* Right */}
        <div className="lg:text-center">
          <a
            href="https://www.ecorue.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-bold uppercase text-white no-underline hover:underline hover:underline-offset-4 sm:text-base"
          >
            Visit EcoRue ↗
          </a>
        </div>

      </div>
    </section>
  );
}

function WritingSection() {
  return (
    <section className="bg-white text-[#5b453e]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 py-10 text-center sm:px-10 lg:py-12">

        <p className="max-w-[1050px] font-display text-sm font-bold leading-[1.5] sm:text-base">
          I also write about research, how good ideas develop, and what helps
          ambitious work move closer to real-world use.
        </p>

        <a
          href={SUBSTACK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 text-sm font-bold uppercase text-[#5b453e] no-underline hover:underline hover:underline-offset-4"
        >
          Read my writing ↗
        </a>

      </div>
    </section>
  );
}
