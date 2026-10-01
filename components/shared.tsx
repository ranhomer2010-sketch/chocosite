import { SiteAnchor } from "@/components/site-elements";
import { SiteImage as Image } from "@/components/site-elements";
import type { ReactNode } from "react";
import { BOOKING_URL, type PriceGroup } from "@/lib/content";

export function FloatingBooking() {
  return (
    <SiteAnchor className="floating-booking" href={BOOKING_URL} target="_blank" rel="noreferrer">
      <span>Онлайн</span>
      <b>запись</b>
    </SiteAnchor>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  children,
  position = "center",
}: {
  eyebrow?: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
  position?: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p className="page-hero-text">{text}</p>
        <div className="hero-actions">
          <SiteAnchor className="button" href={BOOKING_URL} target="_blank" rel="noreferrer">
            Онлайн-запись
          </SiteAnchor>
          {children}
        </div>
      </div>
      <div className="page-hero-media">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 800px) 100vw, 50vw"
          style={{ objectPosition: position }}
        />
      </div>
    </section>
  );
}

export function PriceGroupBlock({ group }: { group: PriceGroup }) {
  return (
    <section className="price-group" id={group.id}>
      <div className="price-group-heading">
        <h2>{group.title}</h2>
        <p>{group.description}</p>
      </div>
      <div className="price-list">
        {group.items.map((item, index) => (
          <article className="price-row" key={`${item.title}-${item.time ?? index}`}>
            <div>
              <h3>{item.title}</h3>
              {item.note ? <p>{item.note}</p> : null}
            </div>
            <div className="price-meta">
              {item.time ? <span>{item.time}</span> : null}
              <b>{item.price}</b>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BookingBand({
  title = "Выберите удобное время",
  text = "Актуальное расписание, специалисты и стоимость доступны в форме онлайн-записи.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="booking-band">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <SiteAnchor className="button button-light" href={BOOKING_URL} target="_blank" rel="noreferrer">
        Онлайн-запись
      </SiteAnchor>
    </section>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <SiteAnchor className="text-link" href={href}>
      {children}
    </SiteAnchor>
  );
}
