import { navItems, siteMeta } from "@/lib/site";

export default function sitemap() {
  const pages = navItems.flatMap((item) => [
    ...(item.href ? [item.href] : []),
    ...(item.children?.map((child) => child.href) ?? []),
  ]);
  const uniquePages = [...new Set(pages)];

  return uniquePages.map((href) => ({
    url: `${siteMeta.url}${href}`,
    lastModified: new Date(),
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
}
