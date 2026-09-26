import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Request a Freight Quote | Heroic Logistics",
  description: "Request a freight quote for shipments across Canada and the United States.",
};

export default function QuotePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
          <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />
          <div className="relative mx-auto max-w-3xl px-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              Freight Quote Request
            </span>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Tell us where your freight is headed.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              Share the shipment details below and our Canada-based dispatch team
              will prepare a transportation quote for your Canadian or U.S. lane.
            </p>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-20">
          <form
            action="mailto:dispatch@heroiclogistics.com"
            method="POST"
            encType="text/plain"
            className="mx-auto grid max-w-3xl gap-6 px-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-navy-900">
                Full name
                <input required name="Name" className="rounded-lg border border-navy-900/15 px-4 py-3 font-normal focus:border-accent-500 focus:outline-none" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-navy-900">
                Work email
                <input required type="email" name="Email" className="rounded-lg border border-navy-900/15 px-4 py-3 font-normal focus:border-accent-500 focus:outline-none" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-navy-900">
                Company
                <input name="Company" className="rounded-lg border border-navy-900/15 px-4 py-3 font-normal focus:border-accent-500 focus:outline-none" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-navy-900">
                Phone number
                <input required type="tel" name="Phone" className="rounded-lg border border-navy-900/15 px-4 py-3 font-normal focus:border-accent-500 focus:outline-none" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-navy-900">
                Pickup city and province/state
                <input required name="Origin" className="rounded-lg border border-navy-900/15 px-4 py-3 font-normal focus:border-accent-500 focus:outline-none" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-navy-900">
                Delivery city and province/state
                <input required name="Destination" className="rounded-lg border border-navy-900/15 px-4 py-3 font-normal focus:border-accent-500 focus:outline-none" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-navy-900">
                Freight type
                <select name="Freight type" className="rounded-lg border border-navy-900/15 bg-white px-4 py-3 font-normal focus:border-accent-500 focus:outline-none">
                  <option>Full truckload</option>
                  <option>Less-than-truckload</option>
                  <option>Expedited</option>
                  <option>Dedicated fleet</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-navy-900">
                Ready date
                <input type="date" name="Ready date" className="rounded-lg border border-navy-900/15 px-4 py-3 font-normal focus:border-accent-500 focus:outline-none" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-bold text-navy-900">
              Freight details
              <textarea name="Freight details" rows={5} placeholder="Weight, dimensions, number of pallets, special handling, and timing" className="rounded-lg border border-navy-900/15 px-4 py-3 font-normal placeholder:text-navy-800/45 focus:border-accent-500 focus:outline-none" />
            </label>
            <button type="submit" className="justify-self-start rounded-full bg-accent-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-navy-900">
              Send Quote Request
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}