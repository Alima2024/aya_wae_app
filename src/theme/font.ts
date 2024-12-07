import { Inter } from "next/font/google";

export const FONTS = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const fontFamily = FONTS.style.fontFamily;

export default FONTS;
