import { Card, ExternalCta, Section } from "./ui";

export type OfferItem = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href?: string;
  to?: string;
};

export function NextOffers({
  heading,
  items,
}: {
  heading: string;
  items: OfferItem[];
}) {
  return (
    <Section tone="alt">
      <h2 className="text-2xl sm:text-3xl">{heading}</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title} className="flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground">
              {item.eyebrow}
            </p>
            <h3 className="mt-3 text-xl">{item.title}</h3>
            <p className="mt-3 flex-1 text-[0.93rem] leading-relaxed text-muted-foreground">
              {item.body}
            </p>
            <div className="mt-6">
              {item.href ? (
                <ExternalCta href={item.href} className="w-full">
                  {item.cta}
                </ExternalCta>
              ) : (
                <a
                  href={item.to}
                  className="inline-flex w-full items-center justify-center rounded-full bg-accent px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.12em] text-accent-contrast no-underline transition-all hover:-translate-y-0.5 hover:opacity-90"
                >
                  {item.cta}
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
