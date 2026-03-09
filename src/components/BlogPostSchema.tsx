const BASE = "https://magicbrawlapk.net";

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

type BlogPostSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  breadcrumbOnly?: boolean;
};

export default function BlogPostSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image = `${BASE}/magic-brawl-apk-logo.webp`,
  breadcrumbOnly = false,
}: BlogPostSchemaProps) {
  const url = `${BASE}/blog/${slug}`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    author: { "@type": "Organization", name: "Magic Brawl APK", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "Magic Brawl APK",
      logo: { "@type": "ImageObject", url: `${BASE}/magic-brawl-apk-logo.webp` },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-US",
  };
  return (
    <div suppressHydrationWarning style={{ display: "contents" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }}
      />
      {!breadcrumbOnly && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(article) }}
        />
      )}
    </div>
  );
}
