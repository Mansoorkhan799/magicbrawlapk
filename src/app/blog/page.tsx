import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magic Brawl Blog - Guides, Tips & Tutorials',
  description: 'Magic Brawl blog: App guides, tips, how to play, brawler guides, and updates. Brawl Stars rebirth — online battles, unique brawlers, exclusive content.',
  keywords: [
    'Magic Brawl blog',
    'Magic Brawl guide',
    'Magic Brawl tips',
    'Magic Brawl tutorial',
    'Brawl Stars rebirth',
    'Magic Brawl APK'
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://magicbrawlapk.net/blog' },
  openGraph: {
    title: 'Blog & Guides - Magic Brawl APK',
    description: 'Magic Brawl blog: App guides, tips, how to play, brawler guides, and updates. Brawl Stars rebirth — online battles, unique brawlers, exclusive content.',
    url: 'https://magicbrawlapk.net/blog',
    siteName: 'Magic Brawl APK',
    type: 'website',
    images: [{ url: 'https://magicbrawlapk.net/feature/og-image.webp', width: 1200, height: 630, alt: 'Magic Brawl APK Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Guides - Magic Brawl APK',
    description: 'Magic Brawl blog: App guides, tips, how to play, brawler guides, and updates. Brawl Stars rebirth — online battles, unique brawlers, exclusive content.',
    images: ['https://magicbrawlapk.net/feature/twitter-card.webp'],
  },
};

const BLOG_POSTS = [
  { slug: 'magic-brawl-apk-2026-whats-new-why-everyones-playing', title: "Magic Brawl APK 2026 | What's New & Why Everyone's Playing It?", excerpt: 'Discover what\'s new in Magic Brawl APK 2026 — Season 18, Maisie & Hank, Bling system, and why millions are switching.', date: 'March 2026', readTime: '8 min' },
  { slug: 'magic-brawl-2026-soundtrack-why-gamers-cant-stop-listening', title: "Magic Brawl 2026 Soundtrack | Why Gamers Can't Stop Listening", excerpt: 'Why the Magic Brawl soundtrack has gamers hooked. Dynamic music, victory jingles, and addictive battle themes.', date: 'March 2026', readTime: '6 min' },
  { slug: '10-must-know-features-hidden-tricks-magic-brawl-2026', title: '10 Must Know Features and Hidden Tricks in Magic Brawl 2026', excerpt: 'Master Magic Brawl with Token Doublers, FUMEY knockback, custom maps, Clash+ weekends, and more.', date: 'March 2026', readTime: '12 min' },
  { slug: 'magic-brawl-vs-retro-brawl-biggest-differences', title: 'Magic Brawl vs Retro Brawl | The Biggest Differences', excerpt: 'Server type, content, events — compare Magic Brawl and Retro Brawl to choose the right private server.', date: 'March 2026', readTime: '7 min' },
  { slug: 'colette-brawl-stars-vs-magic-brawl-apk', title: 'Colette in Brawl Stars vs Magic Brawl APK', excerpt: 'Colette unlocked, all skins free, no grind. See why players prefer Colette in Magic Brawl.', date: 'March 2026', readTime: '9 min' },
  { slug: 'edgar-brawl-stars-unlock-guide-magic-brawl-apk-benefits', title: 'Edgar in Brawl Stars | Unlock Guide & Magic Brawl APK Benefits', excerpt: 'Unlock Edgar in official game or get him instantly in Magic Brawl. Tips to master the assassin.', date: 'March 2026', readTime: '8 min' },
  { slug: 'brawl-stars-2026-unlock-premium-gems-magic-brawl-edition', title: 'Brawl Stars 2026 | Unlock Premium Gems with Magic Brawl Edition', excerpt: 'Get unlimited gems without spending. Magic Brawl APK is the trusted solution for free premium access.', date: 'March 2026', readTime: '7 min' },
  { slug: 'magic-brawl-2026-soundtrack-music-powers-every-battle', title: "Magic Brawl 2026 Soundtrack | The Music that Powers Every Battle", excerpt: 'Menu music, battle themes, victory tones — the soundtrack that brings every match to life.', date: 'March 2026', readTime: '7 min' },
  { slug: 'magic-brawl-apk-download-old-version', title: 'Magic Brawl APK | Download Old Version', excerpt: 'Old versions for low-end devices, classic maps, nostalgic gameplay. Smoother performance, less storage.', date: 'March 2026', readTime: '8 min' },
  { slug: 'download-magic-brawl-mod-menu-v50-221', title: 'Download Magic Brawl Mod Menu | Magic Brawl v50.221', excerpt: 'Magic Brawl v50.221 — all brawlers, unlimited gems, exclusive features. Safe APK, free download.', date: 'March 2026', readTime: '6 min' },
  { slug: 'comparison-magic-brawl-brawl-stars', title: 'Comparison of Magic Brawl and Brawl Stars', excerpt: 'Full feature comparison: brawlers, skins, gems, Brawl Pass, custom maps. Which to choose?', date: 'March 2026', readTime: '10 min' },
  { slug: 'magic-brawl-apk-vs-nulls-brawl-vs-retro-brawl-comparison', title: "Magic Brawl APK vs Null's Brawl vs Retro Brawl", excerpt: 'Complete comparison tables: Magic Brawl vs Null\'s Brawl vs Retro Brawl, plus Magic Brawl vs Brawl Stars.', date: 'March 2026', readTime: '8 min' },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://magicbrawlapk.net" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://magicbrawlapk.net/blog" }] }) }} />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent">Magic Brawl Blog</h1>
      <p className="text-gray-300 mb-12 text-lg">Guides, tips, tutorials, and news for Magic Brawl APK — the ultimate Brawl Stars rebirth.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="bg-secondary px-6 py-6 rounded-xl hover:shadow-lg transition-all border border-gray-800 hover:border-[#FFA500]/50"
          >
            <h2 className="text-xl font-bold mb-3 text-white line-clamp-2">{post.title}</h2>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} read</span>
            </div>
            <Link href={`/blog/${post.slug}`} className="text-accent hover:underline font-semibold text-sm">
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
