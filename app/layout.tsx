import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.heroiclogistics.co"),
  alternates: {
    canonical: "/",
  },
  title: "Heroic Logistics | Freight Transportation Across Canada & the U.S.",
  description:
    "Heroic Logistics provides reliable freight transportation, dispatch, and logistics services across Canada and the United States.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
