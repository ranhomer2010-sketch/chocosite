import { SiteAnchor } from "@/components/site-elements";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared";
import { YandexReviewsWidget } from "@/components/yandex-reviews-widget";
import { MAPS_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Отзывы",
  description: "Актуальные отзывы гостей о клинике массажа и косметологии ВШоколаде из Яндекс Карт.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Отзывы гостей"
        title="Что говорят гости"
        text="Отзывы из карточки ВШоколаде в Яндекс Картах."
        image="/images/spa-back.webp"
        imageAlt="SPA-процедура для спины"
        position="center 44%"
      >
        <SiteAnchor className="button button-outline" href={MAPS_URL} target="_blank" rel="noreferrer">Карточка в Яндексе</SiteAnchor>
      </PageHero>

      <section className="site-container section-pad yandex-reviews-section">
        <div className="yandex-reviews-copy" data-reveal>
          <h2>Отзывы в Яндексе</h2>
          <SiteAnchor className="text-link" href={MAPS_URL} target="_blank" rel="noreferrer">Открыть в Яндексе</SiteAnchor>
        </div>
        <YandexReviewsWidget />
      </section>

    </>
  );
}
