import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-900 py-10 text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <Image
          src="/herologobluerecreation.png"
          alt="Heroic Logistics"
          width={160}
          height={50}
          className="h-9 w-auto opacity-90"
        />
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Heroic Logistics. Fidelity drives our efficiency.
        </p>
      </div>
    </footer>
  );
}
