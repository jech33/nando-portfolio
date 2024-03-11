import type { Metadata } from "next";
import "./globals.css";
import { caveat, poppins } from "./fonts";
import Link from "next/link";
import PageAnimatePresence from "./_ui/PageAnimatePresence";

export const metadata: Metadata = {
  title: "Hernando Saieh",
  description:
    "Product Designer portfolio of Hernando Saieh: Embrace the creative flow",
  authors: [{ name: "Javier Echavez Chardaux" }, { name: "Hernando Saieh" }],
  keywords: ["design", "product", "portfolio", "creative", "flow"],
  openGraph: {
    title: "Hernando Saieh",
    description:
      "Product Designer portfolio of Hernando Saieh: Embrace the creative flow",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${caveat.variable} font-primary bg-background min-w-[1024px]`}
      >
        <PageAnimatePresence>
          <div className="w-full overflow-x-hidden">{children}</div>
        </PageAnimatePresence>
      </body>
    </html>
  );
}
