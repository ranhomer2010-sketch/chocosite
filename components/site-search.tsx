"use client";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SiteAnchor } from "@/components/site-elements";
import { searchEntries } from "@/lib/site-index";
const normalize = (text: string) => text.toLocaleLowerCase("ru").replaceAll("ё", "е").trim();
export function SiteSearch() {
  const [query,setQuery] = useState("");
  const words = normalize(query).split(/\s+/).filter(Boolean);
  const results = useMemo(() => words.length ? searchEntries.filter(item=>words.every(word=>normalize(`${item.title} ${item.text}`).includes(word))) : [], [query]);
  return <div className="site-search"><label htmlFor="site-query">Услуга, специалист или документ</label><div className="search-input-wrap"><Search size={23} aria-hidden="true" /><input id="site-query" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Например, массаж или лицензия" autoComplete="off" maxLength={160} /></div><p className="search-status" role="status">{query.trim() ? (results.length ? `Найдено: ${results.length}` : "Совпадений нет. Попробуйте другое название или откройте карту сайта.") : "Поиск по разделам, услугам и документам клиники."}</p><ul className="search-results">{results.map((item,i)=><li key={`${item.href}-${i}`}><SiteAnchor href={item.href}><strong>{item.title}</strong><span>{item.text}</span></SiteAnchor></li>)}</ul><SiteAnchor className="text-link" href="/site-map">Карта сайта</SiteAnchor></div>;
}
