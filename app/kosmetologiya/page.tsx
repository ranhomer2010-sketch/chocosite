import { SiteAnchor } from "@/components/site-elements";
import type { Metadata } from "next";
import { SiteImage as Image } from "@/components/site-elements";
import { BookingBand, PageHero, PriceGroupBlock } from "@/components/shared";
import { cosmetologyGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Косметология",
  description: "Эстетическая и инъекционная косметология, уходы и аппаратные процедуры в клинике ВШоколаде в Лобне.",
};

export default function CosmetologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Косметология"
        title="Уход для вашей кожи"
        text="Эстетические, аппаратные и инъекционные процедуры после очной оценки специалиста."
        image="/images/cosmetology.webp"
        imageAlt="Косметологическая процедура для лица"
        position="center 34%"
      >
        <SiteAnchor className="button button-outline" href="/prices">Смотреть цены</SiteAnchor>
      </PageHero>

      <nav className="site-container price-nav" aria-label="Разделы косметологии">
        {cosmetologyGroups.map((group) => (
          <SiteAnchor href={`#${group.id}`} key={group.id}>{group.title}</SiteAnchor>
        ))}
      </nav>

      <section className="site-container section-pad service-story">
        <div className="story-image">
          <Image
            src="/images/skin-care.webp"
            alt="Профессиональный уход за кожей лица"
            fill
            sizes="(max-width: 980px) 100vw, 52vw"
            style={{ objectPosition: "center 36%" }}
          />
        </div>
        <div className="story-copy">
          <h2>Сначала задача, потом процедура</h2>
          <p>На консультации специалист уточняет состояние кожи, ожидания и возможные ограничения. Так уход получается понятным и обоснованным.</p>
          <div className="story-points">
            <div className="story-point"><strong>Очищение</strong><span>Чистки и пилинги по показаниям</span></div>
            <div className="story-point"><strong>Увлажнение</strong><span>Профессиональные уходовые протоколы</span></div>
            <div className="story-point"><strong>Тонус</strong><span>Аппаратные методики и массаж лица</span></div>
            <div className="story-point"><strong>Коррекция</strong><span>Инъекционные процедуры у врача</span></div>
          </div>
        </div>
      </section>

      <div className="site-container price-sections">
        {cosmetologyGroups.map((group) => <PriceGroupBlock group={group} key={group.id} />)}
      </div>

      <p className="notice">Имеются противопоказания. Необходима консультация специалиста. Итоговая стоимость зависит от выбранного препарата и объема процедуры.</p>
      <BookingBand title="Начните с консультации" text="Выберите прием врача-косметолога или подходящую процедуру в актуальном расписании." />
    </>
  );
}
