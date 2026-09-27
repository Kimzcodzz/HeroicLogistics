import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Submission Status | Heroic Logistics",
  robots: { index: false, follow: false },
};

type ConfirmationPageProps = {
  searchParams: Promise<{ type?: string; status?: string }>;
};

export default async function ConfirmationPage({ searchParams }: ConfirmationPageProps) {
  const { type, status } = await searchParams;
  const isQuote = type === "quote";
  const hasType = isQuote || type === "message";
  const hasError = status === "error" || !hasType;
  const formUrl = isQuote ? "/quote" : "/#contact";
  const contactEmail = isQuote ? "dispatch@heroiclogistics.co" : "info@heroiclogistics.co";

  return (
    <div className="flex min-h-screen flex-col bg-navy-950">
      <Navbar />
      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-24 text-white">
        <Image
          src="/freight-truck.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/65" />
        <div className="relative z-10 w-full max-w-2xl">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/50 bg-gold-400/10 text-gold-400">
            {hasError ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-7 w-7" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M10.3 3.86 1.82 18.14A2 2 0 0 0 3.54 21h16.92a2 2 0 0 0 1.72-2.86L13.7 3.86a2 2 0 0 0-3.4 0Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-7 w-7" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
              </svg>
            )}
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
            Heroic Logistics · Submission Status
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            {hasError
              ? "We couldn't send your request."
              : isQuote
                ? "Quote request received."
                : "Your message is on its way."}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {hasError
              ? isQuote
                ? "Please try again, or email dispatch directly and we'll be glad to help."
                : "Please try again, or email our team directly and we'll be glad to help."
              : isQuote
                ? "Our dispatch team has received your shipment details and will follow up with you shortly."
                : "Our team has received your message and will get back to you as soon as possible."}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href={formUrl}
              className="rounded-full bg-accent-500 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-accent-400"
            >
              {hasError ? "Try again" : "Send another request"}
            </Link>
            {hasError ? (
              <a href={`mailto:${contactEmail}`} className="text-sm font-semibold text-gold-400 hover:text-white">
                Email {isQuote ? "dispatch" : "our team"}
              </a>
            ) : (
              <Link href="/" className="text-sm font-semibold text-gold-400 hover:text-white">
                Return to home
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}