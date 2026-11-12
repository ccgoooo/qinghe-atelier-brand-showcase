// Site-wide SEO switch. Set NOINDEX to true to hide every page from search engines.
export const SITE = { name: "Qinghe Atelier", NOINDEX: false };

export function seo(opts: { title: string; description: string; path: string; noindex?: boolean }) {
  const title = `${opts.title} — ${SITE.name}`;
  const noindex = opts.noindex ?? SITE.NOINDEX;
  return {
    meta: [
      { title },
      { name: "description", content: opts.description },
      { property: "og:title", content: title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: opts.path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow" },
    ],
    links: [{ rel: "canonical", href: opts.path }],
  };
}
