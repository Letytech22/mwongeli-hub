type PreloaderProps = {
    isLeaving: boolean;
    compact?: boolean;
  };
  
  export default function Preloader({
    isLeaving,
    compact = false,
  }: PreloaderProps) {
    return (
      <div
        role="status"
        aria-label="Loading Dr. Ruth Mwongeli Muthoka"
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#5b453e] transition-all ${
          compact ? "duration-500" : "duration-800"
        } ${
          isLeaving
            ? "pointer-events-none scale-[1.02] opacity-0"
            : "scale-100 opacity-100"
        }`}
      >
        <div className="flex flex-col items-center px-6 text-center">
  
          {/* Profile image */}
          <div className="preloader-logo-wrapper relative">
            <div className="absolute inset-0 rounded-full bg-[#9a8555]/40 blur-2xl" />
  
            <div
  className={`relative overflow-hidden rounded-full border-2 border-white/30 shadow-xl ${
    compact ? "h-20 w-20" : "h-24 w-24"
  }`}
>
  <img
    src="/ruth-hero.jpg"
    alt=""
    className="h-full w-full object-cover object-center"
  />
</div>
          </div>
  
          {/* Name */}
          <h1
            className={`mt-6 font-display font-bold tracking-tight text-white ${
              compact ? "text-lg" : "text-xl sm:text-2xl"
            }`}
          >
            Dr. Ruth Mwongeli Muthoka
          </h1>
  
          {!compact && (
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-white/70">
              Research Design · The Deep Review
            </p>
          )}
  
          {/* Animated dots */}
          <div
            className="mt-7 flex items-center gap-2"
            aria-hidden="true"
          >
            <span className="preloader-dot h-2.5 w-2.5 rounded-full bg-[#b9a068]" />
            <span className="preloader-dot h-2.5 w-2.5 rounded-full bg-[#b9a068]" />
            <span className="preloader-dot h-2.5 w-2.5 rounded-full bg-[#b9a068]" />
          </div>
  
          <span className="sr-only">
            Loading page
          </span>
  
        </div>
      </div>
    );
  }