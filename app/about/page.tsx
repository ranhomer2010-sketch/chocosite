import { SiteAnchor } from "@/components/site-elements";
import type { Metadata } from "next";
import { SiteImage as Image } from "@/components/site-elements";
import { BookingBand, PageHero } from "@/components/shared";

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
        <SiteAnchor className="button button-outline" href="/contacts">Контакты</SiteAnchor>
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
          <SiteAnchor className="text-link" href="/specialists">Как выбрать специалиста</SiteAnchor>
        </div>
      </section>

      <BookingBand title="Познакомьтесь с ВШоколаде" text="Выберите первую процедуру и удобное время. Если сомневаетесь, начните с консультации." />
    </>
  );
}
