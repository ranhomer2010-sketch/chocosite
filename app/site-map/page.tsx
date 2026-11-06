import type { Metadata } from "next";
import { SiteAnchor } from "@/components/site-elements";
import { sitePages } from "@/lib/site-index";
import { legalDocuments } from "@/lib/legal-documents";
export const metadata: Metadata = { title: "Карта сайта" };
export default function SiteMapPage() { return <section className="site-container information-page"><header className="document-heading"><p className="eyebrow">Все разделы</p><h1>Карта сайта</h1></header><div className="sitemap-columns"><div><h2>Страницы</h2><ul>{sitePages.filter(p=>p.href!=="/site-map").map(page=><li key={page.href}><SiteAnchor href={page.href}>{page.title}</SiteAnchor></li>)}<li><SiteAnchor href="/search">Поиск по сайту</SiteAnchor></li></ul></div><div><h2>Документы клиники</h2><ul>{legalDocuments.map(doc=><li key={doc.href}><SiteAnchor href={doc.href} download>{doc.title} <small>({doc.format})</small></SiteAnchor></li>)}</ul></div></div></section>; }
