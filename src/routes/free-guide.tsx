import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/Layout";
import { Card, Eyebrow, ExternalCta, Section } from "@/components/site/ui";
import { DOWNLOADS, WHOP } from "@/lib/links";
import { NextOffers } from "@/components/site/NextOffers";

const TITLE = "Your Free Guide: Before You Choose a Method — Dr. Ruth Mwongeli Muthoka";
const DESC =
  "Download 'Before You Choose a Method', the free research guide on finding the real research problem and asking an answerable question.";

export const Route = createFileRoute("/free-guide")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: FreeGuidePage,
});

function FreeGuidePage() {
  return (
    <PageShell>
      <Section className="pt-14">
        <Eyebrow>Your download is ready</Eyebrow>
        <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">Before You Choose a Method</h1>
        
        <div className="mt-6 rounded-r-xl border-l-4 border-[#9a8555] bg-[#5b453e]/[0.04] px-5 py-4">
  <p className="text-[0.95rem] leading-[1.7] text-[#5b453e]/85">
    This guide is designed to help you work out whether you actually have a
    research problem, whether the question can be answered, and what needs to
    be clear before you choose a method.
  </p>
</div>
        <Card className="mt-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-foreground">
            Free · PDF
          </p>
          <a
  href="https://drive.google.com/uc?export=download&id=1-L4xDUMSp3pFjr7oB5PUsYl-qz6zRSeL"
  className="mt-4 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-accent-contrast no-underline transition-all hover:-translate-y-0.5 hover:opacity-90"
>
  Download the guide ↓
</a>
          <p className="mt-3 text-xs text-muted-foreground">
            If the download does not start, right-click the button and choose &ldquo;Save link
            as&rdquo;.
          </p>
        </Card>
      </Section>

      <NextOffers
        heading="Where researchers usually go next"
        items={[
          {
            eyebrow: "Go deeper · $49 · PDF",
            title: "Design Research That Holds Together",
            body: "The full research-design handbook: problem, question, literature, methodology, investigation, interpretation, and the conclusions you can responsibly defend.",
            cta: "Get the guide ↗",
            href: WHOP.researchGuide49,
          },
          {
            eyebrow: "01 · 60 minutes · $150",
            title: "Book a Call with Me",
            body: "Bring the research problem you keep coming back to. We spend 60 minutes working through where it is getting stuck and what makes sense to do next.",
            cta: "Book a call →",
            href: WHOP.bookCall150,
          },
          {
            eyebrow: "When a call isn't enough · $1,500",
            title: "The Deep Review",
            body: "I read the material properly and give you an independent written review of the problem, design, assumptions, results and what deserves attention next.",
            cta: "Apply for the Deep Review →",
            to: "/deep-review/apply",
          },
        ]}
      />
    </PageShell>
  );
}
