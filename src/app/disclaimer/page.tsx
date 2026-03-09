import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer - Magic Brawl APK | Legal Information',
  description: 'Read the disclaimer for Magic Brawl APK. Important legal information about the use of this website.',
  keywords: ['Magic Brawl disclaimer', 'legal disclaimer', 'terms', 'conditions', 'entertainment game'],
  openGraph: {
    title: 'Disclaimer - Magic Brawl APK',
    description: 'Legal disclaimer and important information about Magic Brawl APK.',
    url: 'https://magicbrawlapk.net/disclaimer',
    siteName: 'Magic Brawl APK',
    type: 'website',
    images: [{ url: 'https://magicbrawlapk.net/feature/og-image.webp', width: 1200, height: 630, alt: 'Magic Brawl APK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer - Magic Brawl APK',
    description: 'Legal disclaimer and important information about Magic Brawl APK.',
    images: ['https://magicbrawlapk.net/feature/twitter-card.webp'],
  },
  alternates: { canonical: 'https://magicbrawlapk.net/disclaimer' },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Disclaimer</h1>
            <p className="text-lg text-gray-400">Please read this disclaimer carefully before using our website</p>
          </div>
          
          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Warning Banner */}
              <div className="bg-[#0A1029] border-l-4 border-accent p-6 mb-8 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-accent mb-2">Important Notice</h3>
                    <p className="text-accent mb-0">
                      Please read this disclaimer carefully. By using this website, you agree to the terms outlined below.
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Disclaimer Content */}
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  The information provided on this blog (<a href="https://magicbrawlapk.net" className="text-accent hover:text-accent font-semibold" target="_blank" rel="noopener noreferrer">magicbrawlapk.net</a>) about <Link href="/" className="text-accent hover:underline font-semibold">Magic Brawl APK</Link> is for <strong>general informational and entertainment purposes only</strong>. We do not host, promote, or encourage any form of gambling or betting activities.
                </p>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-accent">
                  <h2 className="text-2xl font-bold mb-4 text-white">⚠️ Important Warnings</h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">•</span>
                      <span>Magic Brawl APK is a free entertainment game. It is a fan-made MOD of Brawl Stars built on private servers.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">•</span>
                      <span>Users are advised to be aware of their <strong>local laws and regulations</strong> related to online gaming and gambling before engaging with any app or website mentioned.</span>
                    </li>
              </ul>
                </div>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-red-200">
                  <h2 className="text-2xl font-bold mb-4 text-red-400">🚫 No Liability</h2>
                  <p className="text-gray-300 leading-relaxed mb-0">
                    We are <strong>not responsible</strong> for any loss, risk, or legal issues resulting from the use of third-party platforms. All app names, logos, and trademarks belong to their respective owners, and we do not claim any affiliation or endorsement.
                  </p>
                </div>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-blue-200">
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">📋 User Responsibility</h2>
                  <p className="text-gray-300 leading-relaxed mb-0">
                    By using this blog, you agree that any actions you take based on the content are <strong>strictly at your own risk</strong>. We encourage all users to:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Verify local laws before engaging with any gaming platform</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Play responsibly and within your means</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Be aware of the risks involved in real money gaming</span>
                </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Seek professional help if you have gambling concerns</span>
                </li>
              </ul>
                </div>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-accent">
                  <h2 className="text-2xl font-bold mb-4 text-white">™️ Trademarks & Affiliations</h2>
                  <p className="text-gray-300 leading-relaxed mb-0">
                    All app names, logos, and trademarks mentioned on this website belong to their respective owners. We do not claim any affiliation, endorsement, or partnership with any of the apps or platforms mentioned on this blog.
                  </p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-12 p-6 bg-secondary rounded-xl border-2 border-accent">
                <h2 className="text-2xl font-bold mb-4 text-white">Questions?</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Disclaimer, please feel free to contact us.
                </p>
                <Link 
                  href="/magic-brawl-apk-contact-us" 
                  className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://magicbrawlapk.net" }, { "@type": "ListItem", "position": 2, "name": "Disclaimer", "item": "https://magicbrawlapk.net/disclaimer" }] }) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Disclaimer - Magic Brawl APK",
            "description": "Legal disclaimer and important information about Magic Brawl APK website.",
            "url": "https://magicbrawlapk.net/disclaimer"
          })
        }}
      />
    </div>
  );
} 