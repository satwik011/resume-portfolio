import type { Metadata } from "next";
import localFont from "next/font/local";
import { profile } from "@/data/portfolio";
import "./globals.css";

// Self-hosted variable fonts (OFL licensed): no request to Google at runtime or build time.
const display = localFont({
  src: "../fonts/bricolage-grotesque.woff2",
  weight: "200 800",
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: "../fonts/figtree.woff2",
  weight: "300 900",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.role} from ${profile.city}, India. React, Next.js, Node.js, GraphQL and SQL — I build apps end to end.`,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: "UI to API to database. Come take the road trip.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the inline script below adds a "js" class before React loads.
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        {/* Lets the CSS hide reveal-on-scroll items only when JavaScript is on */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
