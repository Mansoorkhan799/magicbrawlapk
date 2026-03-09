import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About Magic Brawl APK - Brawl Stars Rebirth',
  description: 'Learn about Magic Brawl APK, a rebirth of Brawl Stars. Online battles, unique brawlers, exclusive skins. Free entertainment game with regular updates.',
  keywords: ['Magic Brawl about', 'about us', 'Magic Brawl APK', 'Brawl Stars rebirth', 'entertainment game', 'Magic Brawl history'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: "https://magicbrawlapk.net/magic-brawl-apk-about-us" },
  openGraph: {
    title: 'About Magic Brawl APK - Brawl Stars Rebirth',
    description: 'Magic Brawl - A rebirth of Brawl Stars. Online battles, unique brawlers, exclusive content. Free entertainment game.',
    url: "https://magicbrawlapk.net/magic-brawl-apk-about-us",
    siteName: "Magic Brawl APK",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://magicbrawlapk.net/magic-brawl-apk-logo.webp", width: 1200, height: 630, alt: "About Magic Brawl APK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: 'About Magic Brawl APK - Brawl Stars Rebirth',
    description: 'Magic Brawl - A rebirth of Brawl Stars. Online battles, unique brawlers, exclusive content.',
    images: ["https://magicbrawlapk.net/magic-brawl-apk-logo.webp"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
          </div>
          
          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 flex justify-center">
                <Link href="/">
                  <Image 
                    src="/magic-brawl-apk.webp" 
                    alt="Magic Brawl APK Logo" 
                    width={220}
                    height={220}
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </Link>
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Welcome to <Link href="/" className="text-accent hover:underline font-semibold">magicbrawlapk.net</Link>, your trusted source for <strong className="text-white">Magic Brawl APK</strong>. Magic Brawl is a rebirth of Brawl Stars and its golden era — a free entertainment game featuring online battles, unique brawlers, exclusive skins, and regular updates. <Link href="/download-magic-brawl-apk" className="text-accent hover:underline font-semibold">Download Magic Brawl</Link> now and enjoy the game to the fullest!
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Magic Brawl is not an online earning game — it&apos;s pure entertainment. Play for fun with online battles, all characters, unique brawlers, skins, and other exclusive elements.
                </p>
              </div>
            </div>
          </div>
          
          {/* Our Aim Section */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Our Aim!</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed text-center">
              Our aim is to provide users with the latest information about Magic Brawl — a rebirth of Brawl Stars. For any questions or queries, visit our <Link href="/magic-brawl-apk-contact-us" className="underline hover:text-orange-100 font-semibold">contact us page</Link>.
            </p>
          </div>
          
          {/* Contact CTA */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Have Questions?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              We&apos;re here to help! Contact our team for any information or queries about Magic Brawl.
            </p>
            <Link 
              href="/magic-brawl-apk-contact-us" 
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://magicbrawlapk.net" }, { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://magicbrawlapk.net/magic-brawl-apk-about-us" }] }) }} />
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Magic Brawl APK",
              "alternateName": "Magic Brawl",
              "url": "https://magicbrawlapk.net",
              "logo": "https://magicbrawlapk.net/magic-brawl-apk-logo.webp",
              "description": "Magic Brawl APK is a rebirth of Brawl Stars — a free entertainment game with online battles, unique brawlers, exclusive skins, and regular updates."
            },
            "about": {
              "@type": "Thing",
              "name": "Entertainment Game",
              "description": "Brawl Stars rebirth - online battles, unique brawlers, exclusive content"
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://magicbrawlapk.net/magic-brawl-apk-about-us" }
          })
        }}
      />
    </div>
  );
} 