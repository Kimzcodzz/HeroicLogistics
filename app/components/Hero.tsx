export default function Hero() {
  return (
    <section
      id="top"
      className="diagonal-cut relative overflow-hidden bg-navy-950 pb-28 pt-20 text-white"
    >
      {/* Ambient glow accents */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-gold-500/20 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col items-start px-6">
        <span className="rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
          Fidelity Drives Our Efficiency
        </span>

        <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Freight moved with{" "}
          <span className="bg-gradient-to-r from-gold-400 to-accent-400 bg-clip-text text-transparent">
            heroic reliability
          </span>
          , coast to coast.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          Heroic Logistics connects your freight with a vetted carrier network,
          real-time visibility, and a dispatch team that never sleeps &mdash;
          so every shipment lands on time, every time.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-accent-500 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-accent-500/30 transition-transform hover:-translate-y-0.5 hover:bg-accent-400"
          >
            Request a Quote
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/25 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            Explore Services
          </a>
        </div>

        {/* Animated route line */}
        <div className="route-line mt-14 h-1 w-full max-w-2xl rounded-full opacity-80" />

        <dl className="mt-10 grid w-full max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            ["500+", "Loads / Month"],
            ["48", "States Covered"],
            ["99.2%", "On-Time Rate"],
            ["24/7", "Live Dispatch"],
          ].map(([stat, label]) => (
            <div key={label}>
              <dt className="text-2xl font-black text-gold-400 sm:text-3xl">{stat}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-white/60">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
