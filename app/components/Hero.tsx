export default function Hero() {
  return (
    <section
      id="top"
      className="diagonal-cut relative min-h-[780px] overflow-hidden bg-navy-950 pb-28 pt-20 text-white"
    >
      {/* Hero Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source
          src="/heroiclogisticsherovideo.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-navy-950/65" />

      {/* Additional gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/55 to-navy-950/20" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[640px] max-w-6xl flex-col items-start justify-center px-6">
        <div className="w-full">
          <div>
            <span className="inline-flex max-w-full flex-col items-start gap-1 rounded-lg border border-gold-500/40 bg-gold-500/10 px-3 py-2 text-[10px] font-bold uppercase leading-tight tracking-[0.12em] text-gold-400 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-2 sm:rounded-full sm:px-4 sm:py-1 sm:text-xs sm:tracking-[0.2em]">
              <span>Based in Canada.</span>
              <span>Built for North America.</span>
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Freight moved with{" "}
              <span className="bg-gradient-to-r from-gold-400 to-accent-400 bg-clip-text text-transparent">
                heroic reliability
              </span>
              , across Canada and the U.S.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              From Canadian provinces to American destinations, Heroic Logistics
              moves your freight with real-time visibility and a dispatch team
              that keeps every lane moving.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/quote"
                className="rounded-full bg-accent-500 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-accent-500/30 transition-transform hover:-translate-y-0.5 hover:bg-accent-400"
              >
                Get a Quote
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/30 bg-black/10 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>

        {/* Animated route line */}
        <div className="route-line mt-14 h-1 w-full max-w-2xl rounded-full opacity-80" />

        {/* Stats */}
        <dl className="mt-10 grid w-full max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            ["500+", "Loads / Month"],
            ["Canada + U.S.", "Coverage"],
            ["99.2%", "On-Time Rate"],
            ["24/7", "Live Dispatch"],
          ].map(([stat, label]) => (
            <div key={label}>
              <dt className="text-2xl font-black text-gold-400 sm:text-3xl">
                {stat}
              </dt>

              <dd className="mt-1 text-xs uppercase tracking-wide text-white/70">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}