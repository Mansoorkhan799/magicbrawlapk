import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retro Brawl | Download 2018 Brawl Stars APK - Classic Nostalgia',
  description: 'Download Retro Brawl APK — relive 2018 Brawl Stars! Original 21 heroes, classic maps, old-school UI. Private server for Android. Free nostalgia gaming.',
  keywords: [
    'Retro Brawl',
    'Retro Brawl APK',
    'Retro Brawl download',
    'Brawl Stars 2018',
    'Classic Brawl Stars',
    'Brawl Stars nostalgia',
    'Retro Brawl Stars'
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://magicbrawlapk.net/download-retro-brawl' },
  openGraph: {
    title: 'Retro Brawl | Download 2018 Brawl Stars APK - Classic Nostalgia',
    description: 'Retro Brawl brings back 2018 Brawl Stars — original 21 heroes, classic maps, old-school UI. Download free for Android.',
    url: 'https://magicbrawlapk.net/download-retro-brawl',
    siteName: 'Magic Brawl APK',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://magicbrawlapk.net/feature/og-image.webp', width: 1200, height: 630, alt: 'Retro Brawl APK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retro Brawl | Download 2018 Brawl Stars APK - Classic Nostalgia',
    description: 'Retro Brawl brings back 2018 Brawl Stars — original 21 heroes, classic maps, old-school UI. Download free for Android.',
    images: ['https://magicbrawlapk.net/feature/twitter-card.webp'],
  },
};

