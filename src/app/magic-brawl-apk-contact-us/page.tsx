import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - Magic Brawl APK | Get Help & Support',
  description: 'Contact Magic Brawl APK support team for help with the app, content, privacy policy, and more. We are here to assist you.',
  keywords: 'contact magic brawl, magic brawl support, magic brawl email, customer support, help magic brawl',
  openGraph: {
    title: 'Contact Us - Magic Brawl APK',
    description: 'Get in touch with Magic Brawl APK support team for any queries or assistance.',
    url: 'https://magicbrawlapk.net/magic-brawl-apk-contact-us',
    siteName: 'Magic Brawl APK',
    type: 'website',
    images: [{ url: 'https://magicbrawlapk.net/feature/og-image.webp', width: 1200, height: 630, alt: 'Magic Brawl APK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Magic Brawl APK',
    description: 'Get in touch with Magic Brawl APK support team for any queries or assistance.',
    images: ['https://magicbrawlapk.net/feature/twitter-card.webp'],
  },
  alternates: {
    canonical: 'https://magicbrawlapk.net/magic-brawl-apk-contact-us',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
            <p className="text-lg text-gray-400">We're here to help you!</p>
          </div>
          
          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Welcome to the Contact Us page. Feel free to contact us if you have any questions about <Link href="/" className="text-accent hover:underline font-semibold">Magic Brawl APK</Link>, <Link href="/magic-brawl-apk-about-us" className="text-accent hover:text-accent font-semibold">About us</Link>, <Link href="/privacy" className="text-accent hover:text-accent font-semibold">privacy policy</Link>, or anything else.
              </p>

              {/* Email Contact Section */}
              <div className="bg-[#0A1029] rounded-xl p-8 border border-[#FFA500]/30">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-white">Email Us</h2>
                <p className="text-center mb-2 text-gray-400">Send us your questions or concerns via email</p>
                <p className="text-center text-accent font-semibold mb-6 text-lg">support@magicbrawlapk.net</p>
                <div className="text-center">
                  <a 
                    href="mailto:support@magicbrawlapk.net" 
                    className="inline-flex items-center justify-center bg-accent hover:bg-[#e6ac00] text-primary font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Help Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#0A1029] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">App Information</h3>
              <p className="text-gray-400 mb-4">Need help with the Magic Brawl app?</p>
              <Link href="/" className="text-accent hover:text-accent font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-secondary rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#0A1029] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Privacy Policy</h3>
              <p className="text-gray-400 mb-4">Read our privacy policy</p>
              <Link href="/privacy" className="text-accent hover:text-accent font-semibold">
                Read Policy →
              </Link>
            </div>

            <div className="bg-secondary rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#0A1029] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">About Us</h3>
              <p className="text-gray-400 mb-4">Learn more about our platform</p>
              <Link href="/magic-brawl-apk-about-us" className="text-accent hover:text-accent font-semibold">
                About Us →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://magicbrawlapk.net" }, { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://magicbrawlapk.net/magic-brawl-apk-contact-us" }] }) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Magic Brawl APK",
              "url": "https://magicbrawlapk.net",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "support@magicbrawlapk.net",
                "contactType": "Customer Support",
                "availableLanguage": ["English"]
              }
            }
          })
        }}
      />
    </div>
  );
} 