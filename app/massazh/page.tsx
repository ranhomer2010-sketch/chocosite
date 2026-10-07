import { SiteAnchor } from "@/components/site-elements";
import type { Metadata } from "next";
import { SiteImage as Image } from "@/components/site-elements";
import { BookingBand, PageHero, PriceGroupBlock } from "@/components/shared";
import { massageGroups, subscriptions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Массаж и SPA",
  description: "Классический, расслабляющий, корректирующий массаж и массаж лица в клинике ВШоколаде в Лобне.",
};

export default function MassagePage() {
  return (
    <>
      <PageHero
        eyebrow="Массаж и SPA"
        title="Тело помнит заботу"
        text="От мягкого расслабления до глубокой работы с мышцами. Формат и интенсивность подбираются индивидуально."
        image="/images/massage-ritual.webp"
        imageAlt="Массаж спины в клинике ВШоколаде"
        position="center 44%"
        pattern="flow"
      >
        <SiteAnchor className="button button-outline" href="/prices">Смотреть цены</SiteAnchor>
      </PageHero>

      <nav className="site-container price-nav" aria-label="Разделы массажа">
        {massageGroups.map((group) => (
          <SiteAnchor href={`#${group.id}`} key={group.id}>{group.title}</SiteAnchor>
        ))}
        <SiteAnchor href="#subscriptions">Абонементы</SiteAnchor>
      </nav>

      <section className="site-container section-pad service-story">
        <div className="story-image">
          <Image
            src="/images/face-massage.webp"
            alt="Массаж лица"
            fill
            sizes="(max-width: 980px) 100vw, 52vw"
            style={{ objectPosition: "center 42%" }}
          />
        </div>
        <div className="story-copy" data-reveal>
          <h2>Начните с того, что хочется чувствовать</h2>
          <p>Легкость в спине, расслабление после насыщенной недели, работа с силуэтом или свежий вид лица. Специалист поможет выбрать технику и длительность.</p>
          <div className="story-points">
            <div className="story-point"><strong>Расслабление</strong><span>SPA-ритуалы и мягкие техники</span></div>
            <div className="story-point"><strong>Восстановление</strong><span>Работа с напряжением и тонусом</span></div>
            <div className="story-point"><strong>Коррекция</strong><span>Ручные и аппаратные программы</span></div>
            <div className="story-point"><strong>Лицо</strong><span>Скульптурные и миофасциальные техники</span></div>
          </div>
        </div>
      </section>

      <div className="site-container price-sections">
        {massageGroups.map((group) => <PriceGroupBlock group={group} key={group.id} />)}

        <section className="price-group" id="subscriptions">
          <div className="price-group-heading">
            <h2>Абонементы</h2>
            <p>Для регулярного ухода и курса процедур по более выгодной стоимости.</p>
          </div>
          <div className="price-list">
            {subscriptions.map((item) => (
              <article className="price-row" key={`${item.title}-${item.time}`}>
                <div><h3>{item.title}</h3>{item.note ? <p>{item.note}</p> : null}</div>
                <div className="price-meta"><span>{item.time}</span><b>{item.price}</b></div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <p className="notice">Стоимость указана по предоставленному прайс-листу. Актуальная цена и доступность времени подтверждаются в YCLIENTS.</p>
      <BookingBand title="Подберите свой массаж" text="В онлайн-записи можно выбрать процедуру, специалиста и удобное время без звонка." />
    </>
  );
}
