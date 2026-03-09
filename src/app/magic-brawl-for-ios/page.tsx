import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata: Metadata = {
  title: 'Magic Brawl for iOS | Download IPA - iPhone & iPad',
  description: 'Download Magic Brawl IPA for iOS. Play Brawl Stars rebirth on iPhone and iPad with unlimited gems, all brawlers unlocked. Install via AltStore or Sideloadly - no jailbreak.',
  keywords: [
    'Magic Brawl iOS',
    'Magic Brawl for iPhone',
    'Magic Brawl IPA',
    'Magic Brawl iPad',
    'Brawl Stars iOS',
    'Magic Brawl AltStore',
    'Magic Brawl Sideloadly',
    'Magic Brawl download iOS'
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://magicbrawlapk.net/magic-brawl-for-ios' },
  openGraph: {
    title: 'Magic Brawl for iOS | Download IPA - iPhone & iPad',
    description: 'Play Magic Brawl on iPhone and iPad with unlimited gems, all brawlers unlocked. Install via AltStore or Sideloadly.',
    url: 'https://magicbrawlapk.net/magic-brawl-for-ios',
    siteName: 'Magic Brawl APK',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://magicbrawlapk.net/feature/og-image.webp', width: 1200, height: 630, alt: 'Magic Brawl for iOS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magic Brawl for iOS | Download IPA - iPhone & iPad',
    description: 'Play Magic Brawl on iPhone and iPad with unlimited gems, all brawlers unlocked. Install via AltStore or Sideloadly.',
    images: ['https://magicbrawlapk.net/feature/twitter-card.webp'],
  },
};

export default function MagicBrawlForIOSPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Magic Brawl for iOS | Download IPA - iPhone & iPad',
    description: 'Complete guide to download and install Magic Brawl on iOS devices. Play Brawl Stars rebirth on iPhone and iPad with unlimited gems and all brawlers unlocked.',
    image: 'https://magicbrawlapk.net/magic-brawl-apk-logo.webp',
    author: { '@type': 'Organization', name: 'Magic Brawl APK', url: 'https://magicbrawlapk.net' },
    publisher: { '@type': 'Organization', name: 'Magic Brawl APK', logo: { '@type': 'ImageObject', url: 'https://magicbrawlapk.net/magic-brawl-apk-logo.webp' } },
    datePublished: '2026-03-06',
    dateModified: '2026-03-06',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://magicbrawlapk.net/magic-brawl-for-ios' },
    about: { '@type': 'SoftwareApplication', name: 'Magic Brawl APK', operatingSystem: 'iOS 10.0+', applicationCategory: 'GameApplication' },
    articleSection: 'Gaming',
    keywords: 'Magic Brawl iOS, Magic Brawl IPA, AltStore, Sideloadly, iPhone',
    inLanguage: 'en-US',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://magicbrawlapk.net" }, { "@type": "ListItem", "position": 2, "name": "Magic Brawl for iOS", "item": "https://magicbrawlapk.net/magic-brawl-for-ios" }] }) }} />

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#FFA500]">Magic Brawl for iOS</span>
            <br />
            <span className="text-white">iPhone & iPad</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Download IPA — Unlimited Gems, All Brawlers Unlocked
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <Link href="/" className="text-accent hover:underline font-semibold">Magic Brawl</Link> is a rebirth of Brawl Stars. Enjoy it on your iPhone or iPad with unlimited gems, coins, and all characters unlocked. Install using AltStore or Sideloadly — no jailbreak required. Free entertainment game!
          </p>
        </div>

        <div className="flex justify-center mt-8 mb-8">
          <a
            href="https://dl.magicbrawlapk.net/file/Magicbrawlapk/magic-brawl-apk-by-magicbrawlapk.net.apk.ipa"
            className="inline-flex items-center px-8 py-4 font-bold rounded-full border-2 border-[#0ea5e9] text-white hover:bg-[#0ea5e9]/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] animate-pulse-glow"
          >
            <span className="mr-2">Get Magic Brawl IPA</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          </a>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative transition-transform duration-300 hover:scale-110" style={{ width: '280px', height: '280px', maxWidth: '100%' }}>
            <Image src="/magic-brawl-apk.webp" alt="Magic Brawl for iOS - iPhone and iPad" width={280} height={280} className="object-contain drop-shadow-2xl" priority />
          </div>
        </div>
      </section>

      {/* Download Info */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">Download Information</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              {[
                ['App Name', 'Magic Brawl IPA'],
                ['Platform', 'iOS (iPhone, iPad)'],
                ['Version', 'v50.221'],
                ['Requires', 'iOS 10.0+'],
                ['Device', 'iPhone 6S or later'],
                ['Price', 'Free'],
              ].map(([label, value], i) => (
                <tr key={i} className={`${i % 2 === 0 ? 'bg-[#0a1029]/50' : 'bg-[#06091F]/50'} transition-colors duration-200 hover:bg-[#0a1029]`}>
                  <td className="py-4 px-6 font-medium text-white">{label}</td>
                  <td className="py-4 px-6 text-white">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What is IPA */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">What is an IPA File?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            An IPA file is an app installer designed for Apple devices (iPhone, iPad, iPod). It lets you manually install apps that aren&apos;t available on the App Store. Magic Brawl IPA contains the full game with all features unlocked.
          </p>
        </div>
      </section>

      {/* How to Install via AltStore */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">How to Install Magic Brawl IPA on iPhone</h2>
          <p className="text-gray-300 mb-6">Follow these steps for safe installation. No jailbreak required.</p>
          <div className="space-y-6">
            {[
              { step: 1, color: '#FFA500', title: 'Download AltStore', desc: "Visit altstore.io and install AltStore on your PC or Mac. You'll also need AltServer to sideload the app onto your iPhone." },
              { step: 2, color: '#4ade80', title: 'Connect Your iPhone', desc: 'Connect your iPhone to your computer using a USB cable.' },
              { step: 3, color: '#60a5fa', title: 'Install AltStore on iPhone', desc: 'Use AltServer from your PC or Mac to install AltStore on your iPhone.' },
              { step: 4, color: '#a855f7', title: 'Download Magic Brawl IPA', desc: <>Get the IPA file from <a href="https://dl.magicbrawlapk.net/file/Magicbrawlapk/magic-brawl-apk-by-magicbrawlapk.net.apk.ipa" className="text-accent hover:underline">magicbrawlapk.net</a>.</> },
              { step: 5, color: '#f97316', title: 'Load IPA in AltStore', desc: 'Open AltStore, tap the "+" icon, select the Magic Brawl IPA file, and wait for installation to complete.' },
              { step: 6, color: '#4ade80', title: 'Trust Developer Profile', desc: 'Go to Settings > General > Device Management. Find the developer certificate and tap "Trust" to allow the app to run.' },
              { step: 7, color: '#0ea5e9', title: 'Launch & Play', desc: 'Open Magic Brawl from your home screen and enjoy — all brawlers, skins, and gems unlocked!' },
            ].map(({ step, color, title, desc }) => (
              <div key={step} className="bg-[#0A1029] rounded-lg p-6 border-l-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group cursor-default" style={{ borderLeftColor: color }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white transition-transform group-hover:scale-110" style={{ backgroundColor: color }}>{step}</span>
                  <h3 className="text-lg font-bold" style={{ color }}>Step {step}: {title}</h3>
                </div>
                <p className="text-gray-300 pl-11">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sideloadly vs Scarlet */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Installation Tools: Sideloadly vs Scarlet</h2>
          <p className="text-gray-300 mb-6">Two popular tools for installing Magic Brawl IPA on iOS. Switch to compare:</p>
          <TabSwitcher tabs={[
            { id: 'sideloadly', label: 'Sideloadly', content: (
              <div className="bg-[#0A1029] p-6 rounded-xl border border-[#0ea5e9]/30">
                <h3 className="text-xl font-bold text-[#0ea5e9] mb-3">Sideloadly</h3>
                <p className="text-gray-300 mb-2">Desktop-based, reliable. Install IPA files without jailbreak. Supports latest iOS versions.</p>
                <p className="text-sm text-gray-400 mb-4">Best for: Advanced users. Requires PC connection.</p>
                <p className="text-sm text-gray-300">Requires AltServer on your Mac or PC. Connect iPhone via USB to sideload the IPA.</p>
              </div>
            )},
            { id: 'scarlet', label: 'Scarlet', content: (
              <div className="bg-[#0A1029] p-6 rounded-xl border border-[#a855f7]/30">
                <h3 className="text-xl font-bold text-[#a855f7] mb-3">Scarlet</h3>
                <p className="text-gray-300 mb-2">On-device installer. No PC required. Quick and straightforward.</p>
                <p className="text-sm text-gray-400 mb-4">Best for: Beginners. Less control over settings.</p>
                <p className="text-sm text-gray-300">Install directly on your iPhone. Download Scarlet, then load the IPA from your device.</p>
              </div>
            )},
          ]} />
        </div>
      </section>

      {/* iOS Requirements */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Minimum iOS Requirements</h2>
          <div className="overflow-x-auto max-w-2xl">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-white font-medium">OS Version</td><td className="py-3 px-6 text-gray-300">iOS 10.0+</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-white font-medium">Device</td><td className="py-3 px-6 text-gray-300">iPhone 6S or later</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-white font-medium">Storage</td><td className="py-3 px-6 text-gray-300">200MB free space</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-white font-medium">Processor</td><td className="py-3 px-6 text-gray-300">A9 chip or better</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Features for iOS */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Key Features on iOS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { color: '#FFA500', title: 'Smooth Performance', desc: 'Optimized for A9 chips and above. No lag, overheating, or FPS drops during intense modes like Showdown or Gem Grab.' },
              { color: '#4ade80', title: 'Gamepad Support', desc: 'Works with gamepads connected via Bluetooth for a console-like feel and improved accuracy.' },
              { color: '#60a5fa', title: 'Seamless Touch Response', desc: 'Every swipe and tap responds instantly. Full command of your brawler during fast-paced fights.' },
              { color: '#a855f7', title: 'iCloud Sync', desc: 'Progress stays safe with iCloud backup. Switch devices and restore your progress easily.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A1029] p-6 rounded-lg border-l-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group cursor-default" style={{ borderLeftColor: item.color }}>
                <h3 className="text-xl font-bold mb-3 transition-transform group-hover:translate-x-1" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Do I need to jailbreak my iPhone?
                <span className="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg></span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">No. Magic Brawl IPA can be installed using AltStore or Sideloadly without any jailbreak.</div>
            </details>
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Will installing affect my Apple warranty?
                <span className="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg></span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">Sideloading does not typically void your warranty. You are installing an app, not modifying system files.</div>
            </details>
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Can I use a controller with iOS?
                <span className="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg></span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">Yes. Magic Brawl works with gamepads connected to your iPhone or iPad via Bluetooth.</div>
            </details>
          </div>
        </div>
      </section>

      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <Link href="/" className="text-[#0ea5e9] hover:text-[#6366f1] font-medium transition-colors">
          ← Back to Home
        </Link>
      </section>
    </>
  );
}
