import Image from "next/image";
import { submitQuote } from "../actions";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Request a Freight Quote | Heroic Logistics",
  description:
    "Request a freight quote for shipments across Canada and the United States.",
};

export default function QuotePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Quote Introduction */}
        <section className="relative min-h-[520px] overflow-hidden bg-navy-950 text-white sm:min-h-[560px]">
          {/* Freight Truck Image */}
          <div className="absolute inset-0">
            <Image
              src="/freight-truck.jpg"
              alt="Freight truck travelling on the highway"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-navy-950/75" />

          {/* Darker left side for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/30" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />

          <div className="relative z-10 mx-auto flex min-h-[520px] max-w-6xl items-center px-6 py-20 sm:min-h-[560px] sm:py-28">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-gold-400" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
                  Freight Quote Request
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Tell us where your{" "}
                <span className="bg-gradient-to-r from-gold-400 to-accent-400 bg-clip-text text-transparent">
                  freight is headed.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                Share the shipment details below and our Canada-based dispatch
                team will prepare a transportation quote for your Canadian or
                U.S. lane.
              </p>

              {/* Decorative route indicator */}
              <div className="mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                <span className="h-2 w-2 rounded-full bg-gold-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
                Canada
                <span className="h-px w-16 bg-gradient-to-r from-gold-400/80 to-accent-400/80" />
                <span className="h-2 w-2 rounded-full bg-accent-400 shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
                United States
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="bg-white py-14 sm:py-20">
          <form
            action={submitQuote}
            className="mx-auto grid max-w-3xl gap-6 px-6"
          >
            <div className="sr-only" aria-hidden="true">
              <label>
                Leave this field blank
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-navy-900">
                Full name
                <input
                  required
                  name="Name"
                  className="rounded-lg border border-navy-900/15 px-4 py-3 font-normal focus:border-accent-500 focus:outline-none"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-navy-900">
                Work email
                <input
                  required
                  type="email"
                  name="Email"
                  className="rounded-lg border border-navy-900/15 px-4 py-3 font-normal focus:border-accent-500 focus:outline-none"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-navy-900">
                Company
                <input
                  name="Company"
                  className="rounded-lg border border-navy-900/15 px-4 py-3 font-normal focus:border-accent-500 focus:outline-none"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-navy-900">
                Phone number
                <input
                  required
                  type="tel"
                  name="Phone"
                  className="rounded-lg border border-navy-900/15 px-4 py-3 font-normal focus:border-accent-500 focus:outline-none"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-navy-900">
                Pickup city and province/state
                <input
                  required
                  name="Origin"
                  className="rounded-lg border border-navy-900/15 px-4 py-3 font-normal focus:border-accent-500 focus:outline-none"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-navy-900">
                Delivery city and province/state
                <input
                  required
                  name="Destination"
                  className="rounded-lg border border-navy-900/15 px-4 py-3 font-normal focus:border-accent-500 focus:outline-none"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-navy-900">
                Freight type
                <select
                  name="Freight type"
                  className="rounded-lg border border-navy-900/15 bg-white px-4 py-3 font-normal focus:border-accent-500 focus:outline-none"
                >
                  <option>Full truckload</option>
                  <option>Less-than-truckload</option>
                  <option>Expedited</option>
                  <option>Dedicated fleet</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-bold text-navy-900">
                Ready date
                <input
                  type="date"
                  name="Ready date"
                  className="rounded-lg border border-navy-900/15 px-4 py-3 font-normal focus:border-accent-500 focus:outline-none"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-bold text-navy-900">
              Freight details
              <textarea
                name="Freight details"
                rows={5}
                placeholder="Weight, dimensions, number of pallets, special handling, and timing"
                className="rounded-lg border border-navy-900/15 px-4 py-3 font-normal placeholder:text-navy-800/45 focus:border-accent-500 focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="justify-self-start rounded-full bg-accent-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-navy-900"
            >
              Send Quote Request
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}