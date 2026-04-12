import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumière Studio | Premium Photography in Lagos",
  description:
    "Award-winning photographer based in Lagos, Nigeria. Specializing in weddings, portraits, events, and fashion photography. Capturing moments that matter.",
  keywords: [
    "photographer Lagos",
    "wedding photographer Nigeria",
    "portrait photography Lagos",
    "event photographer Lagos",
    "fashion photography Nigeria",
    "professional photographer Lagos",
    "Lumière Studio",
  ],
  authors: [{ name: "Lumière Studio" }],
  openGraph: {
    title: "Lumière Studio | Premium Photography in Lagos",
    description:
      "Award-winning photographer based in Lagos. Capturing moments that matter — weddings, portraits, events & fashion.",
    type: "website",
    locale: "en_NG",
    siteName: "Lumière Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumière Studio | Premium Photography in Lagos",
    description: "Capturing moments that matter. Based in Lagos, available for travel.",
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
    <html lang="en" suppressHydrationWarning>
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
