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
  { title: "В одном месте", text: "Массаж и косметология." },
  { title: "По вашему запросу", text: "Процедуру поможет выбрать специалист." },
  { title: "Запись без звонка", text: "Свободное время и мастера — в YCLIENTS." },
  { title: "На месте", text: "Парковка, оплата картой, Wi-Fi и сертификаты." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О клинике"
        title="Массаж и косметология в Лобне"
        text="ВШоколаде, Лобненский бульвар, 12."
        image="/images/welcome-tea.webp"
        imageAlt="Чай и угощение для гостей клиники ВШоколаде"
        position="center 55%"
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
            src="/images/face-care-session.webp"
            alt="Специалист проводит уход за лицом"
            fill
            sizes="(max-width: 980px) 100vw, 52vw"
            style={{ objectPosition: "center 46%" }}
          />
        </div>
        <div className="story-copy" data-reveal>
          <h2>Перед началом</h2>
          <p>Расскажите, чего ждёте от процедуры. Специалист объяснит ход приёма и подберёт интенсивность.</p>
          <p>Клиника находится на первом этаже. Вход оборудован пандусом, часть пространства доступна для маломобильных гостей.</p>
          <SiteAnchor className="text-link" href="/specialists#content">Посмотреть мастеров</SiteAnchor>
        </div>
      </section>

      <section className="site-container about-connect" data-reveal>
        <h2>На связи</h2>
        <p>Позвоните <SiteAnchor className="text-link" href={PHONE_HREF}>{PHONE_DISPLAY}</SiteAnchor> или напишите в Telegram. Новости — в канале клиники.</p>
        <div className="hero-actions">
          <SiteAnchor className="button button-outline" href={TELEGRAM_CHAT_URL} target="_blank" rel="noreferrer">Написать в Telegram</SiteAnchor>
          <SiteAnchor className="text-link" href={TELEGRAM_CHANNEL_URL} target="_blank" rel="noreferrer">Канал ВШоколаде в Telegram ↗</SiteAnchor>
        </div>
      </section>

      <BookingBand title="До встречи" text="Выберите процедуру и удобное время." />
    </>
  );
}
