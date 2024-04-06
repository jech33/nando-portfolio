import type { Metadata } from "next";
import "./globals.css";
import { caveat, ownersText, poppins } from "./_ui/fonts";
import PageTransition from "./_ui/layout/PageTransition";

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
        className={`${poppins.variable} ${caveat.variable} ${ownersText.variable} min-w-[1440px] bg-background font-primary text-textPrimary`}
      >
        <div className="relative min-h-[100svh] w-full overflow-x-hidden">
          <PageTransition>{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}
