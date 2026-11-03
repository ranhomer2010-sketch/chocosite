import { SiteAnchor } from "@/components/site-elements";
import type { Metadata } from "next";
import { BookingBand, PageHero } from "@/components/shared";

export const metadata: Metadata = {
  title: "Специалисты",
  description: "Массажисты клиники ВШоколаде в Лобне: Ольга, Алексей и Евгений. Услуги и запись в YCLIENTS.",
};

const specialists = [
  {
    name: "Ольга",
    experience: "3 года опыта",
    summary: "Классический массаж, массаж лица и антицеллюлитные техники.",
    details: "Интенсивность обсудите перед сеансом.",
  },
  {
    name: "Алексей",
    experience: "10 лет опыта",
    summary: "Массажист с медицинским образованием.",
    details: "Доступные услуги — в онлайн-записи.",
  },
  {
    name: "Евгений",
    experience: "24 года опыта",
    summary: "Массажист с медицинским образованием.",
    details: "В том числе нейроседативный и миоструктурный массаж.",
  },
];

const choices = [
  { title: "Расслабиться", text: "Выберите классический или SPA-массаж." },
  { title: "Снять напряжение", text: "Посмотрите массаж спины, ног или шеи." },
  { title: "Уход за лицом", text: "Массаж лица или консультация косметолога." },
  { title: "Пройти курс", text: "Обсудите с мастером частоту визитов и абонемент." },
];

export default function SpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Команда"
        title="Наши мастера"
        text="Ольга, Алексей и Евгений. Выберите мастера при записи."
        image="/images/head-massage.webp"
        imageAlt="Массаж головы во время процедуры"
        position="center 48%"
      >
        <SiteAnchor className="button button-outline" href="/reviews#content">Читать отзывы</SiteAnchor>
      </PageHero>

      <section className="site-container section-pad team-section" aria-labelledby="team-title">
        <div className="team-heading" data-reveal>
          <h2 id="team-title">Знакомьтесь</h2>
        </div>
        <div className="team-grid">
          {specialists.map((specialist, index) => (
            <article className="team-card" key={specialist.name} data-reveal>
              <span className="team-card-number" aria-hidden="true">0{index + 1}</span>
              <div>
                <p className="team-experience">{specialist.experience}</p>
                <h3>{specialist.name}</h3>
                <p className="team-summary">{specialist.summary}</p>
                <p className="team-details">{specialist.details}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container section-pad specialist-layout">
        <div className="specialist-intro" data-reveal>
          <h2>Как выбрать</h2>
          <p>Выберите направление.</p>
        </div>
        <div className="choice-list">
          {choices.map((choice) => (
            <article key={choice.title}>
              <h3>{choice.title}</h3>
              <p>{choice.text}</p>
            </article>
          ))}
        </div>
      </section>

      <BookingBand title="Записаться к мастеру" text="Доступные услуги и время — в онлайн-записи." />
    </>
  );
}
