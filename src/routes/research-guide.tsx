import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/Layout";
import { Card, Eyebrow, Section } from "@/components/site/ui";
import { NextOffers } from "@/components/site/NextOffers";
import { WHOP } from "@/lib/links";

const TITLE =
  "Your Guide: Design Research That Holds Together — Dr. Ruth Mwongeli Muthoka";

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

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Thank you for purchasing{" "}
          <strong>Research Design That Holds Together.</strong>
        </p>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        This handbook takes you through the full research journey, 
        from defining the problem and designing the investigation to evaluating the evidence, 
        interpreting what it supports, and deciding what should happen next.
        </p>

        <Card className="mt-8 max-w-2xl">

          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-foreground">
            $49 · PDF
          </p>

          <a
            href="https://drive.google.com/uc?export=download&id=1mmFUL8UN26uteHDVy8pcrKF8VEUZGwcJ"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-accent-contrast no-underline transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            Download the handbook ↓
          </a>

          <p className="mt-3 text-xs text-muted-foreground">
            Your PDF should begin downloading when you click the button.
          </p>

        </Card>
      </Section>

     

      <NextOffers
        heading="Where researchers usually go next?"
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
            to: "/deep-review",
          },
          {
            eyebrow: "Free · PDF",
            title: "Good Research Starts Long Before the Method",
            body: "A practical guide to finding the real research problem, sharpening the question, and deciding what an answer would require before you choose a method.",
            cta: "Get the free guide →",
            to: "/free-guide",
          },
        ]}
      />

    </PageShell>
  );
}