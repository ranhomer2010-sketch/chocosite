import { SiteAnchor } from "@/components/site-elements";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared";
import { PriceSwitcher } from "@/components/price-switcher";
import { PhotoGallery } from "@/components/photo-gallery";
import { massageGroups, subscriptions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Массаж и SPA",
  description: "Классический, расслабляющий, корректирующий массаж и массаж лица в клинике ВШоколаде в Лобне.",
};

const groups = [
  ...massageGroups,
  {
    id: "subscriptions",
    title: "Абонементы",
    description: "Сеансы и минуты для регулярных визитов.",
    items: subscriptions,
  },
];

export default function MassagePage() {
  return (
    <>
      <PageHero
        eyebrow="Массаж и SPA"
        title="Время расслабиться"
        text="Выберите массаж или SPA. Интенсивность обсудите с мастером."
        image="/images/manual-massage.webp"
        imageAlt="Мастер проводит массаж ноги в клинике ВШоколаде"
        position="center 50%"
        pattern="flow"
      >
        <SiteAnchor className="button button-outline" href="#prices-list">Смотреть цены</SiteAnchor>
      </PageHero>

      <PhotoGallery
        eyebrow="В кабинете"
        title="Как проходят сеансы"
        photos={[
          { src: "/images/spa-back.webp", alt: "Спина во время SPA-процедуры", caption: "SPA" },
          { src: "/images/manual-massage.webp", alt: "Ручной массаж ноги", caption: "Ручной массаж" },
          { src: "/images/body-device.webp", alt: "Аппаратная процедура для тела", caption: "Аппаратный массаж" },
          { src: "/images/body-roller.webp", alt: "Работа аппаратом в зоне бедра", caption: "Проработка зон" },
        ]}
      />

      <PriceSwitcher groups={groups} label="Разделы массажа и SPA" />

      <p className="notice">Актуальную цену и свободное время уточняйте при записи.</p>
    </>
  );
}
