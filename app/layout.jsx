import { Cormorant_Garamond, Montserrat } from "next/font/google";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["200", "400", "600", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400"],
});

export const metadata = {
  title: "Santiago Rodriguez",
  description: "Full Stack Developer portfolio",
  icons: {
    icon: "/basketball.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${cormorant.variable}`} style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
