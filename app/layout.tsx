import type { Metadata } from "next";
import "./globals.css";
import { caveat, ownersText, poppins } from "./fonts";
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
        className={`${poppins.variable} ${caveat.variable} ${ownersText.variable} font-primary text-textPrimary bg-background min-w-[1024px]`}
      >
        <PageAnimatePresence>
          <div className="w-full overflow-x-hidden">{children}</div>
        </PageAnimatePresence>
      </body>
    </html>
  );
}
