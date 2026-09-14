const points = [
  {
    title: "Vetted, Insured Carrier Network",
    desc: "Every carrier is screened for safety ratings, insurance, and on-time performance before they touch your freight.",
  },
  {
    title: "Real-Time Shipment Visibility",
    desc: "Track your load from pickup to delivery with proactive status updates &mdash; no chasing dispatch for answers.",
  },
  {
    title: "Dedicated Account Managers",
    desc: "One point of contact who knows your lanes, your volume, and your priorities.",
  },
  {
    title: "Transparent, Upfront Pricing",
    desc: "No hidden accessorials. You know the rate before the truck ever rolls.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-navy-950 py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
            Why Heroic Logistics
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Fidelity isn&rsquo;t a slogan &mdash; it&rsquo;s how we run every load
          </h2>
          <p className="mt-4 text-white/70">
            We built Heroic Logistics on one principle: show up when you say
            you will. That commitment shapes every carrier we onboard and
            every route we plan.
          </p>

          <div className="route-line mt-10 h-1 w-full max-w-sm rounded-full" />
        </div>

        <ul className="space-y-6">
          {points.map((point, i) => (
            <li
              key={point.title}
              className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gold-500 text-sm font-black text-navy-950">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-gold-400">{point.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/70">{point.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
