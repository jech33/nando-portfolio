import { Caveat, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
});

export const ownersText = localFont({
  variable: "--font-owners-text",
  src: [
    {
      path: "./fonts/Owners Text/Owners Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Owners Text/Owners Black Italic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/Owners Text/Owners Black.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Owners Text/Owners Bold Italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Owners Text/Owners Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Owners Text/Owners Light Italic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Owners Text/Owners Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Owners Text/Owners Medium Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Owners Text/Owners Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Owners Text/Owners XBlack.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Owners Text/Owners XLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Owners Text/Owners XLight Italic.otf",
      weight: "200",
      style: "italic",
    },
  ],
});
