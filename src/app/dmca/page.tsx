import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DMCA Policy - Magic Brawl APK | Copyright Notice',
  description: 'DMCA policy for Magic Brawl APK. We promote third-party content for informational purposes only. We do not claim to be the official app. Report copyright concerns here.',
  keywords: ['Magic Brawl DMCA', 'Magic Brawl copyright', 'DMCA policy', 'copyright notice', 'Magic Brawl APK'],
  openGraph: {
    title: 'DMCA Policy - Magic Brawl APK',
    description: 'DMCA and copyright policy for magicbrawlapk.net. We promote content for informational purposes only.',
    url: 'https://magicbrawlapk.net/dmca',
    siteName: 'Magic Brawl APK',
    type: 'website',
    images: [{ url: 'https://magicbrawlapk.net/feature/og-image.webp', width: 1200, height: 630, alt: 'DMCA Policy - Magic Brawl APK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMCA Policy - Magic Brawl APK',
    description: 'DMCA and copyright policy for magicbrawlapk.net.',
    images: ['https://magicbrawlapk.net/feature/twitter-card.webp'],
  },
  alternates: { canonical: 'https://magicbrawlapk.net/dmca' },
  robots: { index: true, follow: true },
};

export default function DMCA() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">DMCA Policy</h1>
            <p className="text-lg text-gray-400">Digital Millennium Copyright Act — Copyright Notice</p>
          </div>

          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="bg-[#0A1029] border-l-4 border-[#f97316] p-6 mb-8 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#f97316] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#f97316] mb-2">Important Disclaimer</h3>
                    <p className="text-gray-300 mb-0">
                      <strong className="text-white">magicbrawlapk.net</strong> is <strong>not</strong> affiliated with, endorsed by, or connected to Supercell Oy or any of its subsidiaries. We do <strong>not</strong> claim to be the official developers or publishers of Brawl Stars.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 text-gray-300">
                <div className="bg-[#0A1029] rounded-xl p-6 border border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">What We Do</h2>
                  <p className="leading-relaxed mb-4">
                    This website serves as an <strong className="text-white">informational and promotional platform</strong> only. We provide guides, tutorials, reviews, and download links related to modified versions of Brawl Stars (commonly referred to as private servers) for <strong className="text-white">educational and entertainment purposes</strong>.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'We promote and provide information about third-party content — we do not develop or maintain the game itself.',
                      'We do not host any copyrighted game files on our servers.',
                      'All trademarks, logos, game names, and related assets mentioned on this website belong to their respective owners, including Supercell Oy.',
                      'We do not claim ownership of any intellectual property belonging to Supercell or any other entity.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-[#4ade80] mt-0.5 flex-shrink-0">&#10003;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">Our Position on Copyright</h2>
                  <p className="leading-relaxed mb-4">
                    We respect the intellectual property rights of all content creators and copyright holders. The content published on this website is intended for <strong className="text-white">informational purposes</strong> and falls under fair use for commentary, review, and educational purposes.
                  </p>
                  <p className="leading-relaxed">
                    &quot;Brawl Stars&quot; is a registered trademark of <strong className="text-white">Supercell Oy</strong>. All game-related graphics, images, characters, and content referenced on this site are the property of Supercell. We use these references solely for identification and informational purposes.
                  </p>
                </div>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-red-500/30">
                  <h2 className="text-2xl font-bold mb-4 text-red-400">DMCA Takedown Notice</h2>
                  <p className="leading-relaxed mb-4">
                    If you are a copyright owner or an agent authorized to act on behalf of one, and you believe that any content on this website infringes upon your copyrights, you may submit a DMCA takedown notice. Please provide the following information:
                  </p>
                  <ol className="space-y-3 list-decimal list-inside">
                    <li><strong className="text-white">Identification</strong> of the copyrighted work you claim has been infringed.</li>
                    <li><strong className="text-white">Identification</strong> of the material on our website that you claim is infringing, with a URL or description sufficient for us to locate it.</li>
                    <li>Your <strong className="text-white">full name, mailing address, phone number, and email address</strong>.</li>
                    <li>A statement that you have a <strong className="text-white">good faith belief</strong> that the use of the material is not authorized by the copyright owner, its agent, or the law.</li>
                    <li>A statement, made <strong className="text-white">under penalty of perjury</strong>, that the information in your notice is accurate and that you are the copyright owner or authorized to act on their behalf.</li>
                    <li>Your <strong className="text-white">physical or electronic signature</strong>.</li>
                  </ol>
                </div>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-[#0ea5e9]/30">
                  <h2 className="text-2xl font-bold mb-4 text-[#0ea5e9]">How to Submit a DMCA Notice</h2>
                  <p className="leading-relaxed mb-4">
                    Send your DMCA takedown notice to us via our contact page. We will review all valid requests and take appropriate action within <strong className="text-white">48-72 hours</strong> of receiving a complete and valid notice.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Upon receiving a valid DMCA notice, we will:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Remove or disable access to the allegedly infringing content promptly.',
                      'Notify the content provider (if applicable) about the takedown.',
                      'Provide a counter-notification process if the content provider believes the takedown was issued in error.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-[#0ea5e9] mt-0.5 flex-shrink-0">&#8250;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">Counter-Notification</h2>
                  <p className="leading-relaxed mb-4">
                    If you believe your content was removed by mistake or misidentification, you may file a counter-notification with the following details:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Your full name, address, phone number, and email.',
                      'Identification of the material that was removed and the location where it appeared before removal.',
                      'A statement under penalty of perjury that you have a good faith belief the material was removed as a result of mistake or misidentification.',
                      'A statement that you consent to the jurisdiction of the federal court in your district.',
                      'Your physical or electronic signature.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-[#FFA500] mt-0.5 flex-shrink-0">&#8250;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-[#4ade80]/30">
                  <h2 className="text-2xl font-bold mb-4 text-[#4ade80]">Repeat Infringers</h2>
                  <p className="leading-relaxed">
                    In accordance with the DMCA, we will terminate user accounts or access for users who are found to be repeat infringers of copyrighted material. We take copyright infringement seriously and are committed to complying with applicable copyright laws.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-secondary rounded-xl border-2 border-accent">
                <h2 className="text-2xl font-bold mb-4 text-white">Have a Copyright Concern?</h2>
                <p className="text-gray-300 mb-4">
                  If you believe any content on this website infringes your copyright, please reach out to us. We take all claims seriously and will respond promptly.
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://magicbrawlapk.net" }, { "@type": "ListItem", "position": 2, "name": "DMCA Policy", "item": "https://magicbrawlapk.net/dmca" }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", "name": "DMCA Policy - Magic Brawl APK", "description": "DMCA and copyright policy for magicbrawlapk.net. We promote content for informational purposes only and do not claim to be the official app.", "url": "https://magicbrawlapk.net/dmca" }) }} />
    </div>
  );
}
