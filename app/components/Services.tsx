const services = [
  {
    title: "Full Truckload (FTL)",
    desc: "Dedicated trailers for large shipments, moving direct from pickup to delivery with no stops in between.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M3 16.5V7.5A1.5 1.5 0 0 1 4.5 6h9A1.5 1.5 0 0 1 15 7.5v9M3 16.5A1.5 1.5 0 0 0 4.5 18h.75m-2.25-1.5h2.25m12.75 0H15m5.25 0H21m-5.25 0A1.5 1.5 0 0 0 17.25 18h-1.5m4.5-1.5v-4.243a1.5 1.5 0 0 0-.44-1.06l-2.007-2.008a1.5 1.5 0 0 0-1.06-.44H15m5.25 7.5h-1.5m-3.75 1.5a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm-9 0a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Z"
      />
    ),
  },
  {
    title: "LTL Shipping",
    desc: "Cost-efficient less-than-truckload freight for smaller loads, consolidated and routed for speed.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M3.75 9h16.5M3.75 15h16.5M6 4.5h12A2.25 2.25 0 0 1 20.25 6.75v10.5A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 6 4.5Z"
      />
    ),
  },
  {
    title: "Expedited & Same-Day",
    desc: "Time-critical loads dispatched immediately with priority routing when the clock is against you.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M13 10V3L4 14h7v7l9-11h-7Z"
      />
    ),
  },
  {
    title: "Warehousing & Distribution",
    desc: "Secure storage and cross-docking that keeps inventory moving instead of sitting idle.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M3 9.75 12 3l9 6.75V21H3V9.75Z M8.25 21v-6a1.5 1.5 0 0 1 1.5-1.5h4.5a1.5 1.5 0 0 1 1.5 1.5v6"
      />
    ),
  },
  {
    title: "Cross-Country Hauling",
    desc: "Long-haul lanes managed end-to-end with proactive tracking across provincial and state lines.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M9 20.25 4.5 18V6l4.5 2.25m0 12L15 21l4.5-2.25V6.75L15 4.5m-6 3.75L15 4.5m-6 3.75v12M15 4.5v12"
      />
    ),
  },
  {
    title: "Dedicated Fleet Solutions",
    desc: "Custom capacity built around your volume, with consistent drivers and predictable pricing.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M15.75 6.75V15m0 0a3 3 0 1 1-6 0m6 0H4.5A1.5 1.5 0 0 1 3 13.5V6.75A1.5 1.5 0 0 1 4.5 5.25h9a1.5 1.5 0 0 1 1.5 1.5v.75m0 0h3.19a1.5 1.5 0 0 1 1.06.44l2.06 2.06a1.5 1.5 0 0 1 .44 1.06V13.5a1.5 1.5 0 0 1-1.5 1.5h-.75m-3.75-8.25H21m-11.25 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">
            What We Haul
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-navy-900 sm:text-4xl">
            Full-service freight, tailored to your lane
          </h2>
          <p className="mt-4 text-navy-800/70">
            From single pallets to dedicated fleets, Heroic Logistics builds
            shipping solutions around your freight &mdash; not the other way
            around.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-navy-900/10 p-7 transition-all hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-xl hover:shadow-navy-900/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                  {service.icon}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
