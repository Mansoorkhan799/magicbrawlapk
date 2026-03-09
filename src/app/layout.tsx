import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://magicbrawlapk.net'),
  title: {
    default: "Magic Brawl APK v50.221 | Unlocked Premium – Unlimited Gems [2026]",
    template: "%s | Magic Brawl APK"
  },
  description: "Download Magic Brawl APK v50.221 — Brawl Stars MOD with all brawlers unlocked, unlimited gems, exclusive skins, custom maps & online battles. Free entertainment game for Android.",
  keywords: [
    "Magic Brawl APK",
    "magic brawl game",
    "magic brawl download",
    "magic brawl app",
    "magic brawl apk download",
    "magic brawl online",
    "download magic brawl",
    "magic brawl 2026",
    "magicbrawlapk",
    "magicbrawlapk.net",
    "Brawl Stars",
    "brawl stars private server",
    "brawl stars rebirth",
    "brawl stars clone",
    "magic brawl apk latest version",
    "magic brawl free download",
    "magic brawl official apk",
    "brawl game download",
    "magic brawl android",
    "magic brawl review",
    "magic brawl brawlers",
    "magic brawl skins",
    "online battles game",
    "magic brawl version 50",
    "magic brawl exclusive content",
    "entertainment game",
    "free mobile game"
  ],
  authors: [{ name: "Magic Brawl Team" }],
  creator: "Magic Brawl APK",
  publisher: "Magic Brawl APK",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/magic-brawl-apk-logo.webp', type: 'image/webp', sizes: '192x192' },
      { url: '/magic-brawl-apk.webp', type: 'image/webp', sizes: '512x512' }
    ],
    apple: [
      { url: '/magic-brawl-apk-logo.webp', sizes: '180x180' }
    ],
    shortcut: [
      { url: '/magic-brawl-apk-logo.webp', type: 'image/webp' }
    ]
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://magicbrawlapk.net",
  },
  openGraph: {
    title: "Magic Brawl APK v50.221 | Unlocked Premium – Unlimited Gems [2026]",
    description: "Magic Brawl - A rebirth of Brawl Stars! Online battles, unique brawlers, exclusive skins. Free entertainment game. Download now!",
    url: "https://magicbrawlapk.net",
    siteName: "Magic Brawl APK",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://magicbrawlapk.net/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Magic Brawl APK - Official Gaming Platform",
      },
      {
        url: "https://magicbrawlapk.net/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "Magic Brawl APK - Official Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magic Brawl APK v50.221 | Unlocked Premium – Unlimited Gems [2026]",
    description: "Magic Brawl — Brawl Stars MOD with all brawlers unlocked, unlimited gems, exclusive skins & custom maps. Free entertainment game!",
    creator: "@magicbrawlapk",
    images: [
      {
        url: "https://magicbrawlapk.net/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "Magic Brawl APK - Official Gaming Platform",
      }
    ],
  },
  applicationName: "Magic Brawl APK",
  category: "Gaming",
  classification: "Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/magic-brawl-apk-logo.webp" type="image/webp" sizes="192x192" />
        <link rel="icon" href="/magic-brawl-apk.webp" type="image/webp" sizes="512x512" />
        <link rel="apple-touch-icon" href="/magic-brawl-apk-logo.webp" sizes="180x180" />
        
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Defer manifest to avoid critical path (374ms latency) - load after page interactive */}
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {/* Google Analytics - only load if GA ID is set in env (use NEXT_PUBLIC_GA_MEASUREMENT_ID) */}
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' &&
         process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
         !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className="antialiased bg-primary text-white min-h-screen flex flex-col"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <Header />
        <main className="flex-grow relative z-10">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTopWrapper />
        <WebVitalsTracker />
        
        {/* Structured data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Magic Brawl APK",
              "url": "https://magicbrawlapk.net",
              "logo": "https://magicbrawlapk.net/magic-brawl-apk-logo.webp",
              "description": "Magic Brawl APK is a rebirth of Brawl Stars — an entertainment game featuring online battles, unique brawlers, exclusive skins, and regular updates.",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61584893160619",
                "https://x.com/magicbrawlapk",
                "https://www.instagram.com/magicbrawalapk/",
                "https://www.youtube.com/@Magicbrawlapk",
                "https://pin.it/UmqsWyxKX"
              ]
            })
          }}
        />
        
        {/* Structured data for SoftwareApplication */}
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Magic Brawl APK",
              "operatingSystem": "Android",
              "applicationCategory": "GameApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "ratingCount": "500000"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
