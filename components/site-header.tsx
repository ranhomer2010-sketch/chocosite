"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Eye, Menu, Search, X } from "lucide-react";
import { SiteAnchor, SiteImg } from "@/components/site-elements";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/content";

const links = [
  ["/prices", "Цены"], ["/about", "О клинике"], ["/specialists", "Специалисты"],
  ["/reviews", "Отзывы"], ["/contacts", "Контакты"], ["/legal", "Правовая информация"],
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [accessible, setAccessible] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const servicesButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      const enabled = localStorage.getItem("vshokolade-accessible") === "true";
      setAccessible(enabled);
      document.documentElement.dataset.accessible = String(enabled);
    } catch { /* The control also works without persistent storage. */ }
  }, []);
  useEffect(() => {
    function close(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (servicesOpen) { setServicesOpen(false); servicesButton.current?.focus(); }
        else if (menuOpen) { setMenuOpen(false); menuButton.current?.focus(); }
      }
    }
    function outside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) { setServicesOpen(false); setMenuOpen(false); }
    }
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", close); document.removeEventListener("pointerdown", outside); };
  }, [menuOpen, servicesOpen]);
  function toggleAccessible() {
    const enabled = !accessible;
    setAccessible(enabled);
    document.documentElement.dataset.accessible = String(enabled);
    try { localStorage.setItem("vshokolade-accessible", String(enabled)); } catch { /* Optional storage. */ }
  }
  const isCurrent = (href: string) => (pathname.replace(/\/$/, "") || "/") === href;
  return (
    <header className="clinic-header" id="navigation" ref={header}>
      <a className="skip-link" href="#content">Перейти к содержимому</a>
      <div className="clinic-header-main">
        <SiteAnchor href="/" className="clinic-brand" aria-label="ВШоколаде — главная">
          <SiteImg src="/images/brand-logo.svg" width={192} height={58} alt="ВШоколаде" />
          <span>Массаж и косметология · Лобня</span>
        </SiteAnchor>
        <div className="clinic-header-contact"><span>Лобненский бульвар, 12</span><SiteAnchor href={PHONE_HREF}>{PHONE_DISPLAY}</SiteAnchor></div>
        <SiteAnchor className="button button-compact header-booking" href={BOOKING_URL} target="_blank" rel="noreferrer">Онлайн-запись</SiteAnchor>
        <button className="clinic-menu-button" type="button" ref={menuButton} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => { setMenuOpen(!menuOpen); setServicesOpen(false); }}>
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}<span>{menuOpen ? "Закрыть" : "Меню"}</span>
        </button>
      </div>
      <div className={`clinic-navigation-shell${menuOpen ? " is-open" : ""}`} id="site-navigation">
        <nav className="clinic-navigation" aria-label="Главное меню">
          <div className="clinic-services">
            <button type="button" ref={servicesButton} aria-expanded={servicesOpen} aria-controls="service-links" onClick={() => setServicesOpen(!servicesOpen)}>Услуги <ChevronDown size={15} aria-hidden="true" /></button>
            <div id="service-links" className="clinic-service-links" hidden={!servicesOpen}>
              <SiteAnchor href="/massazh">Массаж и SPA <span>Услуги и цены</span></SiteAnchor>
              <SiteAnchor href="/kosmetologiya">Косметология <span>Услуги и цены</span></SiteAnchor>
            </div>
          </div>
          {links.map(([href, label]) => <SiteAnchor key={href} href={href} aria-current={isCurrent(href) ? "page" : undefined}>{label}</SiteAnchor>)}
        </nav>
        <div className="clinic-utilities">
          <SiteAnchor href="/search" aria-label="Поиск по сайту"><Search size={17} aria-hidden="true" /><span>Поиск</span></SiteAnchor>
          <button type="button" onClick={toggleAccessible} aria-label={accessible ? "Обычная версия" : "Версия для слабовидящих"} aria-pressed={accessible}><Eye size={18} aria-hidden="true" /><span>{accessible ? "Обычная версия" : "Для слабовидящих"}</span></button>
        </div>
      </div>
    </header>
  );
}