export default function RetroBrawlPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Retro Brawl | Download 2018 Brawl Stars APK - Classic Nostalgia',
    description: 'Guide to Retro Brawl — a Brawl Stars private server that brings back the 2018 experience with original heroes, classic maps, and nostalgic gameplay.',
    image: 'https://magicbrawlapk.net/magic-brawl-apk-logo.webp',
    author: { '@type': 'Organization', name: 'Magic Brawl APK', url: 'https://magicbrawlapk.net' },
    publisher: { '@type': 'Organization', name: 'Magic Brawl APK', logo: { '@type': 'ImageObject', url: 'https://magicbrawlapk.net/magic-brawl-apk-logo.webp' } },
    datePublished: '2026-03-06',
    dateModified: '2026-03-06',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://magicbrawlapk.net/download-retro-brawl' },
    about: { '@type': 'SoftwareApplication', name: 'Retro Brawl', operatingSystem: 'Android', applicationCategory: 'GameApplication' },
    articleSection: 'Gaming',
    keywords: 'Retro Brawl, Brawl Stars 2018, classic Brawl Stars, nostalgia',
    inLanguage: 'en-US',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://magicbrawlapk.net" }, { "@type": "ListItem", "position": 2, "name": "Retro Brawl", "item": "https://magicbrawlapk.net/download-retro-brawl" }] }) }} />

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#60a5fa]">Retro Brawl</span>
            <br />
            <span className="text-white">Relive 2018 Brawl Stars</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Original 21 Heroes — Classic Maps — Old-School UI
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <strong className="text-white">Retro Brawl</strong> is a Brawl Stars private server that brings back the golden era of 2018. Experience the original 21 heroes, nostalgic maps, and the UI you fell in love with. All content maxed out — no grind, pure nostalgia. Free for Android.
          </p>
          <div className="flex justify-center mt-8">
            <a
              href="https://magicbrawlapk.net/file/Magicbrawlapk/download-retro-brawl-apk-by-magicbrawlapk.net.apk"
              className="relative flex items-center px-10 py-5 text-white font-bold text-lg rounded-full border-2 border-[#60a5fa] hover:bg-[#60a5fa]/10 transition-all duration-300 group shadow-2xl hover:shadow-[0_0_30px_rgba(96,165,250,0.3)] hover:scale-105"
            >
              <span>Download Retro Brawl APK</span>
              <div className="ml-3 bg-[#f97316] rounded-full p-2.5 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-[280px] h-[280px] max-w-full flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/retro-brawl-apk.webp" alt="Retro Brawl - Classic Brawl Stars 2018" width={280} height={280} className="max-w-full max-h-full object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Download Info */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">Download Information</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              <tr className="bg-[#0a1029]/50"><td className="py-4 px-6 font-medium text-white">App Name</td><td className="py-4 px-6 text-white">Retro Brawl APK</td></tr>
              <tr className="bg-[#06091F]/50"><td className="py-4 px-6 font-medium text-white">Platform</td><td className="py-4 px-6 text-white">Android</td></tr>
              <tr className="bg-[#0a1029]/50"><td className="py-4 px-6 font-medium text-white">Version</td><td className="py-4 px-6 text-white">v12.98</td></tr>
              <tr className="bg-[#06091F]/50"><td className="py-4 px-6 font-medium text-white">Requires</td><td className="py-4 px-6 text-white">Android 5.0+</td></tr>
              <tr className="bg-[#0a1029]/50"><td className="py-4 px-6 font-medium text-white">Price</td><td className="py-4 px-6 text-[#4ade80] font-bold">Free</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What is Retro Brawl */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">What is Retro Brawl?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Retro Brawl is a private server that preserves the classic 2018 Brawl Stars experience. Unlike the official game or newer mods like <Link href="/" className="text-accent underline">Magic Brawl</Link>, Retro Brawl focuses on nostalgia — the original 21 brawlers, classic maps like Gem Grab and Showdown, and the old-school interface that defined the game&apos;s early days.
          </p>
          <p className="text-gray-300 leading-relaxed">
            All heroes and skins are maxed out from the start. No Brawl Pass, no gadgets — just pure, timeless gameplay. Perfect for players who miss the simpler mechanics and want to relive the era before the game evolved into its current form.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#60a5fa]">
              <h3 className="text-xl font-bold text-[#60a5fa] mb-3">Original 21 Brawlers</h3>
              <p className="text-gray-300">Play with the classic roster — Colt, Shelly, Nita, Brock, and all the heroes that started it all. Maxed out and ready to use.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#4ade80]">
              <h3 className="text-xl font-bold text-[#4ade80] mb-3">Classic Maps & Modes</h3>
              <p className="text-gray-300">Nostalgic maps and game modes from 2018. Gem Grab, Showdown, Brawl Ball — the way you remember them.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#a855f7]">
              <h3 className="text-xl font-bold text-[#a855f7] mb-3">Old-School UI</h3>
              <p className="text-gray-300">The original interface, menus, and visuals. A trip back in time for veteran players.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#f97316]">
              <h3 className="text-xl font-bold text-[#f97316] mb-3">All Unlocked</h3>
              <p className="text-gray-300">No grind — everything is maxed out from the moment you install. Jump straight into the action.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Retro Brawl vs Magic Brawl */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Retro Brawl vs Magic Brawl</h2>
          <p className="text-gray-300 mb-6">
            <strong className="text-white">Retro Brawl</strong> is for players who love the classic 2018 experience. <strong className="text-accent">Magic Brawl</strong> offers the latest content — new brawlers (FUMEY, RT, Maisie, Hank), custom maps, 5v5 modes, and monthly updates. Choose based on your preference: nostalgia or cutting-edge features.
          </p>
          <Link href="/blog/magic-brawl-vs-retro-brawl-biggest-differences" className="text-accent underline hover:underline font-semibold">
            Read full comparison →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Is Retro Brawl available for iOS?
                <span className="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg></span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">Retro Brawl is currently Android only. For iOS, check out <Link href="/magic-brawl-for-ios" className="text-accent underline">Magic Brawl for iOS</Link>.</div>
            </details>
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                What brawlers are in Retro Brawl?
                <span className="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg></span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">The original 21 brawlers from 2018 — no newer characters. All maxed out and unlocked from the start.</div>
            </details>
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Does Retro Brawl get updates?
                <span className="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg></span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">Retro Brawl receives occasional updates to maintain stability. It focuses on preserving the classic experience rather than adding new content.</div>
            </details>
          </div>
        </div>
      </section>

      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <Link href="/" className="text-[#60a5fa] hover:text-[#6366f1] font-medium transition-colors">
          ← Back to Home
        </Link>
      </section>
    </>
  );
}
