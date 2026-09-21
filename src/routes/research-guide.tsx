import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/Layout";
import { Card, Eyebrow, Section } from "@/components/site/ui";
import { NextOffers } from "@/components/site/NextOffers";
import { DOWNLOADS, WHOP } from "@/lib/links";

const TITLE = "Your Guide: Design Research That Holds Together — Dr. Ruth Mwongeli Muthoka";
const DESC =
  "Download 'Design Research That Holds Together', the research-design handbook from problem to defensible conclusion.";

export const Route = createFileRoute("/research-guide")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: ResearchGuidePage,
});

function ResearchGuidePage() {
  return (
    <PageShell>
      <Section className="pt-14">
        <Eyebrow>Payment received · Your download is ready</Eyebrow>
        <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
          Design Research That Holds Together
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Thank you for your purchase. Your handbook is below — keep the file somewhere you can
          return to, the checklists are meant to be reused at each stage of a study.
        </p>
        <Card className="mt-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-foreground">
            $49 · PDF
          </p>
          <a
            href={DOWNLOADS.researchGuide}
            download
            className="mt-4 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-accent-contrast no-underline transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            Download the handbook ↓
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Trouble downloading? Email me and I will send the file directly.
          </p>
        </Card>
      </Section>

      <NextOffers
        heading="Want a second pair of eyes on the actual study?"
        items={[
          {
            eyebrow: "01 · 60 minutes · $150",
            title: "Book a Call with Me",
            body: "Bring the vague idea, the question that does not quite work, the methodology problem, or the results you cannot interpret. We work through it together.",
            cta: "Book a call →",
            href: WHOP.bookCall150,
          },
          {
            eyebrow: "When a call isn't enough · $1,500",
            title: "The Deep Review",
            body: "I read the proposal, follow the research logic, examine methodology and assumptions, and write an independent review of what holds and what does not.",
            cta: "Apply for the Deep Review →",
            to: "/deep-review/apply",
          },
          {
            eyebrow: "Free · PDF",
            title: "Before You Choose a Method",
            body: "The starter guide: topic vs problem vs gap vs question, the Research Spine, the Question Stress Test and the Method-Last Test.",
            cta: "Get the free guide →",
            to: "/free-guide",
          },
        ]}
      />
    </PageShell>
  );
}
