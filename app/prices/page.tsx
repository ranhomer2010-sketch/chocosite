import { SiteAnchor } from "@/components/site-elements";
import type { Metadata } from "next";
import { BookingBand, PageHero, PriceGroupBlock } from "@/components/shared";
import { cosmetologyGroups, massageGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Цены",
  description: "Цены на массаж, SPA-программы, массаж лица и косметологические процедуры в клинике ВШоколаде.",
};

export default function PricesPage() {
  return (
    <>
      <PageHero
        eyebrow="Прайс-лист"
        title="Стоимость процедур"
        text="Основные услуги собраны по направлениям. Время для записи выбирайте в YCLIENTS."
        image="/images/body-care.webp"
        imageAlt="Антицеллюлитный массаж"
        position="center 50%"
      />

      <nav className="site-container price-nav" aria-label="Разделы прайс-листа">
        <SiteAnchor href="#massage-prices">Массаж</SiteAnchor>
        <SiteAnchor href="#face">Массаж лица</SiteAnchor>
        <SiteAnchor href="#cosmetology-prices">Косметология</SiteAnchor>
        <SiteAnchor href="#injections">Инъекционные процедуры</SiteAnchor>
      </nav>

      <div className="site-container price-sections">
        <div id="massage-prices">
          {massageGroups.map((group) => <PriceGroupBlock group={group} key={`massage-${group.id}`} />)}
        </div>
        <div id="cosmetology-prices">
          {cosmetologyGroups.map((group) => <PriceGroupBlock group={group} key={`cosmetology-${group.id}`} />)}
        </div>
      </div>

      <p className="notice">Стоимость на этой странице указана по предоставленному прайсу с уточнениями клиники. При расхождении с формой записи подтвердите цену у администратора до процедуры.</p>
      <BookingBand />
    </>
  );
}
