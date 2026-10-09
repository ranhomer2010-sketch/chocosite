import { SiteAnchor } from "@/components/site-elements";
import type { Metadata } from "next";
import { SiteImage as Image } from "@/components/site-elements";
import { BookingBand, PageHero } from "@/components/shared";
import { PHONE_DISPLAY, PHONE_HREF, TELEGRAM_CHANNEL_URL, TELEGRAM_CHAT_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "О клинике",
  description: "ВШоколаде: пространство массажа и косметологии на Лобненском бульваре, 12 в Лобне.",
};

const features = [
  { title: "Один адрес", text: "Массаж и косметология в одном спокойном пространстве." },
  { title: "Понятный выбор", text: "Специалист помогает подобрать процедуру под вашу задачу." },
  { title: "Онлайн-запись", text: "Актуальное расписание и выбор мастера доступны в YCLIENTS." },
  { title: "Удобный визит", text: "Парковка, оплата картой, Wi-Fi и подарочные сертификаты." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О клинике"
        title="Пространство, в котором спокойно"
        text="ВШоколаде объединяет профессиональный уход, внимательный сервис и бережное отношение к вашему времени."
        image="/images/relax.webp"
        imageAlt="Спокойная атмосфера клиники"
        position="center 28%"
      >
        <SiteAnchor className="button button-outline" href="/contacts#content">Контакты</SiteAnchor>
      </PageHero>

      <section className="feature-rail">
        {features.map((feature) => (
          <article key={feature.title} data-reveal>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>

      <section className="site-container section-pad service-story">
        <div className="story-image">
          <Image
            src="/images/face-massage.webp"
            alt="Бережная процедура массажа лица"
            fill
            sizes="(max-width: 980px) 100vw, 52vw"
            style={{ objectPosition: "center 40%" }}
          />
        </div>
        <div className="story-copy" data-reveal>
          <h2>Забота складывается из деталей</h2>
          <p>Начинаем с запроса, объясняем ход процедуры и оставляем достаточно времени на спокойный прием. Без спешки и лишних обещаний.</p>
          <p>Клиника находится на первом этаже. Вход оборудован пандусом, часть пространства доступна для маломобильных гостей.</p>
          <SiteAnchor className="text-link" href="/specialists#content">Как выбрать специалиста</SiteAnchor>
        </div>
      </section>

      <section className="site-container about-connect" data-reveal>
        <h2>Связь с клиникой</h2>
        <p>Для записи и вопросов позвоните по номеру <SiteAnchor className="text-link" href={PHONE_HREF}>{PHONE_DISPLAY}</SiteAnchor> или напишите в Telegram на этот же номер. Новости и предложения публикуем в канале клиники.</p>
        <div className="hero-actions">
          <SiteAnchor className="button button-outline" href={TELEGRAM_CHAT_URL} target="_blank" rel="noreferrer">Написать в Telegram</SiteAnchor>
          <SiteAnchor className="text-link" href={TELEGRAM_CHANNEL_URL} target="_blank" rel="noreferrer">Канал ВШоколаде в Telegram ↗</SiteAnchor>
        </div>
      </section>

      <BookingBand title="Познакомьтесь с ВШоколаде" text="Выберите первую процедуру и удобное время. Если сомневаетесь, начните с консультации." />
    </>
  );
}
