import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://magicbrawlapk.net';
  
  // Define page type
  type PageType = {
    url: string;
    lastMod: string;
    changeFreq: string;
    priority: number;
    images?: Array<{
      loc: string;
      title: string;
      caption: string;
    }>;
  };
  
  // Main pages with high priority
  const mainPages: PageType[] = [
    {
      url: '/',
      lastMod: new Date().toISOString(),
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/magic-brawl-apk.webp',
          title: 'Magic Brawl APK Logo',
          caption: 'The official logo of Magic Brawl APK gaming platform'
        },
        {
          loc: '/magic-brawl-apk-logo.webp',
          title: 'Magic Brawl APK Hero Image',
          caption: 'Magic Brawl APK gaming platform showcase'
        }
      ]
    },
    {
      url: '/download-magic-brawl-apk',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/magic-brawl-apk.webp',
          title: 'Download Magic Brawl APK',
          caption: 'Download Magic Brawl APK for Android'
        }
      ]
    },
    {
      url: '/deposit-money-in-magic-brawl',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/withdraw-money-from-magic-brawl',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/magic-brawl-for-ios',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/download-retro-brawl',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/magic-brawl-for-pc',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/magic-brawl-apk.webp',
          title: 'Magic Brawl APK for PC',
          caption: 'Play Magic Brawl APK on PC using Android Emulator'
        }
      ]
    },
    {
      url: '/dmca',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.5
    },
    {
      url: '/magic-brawl-apk-about-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: '/magic-brawl-apk.webp',
          title: 'About Magic Brawl APK',
          caption: 'Learn about Magic Brawl APK gaming platform'
        }
      ]
    },
    {
      url: '/blog',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.8,
      images: [
        {
          loc: '/magic-brawl-apk.webp',
          title: 'Magic Brawl APK Blog',
          caption: 'Guides and tutorials for Magic Brawl APK gaming platform'
        }
      ]
    },
    {
      url: '/magic-brawl-apk-contact-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7
    },
    {
      url: '/privacy',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6
    },
    {
      url: '/disclaimer',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6
    }
  ];

  // Blog posts
  const blogPosts: PageType[] = [
    { url: '/blog/magic-brawl-apk-2026-whats-new-why-everyones-playing', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/magic-brawl-2026-soundtrack-why-gamers-cant-stop-listening', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/10-must-know-features-hidden-tricks-magic-brawl-2026', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/magic-brawl-vs-retro-brawl-biggest-differences', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/colette-brawl-stars-vs-magic-brawl-apk', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/edgar-brawl-stars-unlock-guide-magic-brawl-apk-benefits', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/brawl-stars-2026-unlock-premium-gems-magic-brawl-edition', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/magic-brawl-2026-soundtrack-music-powers-every-battle', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/magic-brawl-apk-download-old-version', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/download-magic-brawl-mod-menu-v50-221', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/comparison-magic-brawl-brawl-stars', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/magic-brawl-apk-vs-nulls-brawl-vs-retro-brawl-comparison', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
  ];

  const allPages = [...mainPages, ...blogPosts];
  
  // Generate XML with mobile and image extensions
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${page.images?.map(img => `
    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('') || ''}
  </url>
  `).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
} 