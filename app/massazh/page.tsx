import { SiteAnchor } from "@/components/site-elements";
import type { Metadata } from "next";
import { BookingBand, PageHero } from "@/components/shared";
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
    description: "Для регулярного ухода и курса процедур по более выгодной стоимости.",
    items: subscriptions,
  },
];

export default function MassagePage() {
  return (
    <>
      <PageHero
        eyebrow="Массаж и SPA"
        title="Тело помнит заботу"
        text="От мягкого расслабления до глубокой работы с мышцами. Формат и интенсивность подбираются индивидуально."
        image="/images/manual-massage.webp"
        imageAlt="Мастер проводит массаж ноги в клинике ВШоколаде"
        position="center 50%"
        pattern="flow"
      >
        <SiteAnchor className="button button-outline" href="#prices-list">Смотреть цены</SiteAnchor>
      </PageHero>

      <PhotoGallery
        eyebrow="В процессе"
        title="Массаж в деталях"
        photos={[
          { src: "/images/spa-back.webp", alt: "Спина во время SPA-процедуры", caption: "Время для себя" },
          { src: "/images/manual-massage.webp", alt: "Ручной массаж ноги", caption: "Ручной массаж" },
          { src: "/images/body-device.webp", alt: "Аппаратная процедура для тела", caption: "Аппаратная работа с телом" },
          { src: "/images/body-roller.webp", alt: "Работа аппаратом в зоне бедра", caption: "Работа с отдельными зонами" },
        ]}
      />

      <PriceSwitcher groups={groups} label="Разделы массажа и SPA" />

      <p className="notice">Стоимость указана по предоставленному прайс-листу. Актуальная цена и доступность времени подтверждаются в YCLIENTS.</p>
      <BookingBand title="Подберите свой массаж" text="В онлайн-записи можно выбрать процедуру, специалиста и удобное время без звонка." />
    </>
  );
}
