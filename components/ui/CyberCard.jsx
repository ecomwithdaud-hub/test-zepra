export function CyberCard({ children, className = "" }) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px animate-scanline bg-gradient-to-r from-transparent via-brand-cyan/70 to-transparent motion-reduce:animate-none"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-10 h-5 w-5 border-l-2 border-t-2 border-brand-cyan/40"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 z-10 h-5 w-5 border-r-2 border-t-2 border-brand-cyan/40"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-10 h-5 w-5 border-b-2 border-l-2 border-brand-cyan/40"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-10 h-5 w-5 border-b-2 border-r-2 border-brand-cyan/40"
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
