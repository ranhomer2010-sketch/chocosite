import { SiteAnchor } from "@/components/site-elements";
import type { Metadata } from "next";
import { SiteImage as Image } from "@/components/site-elements";
import { YandexRouteWidget } from "@/components/yandex-route-widget";
import {
  BOOKING_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  TELEGRAM_CHANNEL_URL,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Адрес, телефон и онлайн-запись клиники ВШоколаде: Лобня, Лобненский бульвар, 12, первый этаж.",
};

export default function ContactsPage() {
  return (
    <><section className="contact-layout">
      <div className="contact-panel">
        <p className="eyebrow">Контакты</p>
        <h1>Ждем вас в Лобне</h1>
        <div className="contact-details">
          <section>
            <h2>Адрес</h2>
            <SiteAnchor href={MAPS_URL} target="_blank" rel="noreferrer">Лобненский бульвар, 12, первый этаж</SiteAnchor>
          </section>
          <section>
            <h2>Телефон</h2>
            <SiteAnchor href={PHONE_HREF}>{PHONE_DISPLAY}</SiteAnchor>
          </section>
          <section>
            <h2>Мессенджеры</h2>
            <p>В Telegram и MAX можно написать на номер клиники: {PHONE_DISPLAY}</p>
          </section>
          <section>
            <h2>Режим работы</h2>
            <p>Актуальные часы указаны в Яндекс Картах и YCLIENTS</p>
          </section>
        </div>
        <div className="hero-actions">
          <SiteAnchor className="button" href={BOOKING_URL} target="_blank" rel="noreferrer">Онлайн-запись</SiteAnchor>
          <SiteAnchor className="button button-outline" href="#route">Как добраться</SiteAnchor>
        </div>
        <div className="contact-socials" aria-label="Социальные сети и мессенджеры">
          <SiteAnchor href={TELEGRAM_CHANNEL_URL} target="_blank" rel="noreferrer">Канал в Telegram</SiteAnchor>
        </div>
      </div>
      <div className="contact-image">
        <Image
          src="/images/massage-ritual.webp"
          alt="Кабинет массажа ВШоколаде"
          fill
          priority
          sizes="(max-width: 980px) 100vw, 55vw"
          style={{ objectPosition: "center 44%" }}
        />
      </div>
    </section><YandexRouteWidget /></>
  );
}
