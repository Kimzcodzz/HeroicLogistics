import { submitContactMessage } from "../actions";

export default function Contact() {
  return (
    <section id="contact" className="diagonal-cut-top bg-navy-950 pb-24 pt-28 text-white">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Need to reach our team?
          </h2>
          <p className="mt-4 max-w-md text-white/70">
            Questions about an existing shipment, partnership, or service? Send
            a message and a member of our team will get back to you.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <a href="tel:+18005550123" className="flex items-center gap-3 text-white/80 hover:text-gold-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5 flex-none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a1.5 1.5 0 0 0 1.5-1.5v-2.29a1.5 1.5 0 0 0-1.216-1.474l-3.13-.626a1.5 1.5 0 0 0-1.53.68l-.69 1.15a12.21 12.21 0 0 1-5.66-5.66l1.15-.69a1.5 1.5 0 0 0 .68-1.53l-.626-3.13A1.5 1.5 0 0 0 6.54 5.25H4.25a1.5 1.5 0 0 0-1.5 1.5Z" />
              </svg>
              (778)991-8788
            </a>
            <a href="mailto:info@heroiclogistics.co" className="flex items-center gap-3 text-white/80 hover:text-gold-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5 flex-none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75 12 13.5l9.75-6.75M3.75 5.25h16.5A1.5 1.5 0 0 1 21.75 6.75v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5Z" />
              </svg>
              info@heroiclogistics.co
            </a>
            <div className="flex items-center gap-3 text-white/80">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5 flex-none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7.5-6.19-7.5-11.25a7.5 7.5 0 1 1 15 0C19.5 14.81 12 21 12 21Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
              </svg>
              Based in Canada, serving Canada and the U.S.
            </div>
          </div>
        </div>

        <form
          action={submitContactMessage}
          className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-7"
        >
          <div className="sr-only" aria-hidden="true">
            <label>
              Leave this field blank
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              name="Name"
              placeholder="Full name"
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold-400 focus:outline-none"
            />
            <input
              required
              type="email"
              name="Email"
              placeholder="Email address"
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold-400 focus:outline-none"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="Company"
              placeholder="Company name"
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold-400 focus:outline-none"
            />
            <input
              name="Phone"
              type="tel"
              placeholder="Phone number"
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold-400 focus:outline-none"
            />
          </div>
          <textarea
            name="Details"
            rows={4}
            placeholder="How can we help?"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold-400 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-accent-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

