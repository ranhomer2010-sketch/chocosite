import { SiteAnchor } from "@/components/site-elements";
import type { Metadata } from "next";
import { BookingBand, PageHero } from "@/components/shared";
import { YandexReviewsWidget } from "@/components/yandex-reviews-widget";
import { MAPS_URL, trustFacts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Отзывы",
  description: "Актуальные отзывы гостей о клинике массажа и косметологии ВШоколаде из Яндекс Карт.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Отзывы гостей"
        title="Опыт, которым делятся"
        text="Здесь отображается официальный виджет Яндекса. Новые опубликованные отзывы появляются автоматически."
        image="/images/spa-hero.webp"
        imageAlt="Расслабляющий массаж"
        position="center 38%"
      >
        <SiteAnchor className="button button-outline" href={MAPS_URL} target="_blank" rel="noreferrer">Карточка в Яндексе</SiteAnchor>
      </PageHero>

      <section className="trust-strip" aria-label="Рейтинг клиники">
        {trustFacts.map((fact) => (
          <div className="trust-item" key={fact.label}>
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </div>
        ))}
      </section>

      <section className="site-container section-pad yandex-reviews-section">
        <div className="yandex-reviews-copy" data-reveal>
          <h2>Отзывы из карточки ВШоколаде</h2>
          <p>Источник, авторы и даты сохраняются внутри официального виджета Яндекс Карт.</p>
          <SiteAnchor className="text-link" href={MAPS_URL} target="_blank" rel="noreferrer">Открыть в Яндексе</SiteAnchor>
        </div>
        <YandexReviewsWidget />
      </section>

      <BookingBand title="Составьте свое впечатление" text="Выберите процедуру и удобное время в актуальном расписании клиники." />
    </>
  );
}
