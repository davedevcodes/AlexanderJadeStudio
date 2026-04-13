import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Alexander Studio | Premium Photography in Port Harcourt",
  description:
    "Award-winning photographer based in Port Harcourt, Nigeria. Specializing in weddings, portraits, events, and fashion photography. Capturing moments that matter.",
  keywords: [
    "photographer Lagos",
    "wedding photographer Nigeria",
    "portrait photography Port Harcourt",
    "event photographer Port Harcourt",
    "fashion photography Nigeria",
    "professional photographer Port Harcourt",
    "Alexander Studio",
  ],
  authors: [{ name: "Alexander Studio" }],
  openGraph: {
    title: "Alexander Studio | Premium Photography in Port Harcourt",
    description:
      "Award-winning photographer based in Lagos. Capturing moments that matter — weddings, portraits, events & fashion.",
    type: "website",
    locale: "en_NG",
    siteName: "Alexander Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander Studio | Premium Photography in Port Harcourt",
    description: "Capturing moments that matter. Based in Port Harcourt, available for travel.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="grain-overlay">
        {children}
      </body>
    </html>
  );
}
