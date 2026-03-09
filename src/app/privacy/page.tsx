import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Magic Brawl APK | Your Privacy Matters',
  description: 'Read our privacy policy to understand how Magic Brawl APK collects, uses, and protects your personal information. We are committed to your data security.',
  keywords: ['Magic Brawl privacy policy', 'privacy', 'data protection', 'user privacy', 'data security'],
  openGraph: {
    title: 'Privacy Policy - Magic Brawl APK',
    description: 'Learn how Magic Brawl APK protects your personal information and data.',
    url: 'https://magicbrawlapk.net/privacy',
    siteName: 'Magic Brawl APK',
    type: 'website',
    images: [{ url: 'https://magicbrawlapk.net/feature/og-image.webp', width: 1200, height: 630, alt: 'Magic Brawl APK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Magic Brawl APK',
    description: 'Read our privacy policy to understand how Magic Brawl APK collects, uses, and protects your personal information.',
    images: ['https://magicbrawlapk.net/feature/twitter-card.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: 'https://magicbrawlapk.net/privacy' },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://magicbrawlapk.net" }, { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://magicbrawlapk.net/privacy" }] }) }} />
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Privacy Policy</h1>
            <p className="text-lg text-gray-400">Last Updated: January 3, 2026</p>
          </div>
          
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              <div className="bg-[#0A1029] border-l-4 border-accent rounded-r-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
                <p className="text-gray-300 mb-4">
                  <Link href="/" className="text-accent hover:underline font-semibold">Magic Brawl APK</Link> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website at <a href="https://magicbrawlapk.net" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">magicbrawlapk.net</a> (the &quot;Service&quot;).
              </p>
                <p className="text-gray-300">
                Please read this Privacy Policy carefully. By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy.
              </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Information We Collect</h2>
              
              <div className="bg-[#0A1029] rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Personal Data</h3>
                <p className="text-gray-300 mb-4">
                When you use our Service, we may collect personally identifiable information, such as:
              </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Mobile phone number (for account registration)</li>
                  <li>Email address (optional)</li>
                <li>Device information (model, operating system, unique device identifiers)</li>
                  <li>IP address and location data</li>
                  <li>Game account information (if you create an account)</li>
                  <li>Gameplay data and statistics</li>
              </ul>
              </div>
              
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Usage Data</h3>
                <p className="text-gray-300 mb-4">
                We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include:
              </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Game modes played (Gem Grab, Showdown, Brawl Ball, etc.) and time spent</li>
                  <li>App downloads and updates</li>
                  <li>Bonus and rewards claimed</li>
                  <li>Features accessed within the app</li>
                  <li>Performance data and crash reports</li>
                  <li>Referral activities</li>
              </ul>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">How We Use Your Information</h2>
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <p className="text-gray-300 mb-4">
                We use the collected data for various purposes:
              </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>To provide and maintain our Magic Brawl gaming Service</li>
                  <li>To verify your identity and prevent fraud</li>
                  <li>To process game data and maintain private server connections</li>
                  <li>To notify you about changes, updates, or new features</li>
                  <li>To allow you to participate in games and tournaments</li>
                  <li>To provide customer support via email</li>
                  <li>To send you update notifications and new content alerts</li>
                  <li>To track game progress and community participation</li>
                  <li>To monitor gameplay for fair play and security</li>
                  <li>To comply with legal obligations and regulations</li>
                </ul>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Data Security</h2>
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <p className="text-gray-300 mb-4">
                  Your data security is our top priority. We take the following measures to protect your information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>We use encrypted connections to protect your data</li>
                  <li>Your account credentials are never stored in plain text on our servers</li>
                  <li>All game data is processed through secure servers</li>
                  <li>We maintain detailed logs for your security and reference</li>
                  <li>Your account information is encrypted and stored securely</li>
              </ul>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Disclosure of Data</h2>
              
              <div className="bg-[#0A1029] rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Legal Requirements</h3>
                <p className="text-gray-300">
                  We may disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
              </p>
              </div>
              
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Third-Party Services</h3>
                <p className="text-gray-300 mb-4">
                  We may share limited data with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Private game servers for multiplayer connectivity</li>
                  <li>Analytics services to improve app performance</li>
                  <li>Customer support tools</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  We ensure all third parties comply with strict data protection standards.
              </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Data Security</h2>
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <p className="text-gray-300 mb-4">
                  The security of your data is important to us. We implement various security measures including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure servers with firewall protection</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication systems</li>
                  <li>Data backup and recovery procedures</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your Personal Data, we cannot guarantee absolute security.
              </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Your Data Protection Rights</h2>
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <p className="text-gray-300 mb-4">
                  You have the following rights regarding your personal data:
              </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><strong className="text-white">Right to Access:</strong> Request a copy of your personal data</li>
                  <li><strong className="text-white">Right to Rectification:</strong> Correct inaccurate or incomplete information</li>
                  <li><strong className="text-white">Right to Erasure:</strong> Request deletion of your account and data</li>
                  <li><strong className="text-white">Right to Object:</strong> Object to certain data processing activities</li>
                  <li><strong className="text-white">Right to Data Portability:</strong> Receive your data in a structured format</li>
                  <li><strong className="text-white">Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
              </ul>
                <p className="text-gray-300 mt-4">
                  To exercise any of these rights, please contact us at <a href="mailto:support@magicbrawlapk.net" className="text-accent hover:underline">support@magicbrawlapk.net</a>
              </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Age Restriction</h2>
              <div className="bg-red-900/20 border-l-4 border-red-500 rounded-r-lg p-6 mb-8">
                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Important:</strong> Magic Brawl APK is intended only for users who are 18 years of age or older. We do not knowingly collect personally identifiable information from anyone under 18 years of age.
                </p>
                <p className="text-gray-300">
                  If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us immediately. If we become aware that we have collected Personal Data from users under 18 without verification of parental consent, we will take steps to remove that information from our servers.
              </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Cookies and Tracking</h2>
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <p className="text-gray-300 mb-4">
                  We use cookies and similar tracking technologies to track activity on our Service and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
                </p>
                <p className="text-gray-300">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some features of our Service.
                </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Changes to This Privacy Policy</h2>
              <div className="bg-[#0A1029] rounded-xl p-6 mb-8">
                <p className="text-gray-300 mb-4">
                  We may update our Privacy Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Posting the new Privacy Policy on this page</li>
                  <li>Updating the "Last Updated" date at the top</li>
                  <li>Sending an in-app notification for significant changes</li>
                </ul>
                <p className="text-gray-300 mt-4">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Contact Us</h2>
              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 mb-4">
                <p className="text-gray-300 mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <strong className="text-white mr-2">Email:</strong>
                    <a href="mailto:support@magicbrawlapk.net" className="text-accent hover:underline">support@magicbrawlapk.net</a>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
                    </svg>
                    <strong className="text-white mr-2">Website:</strong>
                    <a href="https://magicbrawlapk.net" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">magicbrawlapk.net</a>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                    </svg>
                    <strong className="text-white mr-2">Support:</strong>
                    <Link href="/magic-brawl-apk-contact-us" className="text-accent hover:underline">Visit Contact Us page</Link>
                  </li>
              </ul>
              </div>
              
              <div className="bg-[#0A1029] rounded-xl p-6 mt-8 text-center">
                <p className="text-gray-400 text-sm mb-4">
                  By using Magic Brawl APK, you consent to this Privacy Policy and agree to its terms.
                </p>
                <p className="text-gray-400 text-sm">
                  © 2026 Magic Brawl APK. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
