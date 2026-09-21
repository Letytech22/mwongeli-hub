export function CalendlyEmbed({ url, title }: { url: string; title: string }) {
  const src = `${url}${url.includes("?") ? "&" : "?"}hide_gdpr_banner=1&background_color=fffffe&text_color=55423d&primary_color=8c7851`;
  return (
    <div className="overflow-hidden rounded-2xl border border-accent/20 bg-card">
      <iframe
        src={src}
        title={title}
        className="h-[760px] w-full border-0"
        loading="lazy"
      />
    </div>
  );
}
