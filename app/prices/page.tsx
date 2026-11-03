import { SiteAnchor, SiteImage as Image } from "@/components/site-elements";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цены на массаж, SPA и косметологию",
  description: "Выберите направление и посмотрите стоимость массажа, SPA-программ и косметологии в клинике ВШоколаде.",
};

const directions = [
  {
    id: "massage-prices",
    title: "Цены на массаж и SPA",
    headline: "Выберите время для себя",
    text: "Массаж тела и лица, SPA и абонементы.",
    href: "/massazh#prices-list",
    image: "/images/spa-back.webp",
    imageAlt: "Массаж спины в клинике ВШоколаде",
  },
  {
    id: "cosmetology-prices",
    title: "Цены на косметологию",
    headline: "Начните с того, что беспокоит",
    text: "Чистка, пилинги, уход и инъекции.",
    href: "/kosmetologiya#prices-list",
    image: "/images/care-mask.webp",
    imageAlt: "Маска для лица во время процедуры ухода",
  },
];

export default function PricesPage() {
  return (
    <>
      <div className="site-container prices-heading">
        <h1>Цены</h1>
      </div>

      <div className="site-container price-directions">
        {directions.map((direction) => (
          <section className="price-direction" id={direction.id} key={direction.id}>
            <div className="price-direction-copy" data-reveal>
              <h2>{direction.title}</h2>
              <h3>{direction.headline}</h3>
              <p>{direction.text}</p>
              <SiteAnchor className="button" href={direction.href}>Смотреть стоимость <span aria-hidden="true">↗</span></SiteAnchor>
            </div>
            <div className="price-direction-image">
              <Image src={direction.image} alt={direction.imageAlt} fill sizes="(max-width: 850px) 100vw, 45vw" />
            </div>
          </section>
        ))}
      </div>

      <p className="notice">Актуальные цены и свободное время — в онлайн-записи.</p>
    </>
  );
}
