import { SiteAnchor } from "@/components/site-elements";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared";
import { PriceSwitcher } from "@/components/price-switcher";
import { PhotoGallery } from "@/components/photo-gallery";
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
        title="Уход квалифицированных специалистов"
        compactTitle
        text="Чистка, уходы, аппаратные и инъекционные процедуры. Выбор обсудите со специалистом."
        image="/images/face-care-session.webp"
        imageAlt="Косметолог наносит маску во время ухода за лицом"
        position="center 48%"
      >
        <SiteAnchor className="button button-outline" href="#prices-list">Смотреть цены</SiteAnchor>
      </PageHero>

      <PhotoGallery
        eyebrow="В кабинете"
        title="Во время процедур"
        photos={[
          { src: "/images/face-care-session.webp", alt: "Специалист наносит маску для лица", caption: "Уход за лицом", position: "65% center" },
          { src: "/images/care-mask.webp", alt: "Гостья с маской для лица", caption: "Маска для лица" },
          { src: "/images/cosmetology-injection.webp", alt: "Инъекционная процедура в зоне лица", caption: "Инъекционные процедуры" },
          { src: "/images/lips-result.webp", alt: "Два кадра губ до и после косметологической процедуры", caption: "Пример результата" },
        ]}
        note="На фото — пример результата. Эффект индивидуален; нужна консультация специалиста."
      />

      <PriceSwitcher groups={cosmetologyGroups} label="Разделы косметологии" />

      <p className="notice">Имеются противопоказания. Нужна консультация специалиста. Цена зависит от препарата и объёма процедуры.</p>
    </>
  );
}
