import { SiteAnchor, SiteImage as Image } from "@/components/site-elements";
import type { Metadata } from "next";
import { BookingBand } from "@/components/shared";

export const metadata: Metadata = {
  title: "Цены на массаж, SPA и косметологию",
  description: "Выберите направление и посмотрите стоимость массажа, SPA-программ и косметологии в клинике ВШоколаде.",
};

const directions = [
  {
    id: "massage-prices",
    number: "01 / массаж и SPA",
    title: "Цены на массаж и SPA",
    headline: "Оставьте напряжение за дверью",
    text: "Массаж тела и лица, SPA-ритуалы и абонементы. Посмотрите время и стоимость процедур, а затем выберите запись.",
    href: "/massazh#prices-list",
    image: "/images/massage-ritual.webp",
    imageAlt: "Массаж спины в клинике ВШоколаде",
  },
  {
    id: "cosmetology-prices",
    number: "02 / косметология",
    title: "Цены на косметологию",
    headline: "Начните с задачи кожи",
    text: "Чистка, пилинг, уход и инъекции. Посмотрите стоимость, затем обсудите выбор процедуры со специалистом.",
    href: "/kosmetologiya#prices-list",
    image: "/images/cosmetology.webp",
    imageAlt: "Процедура ухода за лицом в клинике ВШоколаде",
  },
];

export default function PricesPage() {
  return (
    <>
      <div className="site-container prices-heading">
        <span className="eyebrow">ВШоколаде / прайс</span>
        <h1>Выберите направление</h1>
      </div>

      <div className="site-container price-directions">
        {directions.map((direction) => (
          <section className="price-direction" id={direction.id} key={direction.id}>
            <div className="price-direction-copy" data-reveal>
              <span className="eyebrow">{direction.number}</span>
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

      <p className="notice">Стоимость указана по предоставленному прайсу. Перед процедурой подтвердите цену и доступность времени в онлайн-записи.</p>
      <BookingBand />
    </>
  );
}
