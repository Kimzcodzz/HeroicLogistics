const steps = [
  {
    title: "Request a Quote",
    desc: "Tell us your origin, destination, and freight details. We respond fast.",
  },
  {
    title: "We Match Your Load",
    desc: "Your shipment is matched with a vetted carrier suited to your lane and timeline.",
  },
  {
    title: "Track in Transit",
    desc: "Get proactive updates from pickup to delivery, with a dispatcher on call.",
  },
  {
    title: "Delivered On-Time",
    desc: "Freight arrives as promised, with POD and paperwork handled for you.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-navy-900 sm:text-4xl">
            From quote to delivery in four steps
          </h2>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="route-line absolute left-0 right-0 top-6 hidden h-0.5 lg:block" />

          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-lg font-black text-gold-400">
                {i + 1}
              </span>
              <h3 className="mt-5 font-bold text-navy-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
