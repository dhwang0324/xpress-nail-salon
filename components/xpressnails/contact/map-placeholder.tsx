export function MapPlaceholder() {
  return (
    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[2rem] bg-stone">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(38,33,28,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(38,33,28,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 text-charcoal/50">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            <path d="M12 21s-7-6.24-7-11.5A7 7 0 0 1 19 9.5C19 14.76 12 21 12 21Z" />
            <circle cx="12" cy="9.5" r="2.4" />
          </svg>
        </span>
        <p className="text-[0.7rem] uppercase tracking-wide2 text-charcoal/60">Embedded Map Placeholder</p>
        <p className="text-[0.65rem] text-charcoal/35">Swap for a Google Maps embed once the address is live</p>
      </div>
    </div>
  );
}
