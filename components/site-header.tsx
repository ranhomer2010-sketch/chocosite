"use client";

import { SiteAnchor } from "@/components/site-elements";


import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF, navigation } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname().replace(/\/$/, "") || "/";

  return (
    <header className="site-header orbit-header">
      <div className="site-container header-inner">
        <SiteAnchor className="brand-mark" href="/" aria-label="ВШоколаде, на главную">
          <span>
            <b>ВШоколаде</b>
            <small>клиника в Лобне</small>
          </span>
        </SiteAnchor>

        <div className="header-actions">
          <SiteAnchor className="header-phone" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </SiteAnchor>
          {pathname !== "/" && <SiteAnchor className="sections-link" href="/#navigation">Все разделы</SiteAnchor>}
          <SiteAnchor className="button button-compact" href={BOOKING_URL} target="_blank" rel="noreferrer">
            Онлайн-запись
          </SiteAnchor>
          <Sheet>
            <SheetTrigger className="orbit-menu-trigger" aria-label="Открыть меню"><Menu size={20} aria-hidden="true" /></SheetTrigger>
            <SheetContent side="right" className="site-navigation-sheet" showCloseButton={false}>
              <div className="sheet-top"><SheetTitle>ВШоколаде</SheetTitle><SheetClose className="orbit-menu-trigger" aria-label="Закрыть меню"><X size={20} aria-hidden="true" /></SheetClose></div>
              <SheetDescription className="sr-only">Навигация по сайту клиники</SheetDescription>
              <nav aria-label="Меню сайта">
                <SiteAnchor href="/" aria-current={pathname === "/" ? "page" : undefined}>Главная</SiteAnchor>
                {navigation.map(item => <SiteAnchor href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</SiteAnchor>)}
                <SiteAnchor href="/about" aria-current={pathname === "/about" ? "page" : undefined}>О клинике</SiteAnchor>
                <SiteAnchor href="/contacts#route">Как добраться</SiteAnchor>
              </nav>
              <SiteAnchor className="sheet-phone" href={PHONE_HREF}>{PHONE_DISPLAY}</SiteAnchor>
              <SiteAnchor className="button" href={BOOKING_URL} target="_blank" rel="noreferrer">Онлайн-запись</SiteAnchor>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    </header>
  );
}
