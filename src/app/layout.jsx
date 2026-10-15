import "./globals.css";
import { Oswald, Silkscreen, Caveat } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import PullCordSwitch from "@/components/PullCordSwitch";
import Footer from "@/components/Footer";

// 1. Oswald for almost everywhere (Headings, body, cards, buttons)
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

// 2. Pixel/Display Google Font ("Silkscreen") for Name Only (works on every device)
const bitcount = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bitcount",
});

// 3. Handwritten Google Font ("Caveat") for neon quotes & notes
const handwritten = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-handwritten",
});

export const metadata = {
  title: "Tanvirul Islam | CSE Graduate & Full Stack Developer",
  description:
    "Portfolio of Tanvirul Islam — Computer Science & Engineering Graduate from IIUC specializing in Web, Flutter, and Machine Learning.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${oswald.variable} ${bitcount.variable} ${handwritten.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-grid-pattern text-slate-900 dark:text-dark-text selection:bg-neon-primary selection:text-black">
        <ThemeProvider>
          {/* Hanging Pull-Cord Switch in Top-Right on Every Page */}
          <PullCordSwitch />

          {/* Sticky Top Navigation */}
          <Navbar />

          {/* Main Page Content */}
          <main className="flex-grow flex flex-col justify-center">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}