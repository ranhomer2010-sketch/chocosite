import { SiteAnchor } from "@/components/site-elements";
import type { Metadata } from "next";
import { BookingBand, PageHero } from "@/components/shared";
import { PriceSwitcher } from "@/components/price-switcher";
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
        <SiteAnchor className="button button-outline" href="#prices-list">Смотреть цены</SiteAnchor>
      </PageHero>

      <PriceSwitcher groups={cosmetologyGroups} label="Разделы косметологии" />

      <p className="notice">Имеются противопоказания. Необходима консультация специалиста. Итоговая стоимость зависит от выбранного препарата и объема процедуры.</p>
      <BookingBand title="Начните с консультации" text="Выберите прием врача-косметолога или подходящую процедуру в актуальном расписании." />
    </>
  );
}
