import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/Layout";
import { Eyebrow, ExternalCta, Section } from "@/components/site/ui";
import { CalendlyEmbed } from "@/components/site/CalendlyEmbed";
import { NextOffers } from "@/components/site/NextOffers";
import { CALENDLY, WHOP } from "@/lib/links";

const TITLE = "Book Your Call — Dr. Ruth Mwongeli Muthoka";
const DESC = "Your call is paid for. Pick a time that works for you and tell me what to look at.";

export const Route = createFileRoute("/call-confirmed")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: CallConfirmedPage,
});

function CallConfirmedPage() {
  return (
    <PageShell>
      <Section className="pt-14">
        <Eyebrow>Payment received</Eyebrow>
        <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">Now pick your time.</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Choose a slot below for your 60-minute call. When you book, tell me in a few sentences
          what you are working on and where it is getting stuck — I read it before we meet so we can
          start on the actual problem.
        </p>
        <div className="mt-8">
          <CalendlyEmbed url={CALENDLY.bookACall} title="Book a call with Ruth" />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Calendar not loading?{" "}
          <a
            href={CALENDLY.bookACall}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent-foreground"
          >
            Open the booking page in a new tab ↗
          </a>
        </p>
      </Section>

      <NextOffers
        heading="Before we speak"
        items={[
          {
            eyebrow: "Free · PDF",
            title: "Before You Choose a Method",
            body: "Skim this before the call. It gives us shared language for the problem, the question and the method.",
            cta: "Get the free guide →",
            to: "/free-guide",
          },
          {
            eyebrow: "$49 · PDF",
            title: "Design Research That Holds Together",
            body: "The full handbook, from problem through methodology to conclusions you can defend.",
            cta: "Get the guide ↗",
            href: WHOP.researchGuide49,
          },
          {
            eyebrow: "When a call isn't enough · $1,500",
            title: "The Deep Review",
            body: "If the work needs proper reading time rather than 60 minutes, apply for a Deep Review.",
            cta: "Apply for the Deep Review →",
            to: "/deep-review/apply",
          },
        ]}
      />
    </PageShell>
  );
}
