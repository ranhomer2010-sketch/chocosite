import { SiteAnchor } from "@/components/site-elements";
import type { Metadata } from "next";
import { SiteImage as Image } from "@/components/site-elements";
import { BookingBand, TextLink } from "@/components/shared";
import { YandexReviewsWidget } from "@/components/yandex-reviews-widget";
import { MAPS_URL, trustFacts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Массаж и косметология в Лобне",
  description:
    "Клиника ВШоколаде в Лобне: массаж, SPA-программы, уход за лицом и косметология. Онлайн-запись через YCLIENTS.",
};

const popular = [
  { title: "Общий массаж", meta: "60 минут", price: "3 500 ₽" },
  { title: "Расслабляющий SPA-массаж", meta: "120 минут", price: "6 900 ₽" },
  { title: "Скульптурный массаж лица", meta: "60 минут", price: "4 000 ₽" },
  { title: "Чистка лица", meta: "90 минут", price: "4 800 ₽" },
  { title: "RF-лифтинг", meta: "30 минут", price: "1 600 ₽" },
];

export default function HomePage() {
  return (
    <>
      <section className="trust-strip" aria-label="Рейтинг клиники">
        {trustFacts.map((fact) => (
          <div className="trust-item" key={fact.label}>
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </div>
        ))}
      </section>

      <section className="site-container section-pad">
        <div className="section-heading" data-reveal>
          <h2>Выберите свое направление</h2>
          <p>От расслабляющего ритуала до программы ухода. Начать можно с понятной цели, остальное подскажут специалисты.</p>
        </div>
        <div className="category-grid">
          <article className="category-card" data-reveal>
            <div className="category-media">
              <Image
                src="/images/massage-ritual.webp"
                alt="Массаж спины"
                fill
                sizes="(max-width: 980px) 100vw, 55vw"
                style={{ objectPosition: "center 46%" }}
              />
            </div>
            <div className="category-copy">
              <h3>Массаж и SPA</h3>
              <p>Классические, расслабляющие, корректирующие и авторские техники.</p>
              <SiteAnchor href="/massazh">Смотреть программы</SiteAnchor>
            </div>
          </article>
          <article className="category-card" data-reveal>
            <div className="category-media">
              <Image
                src="/images/cosmetology.webp"
                alt="Процедура ухода за лицом"
                fill
                sizes="(max-width: 980px) 100vw, 45vw"
                style={{ objectPosition: "center 34%" }}
              />
            </div>
            <div className="category-copy">
              <h3>Косметология</h3>
              <p>Эстетические и инъекционные процедуры с предварительной консультацией.</p>
              <SiteAnchor href="/kosmetologiya">Выбрать процедуру</SiteAnchor>
            </div>
          </article>
        </div>
      </section>

      <section className="editorial-section">
        <div className="editorial-copy">
          <div data-reveal>
            <h2>Место, где не нужно торопиться</h2>
            <p>
              ВШоколаде объединяет массаж и косметологию в одном пространстве. Спокойная атмосфера, внимательный сервис и время, которое действительно принадлежит вам.
            </p>
            <TextLink href="/about">Узнать о клинике</TextLink>
          </div>
        </div>
        <div className="editorial-media">
          <Image
            src="/images/relax.webp"
            alt="Отдых после процедуры"
            fill
            sizes="(max-width: 980px) 100vw, 56vw"
            style={{ objectPosition: "center 42%" }}
          />
        </div>
      </section>

      <section className="site-container section-pad popular-layout">
        <div className="popular-intro" data-reveal>
          <h2>Популярные процедуры</h2>
          <p>Базовые варианты для первого знакомства. Полный прайс собран на отдельной странице.</p>
          <TextLink href="/prices">Смотреть все цены</TextLink>
        </div>
        <div className="popular-list">
          {popular.map((item) => (
            <article className="popular-item" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.meta}</p>
              </div>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="reviews-feature">
        <div className="site-container yandex-reviews-section">
          <div className="yandex-reviews-copy" data-reveal>
            <h2>Отзывы гостей в Яндексе</h2>
            <p>Виджет обновляется автоматически и показывает отзывы прямо из карточки клиники.</p>
            <div className="yandex-rating">
              <strong>5,0</strong>
              <span>759 оценок<br />652 отзыва</span>
            </div>
            <SiteAnchor className="text-link" href={MAPS_URL} target="_blank" rel="noreferrer">
              Открыть все отзывы
            </SiteAnchor>
          </div>
          <YandexReviewsWidget />
        </div>
      </section>

      <BookingBand />
    </>
  );
}
