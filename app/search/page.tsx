import type { Metadata } from "next";
import { SiteSearch } from "@/components/site-search";
export const metadata: Metadata = { title: "Поиск по сайту" };
export default function SearchPage() { return <section className="site-container information-page"><header className="document-heading"><p className="eyebrow">ВШоколаде</p><h1>Поиск по сайту</h1></header><SiteSearch /></section>; }
