"use client";

import { SiteAnchor, SiteImg } from "@/components/site-elements";


import { useState, type CSSProperties } from "react";
import { usePathname } from "next/navigation";
import { Pause, Play, MapPin, MessageCircle, Users, Heart, HandHeart, Sparkles } from "lucide-react";
import { BOOKING_URL, TELEGRAM_CHANNEL_URL } from "@/lib/content";

const sections = [
  { href: "/prices#massage-prices", label: "Цены на массаж и SPA", Icon: HandHeart },
  { href: "/prices#cosmetology-prices", label: "Цены на косметологию", Icon: Sparkles },
  { href: "/specialists#content", label: "Специалисты", Icon: Users },
  { href: "/reviews#content", label: "Отзывы", Icon: MessageCircle },
  { href: "/contacts#content", label: "Контакты", Icon: MapPin },
  { href: "/about#content", label: "О клинике", Icon: Heart },
  { href: "/contacts#route", label: "Как добраться", Icon: MapPin },
];

export function OrbitNavigation() {
  const [paused, setPaused] = useState(false);
  const isHome = (usePathname().replace(/\/$/, "") || "/") === "/";
  const logo = <SiteAnchor href="/" aria-label="ВШоколаде, на главную"><SiteImg src="/images/brand-logo.svg" alt="ВШоколаде. Забота о себе" width="340" height="190" /></SiteAnchor>;
  return (
    <section className={`orbit-hero${isHome ? " is-home" : ""}`} id="navigation" aria-label="ВШоколаде: услуги и разделы сайта">
      <div className={`orbit-stage${paused ? " is-paused" : ""}`} onPointerDown={event => { if (event.pointerType === "touch") setPaused(true); }}>
        <div className="orbit-track" aria-hidden="true" />
        <div className="orbit-core">
          {isHome ? <h1 className="orbit-logo">{logo}</h1> : <div className="orbit-logo">{logo}</div>}
          <p>Профессиональный Массаж<br />и Лицензированная Косметология<br />в Лобне</p>
          <SiteAnchor className="button" href={BOOKING_URL} target="_blank" rel="noreferrer">Онлайн-запись</SiteAnchor>
          {isHome && <SiteAnchor className="orbit-channel" href={TELEGRAM_CHANNEL_URL} target="_blank" rel="noreferrer">Канал клиники в Telegram ↗</SiteAnchor>}
          {isHome && <span className="orbit-instruction">Выберите интересующий вас раздел</span>}
        </div>
        <nav className="orbit-plane" aria-label="Разделы сайта">
          {sections.map(({ href, label, Icon }, index) => (
            <div className="orbit-position" key={href} style={{ "--phase": `${index * -96 / sections.length}s`, "--angle": `${index * 360 / sections.length}deg` } as CSSProperties}>
              <div className="orbit-reverse">
                <SiteAnchor href={href} className="orbit-node">
                  <span className="orbit-bubble"><Icon aria-hidden="true" /></span>
                  <span className="orbit-label">{label}</span>
                </SiteAnchor>
              </div>
            </div>
          ))}
        </nav>
      </div>
      <div className="orbit-bottom site-container">
        <SiteAnchor className="button orbit-mobile-booking" href={BOOKING_URL} target="_blank" rel="noreferrer">Онлайн-запись</SiteAnchor>
        {isHome && <SiteAnchor className="orbit-bottom-channel" href={TELEGRAM_CHANNEL_URL} target="_blank" rel="noreferrer">Канал клиники в Telegram ↗</SiteAnchor>}
        <p>Лобня, Лобненский бульвар, 12</p>
        <button className="orbit-pause" type="button" onClick={() => setPaused(value => !value)} aria-pressed={paused}>
          {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
          {paused ? "Продолжить движение" : "Остановить движение"}
        </button>
      </div>
    </section>
  );
}
