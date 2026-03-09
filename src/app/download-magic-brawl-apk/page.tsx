import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const DOWNLOAD_URL = 'https://dl.magicbrawlapk.net/file/Magicbrawlapk/magic-brawl-apk-by-magicbrawlapk.net.apk';

export const metadata: Metadata = {
  title: 'Download Magic Brawl APK Free for Android | Version 50.221',
  description: 'Download Magic Brawl APK free for Android. Brawl Stars rebirth with online battles, unique brawlers, exclusive skins. Version 50.221 — free entertainment game.',
  keywords: [
    'Download Magic Brawl',
    'Magic Brawl APK download',
    'Magic Brawl Android',
    'Brawl Stars rebirth',
    'Magic Brawl latest version',
    'Download Magic Brawl v50.221',
    'Brawl Stars private server'
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: "https://magicbrawlapk.net/download-magic-brawl-apk" },
  openGraph: {
    title: 'Download Magic Brawl APK Free for Android | v50.221',
    description: 'Magic Brawl - Brawl Stars rebirth. Online battles, unique brawlers, exclusive skins. Free entertainment game. Download now!',
    url: "https://magicbrawlapk.net/download-magic-brawl-apk",
    siteName: "Magic Brawl APK",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://magicbrawlapk.net/magic-brawl-apk-logo.webp", width: 1200, height: 630, alt: "Download Magic Brawl APK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Download Magic Brawl APK Free for Android | v50.221',
    description: 'Magic Brawl - Brawl Stars rebirth. Online battles, unique brawlers, exclusive skins. Free entertainment game.',
    images: ["https://magicbrawlapk.net/magic-brawl-apk-logo.webp"],
  },
};

export default function DownloadPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Magic Brawl APK",
    "operatingSystem": "Android",
    "applicationCategory": "GameApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
    "softwareVersion": "50.221",
    "datePublished": "2026-01-03",
    "description": "Magic Brawl is a rebirth of Brawl Stars. Online battles, all characters, unique brawlers, skins, and exclusive content. Free entertainment game with regular updates.",
    "image": "https://magicbrawlapk.net/magic-brawl-apk-logo.webp",
    "author": { "@type": "Organization", "name": "Magic Brawl APK", "url": "https://magicbrawlapk.net" }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://magicbrawlapk.net" }, { "@type": "ListItem", "position": 2, "name": "Download", "item": "https://magicbrawlapk.net/download-magic-brawl-apk" }] }) }} />
      
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Download </span>
            <span className="text-[#FFA500]">Magic Brawl</span>
            <span className="text-white"> APK</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">Version 50.221 — Free for Android</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <Link href="/" className="text-accent hover:underline font-semibold">Magic Brawl</Link> is a rebirth of Brawl Stars and its golden era. Enjoy online battles, unique brawlers, exclusive skins, and more. A free entertainment game, regularly updated.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 my-6">
          <a 
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center px-12 py-6 text-white font-bold text-xl rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all duration-300 group shadow-2xl hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:scale-105 animate-pulse-glow"
          >
            <span className="mr-4">DOWNLOAD NOW</span>
            <div className="bg-[#f97316] rounded-full p-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </div>
          </a>
          <span className="bg-[#0A1029] text-[#4ade80] px-6 py-2 rounded-full text-sm font-semibold">Free Entertainment Game — No Real Money</span>
        </div>

        <div className="flex justify-center mb-6">
          <div className="relative" style={{ width: '320px', height: '320px', maxWidth: '100%' }}>
            <Image src="/magic-brawl-apk.webp" alt="Magic Brawl APK Logo" width={320} height={320} className="object-contain drop-shadow-2xl" priority fetchPriority="high" quality={90} />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download-info">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">Download Information</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                {[
                  ['App Name', 'Magic Brawl'],
                  ['Version', '50.221'],
                  ['Category', 'Entertainment, Action, Multiplayer'],
                  ['Required OS', 'Android'],
                  ['Price', 'Free'],
                ].map(([label, value], i) => (
                  <tr key={i} className={`${i % 2 === 0 ? 'bg-[#0a1029]/50' : 'bg-[#06091F]/50'} transition-colors duration-200 hover:bg-[#0a1029]`}>
                    <td className="py-4 px-6 text-left font-medium text-white">{label}</td>
                    <td className="py-4 px-6 text-left text-white">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="download-btn bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#0ea5e9]">
            <span className="text-lg">DOWNLOAD NOW</span>
            <div className="download-icon ml-2 bg-[#f97316] rounded-full p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </div>
          </a>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download-steps">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">How to Download & Install Magic Brawl</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              { step: 1, color: '#FFA500', title: 'Download APK', desc: 'Click the download button above to get the Magic Brawl APK file. Wait for the download to complete.' },
              { step: 2, color: '#4ade80', title: 'Enable Unknown Sources', desc: 'Go to your device Settings → Security and enable Install from unknown sources or Install unknown apps for your browser.' },
              { step: 3, color: '#60a5fa', title: 'Install APK', desc: 'Open the downloaded file, tap Install, and wait for the installation to complete.' },
              { step: 4, color: '#f97316', title: 'Start Playing', desc: "Open Magic Brawl and enjoy online battles, unique brawlers, and exclusive content. It's a free entertainment game — no real money involved." },
            ].map(({ step, color, title, desc }) => (
              <div key={step} className="bg-[#0A1029] rounded-lg p-6 border-l-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20 cursor-default group" style={{ borderLeftColor: color }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white transition-transform group-hover:scale-110" style={{ backgroundColor: color }}>{step}</span>
                  <h3 className="text-xl font-bold" style={{ color }}>Step {step}: {title}</h3>
                </div>
                <p className="text-gray-300 pl-11">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">Why Download Magic Brawl?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { emoji: '⚔️', title: 'Online Battles', desc: 'Compete in exciting online battles with players worldwide' },
            { emoji: '🎮', title: 'Unique Brawlers', desc: 'All characters plus exclusive brawlers not found elsewhere' },
            { emoji: '✨', title: 'Exclusive Skins & Content', desc: 'Skins, cosmetics, and exclusive elements' },
            { emoji: '🔄', title: 'Regular Updates', desc: 'We regularly update the project with new content' },
            { emoji: '🆓', title: 'Free Entertainment', desc: '100% free — no real money, pure fun' },
            { emoji: '🌟', title: 'Brawl Stars Rebirth', desc: 'Experience the golden era of Brawl Stars' },
          ].map((item, i) => (
            <div key={i} className="bg-secondary px-8 py-8 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FFA500]/10 hover:border hover:border-[#FFA500]/30 cursor-default group">
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-125">{item.emoji}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="pb-4 pt-2 px-4 max-w-7xl mx-auto text-center">
        <Link href="/" className="text-[#0ea5e9] hover:text-[#6366f1] font-medium transition-colors">← Back to Home</Link>
      </div>
    </>
  );
}
