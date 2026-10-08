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
    details: "Поможет выбрать комфортную интенсивность и формат процедуры.",
  },
  {
    name: "Алексей",
    experience: "10 лет опыта",
    summary: "Массажист с медицинским образованием.",
    details: "Направления и свободное время можно посмотреть при онлайн-записи.",
  },
  {
    name: "Евгений",
    experience: "24 года опыта",
    summary: "Массажист с медицинским образованием.",
    details: "Выполняет основные виды массажа, а также авторский нейроседативный и миоструктурный массаж.",
  },
];

const choices = [
  { title: "Нужно расслабиться", text: "Выберите классический или SPA-массаж. Интенсивность можно обсудить перед началом сеанса." },
  { title: "Есть конкретная зона напряжения", text: "Подойдут массаж спины, ног или шейно-воротниковой зоны с нужной длительностью." },
  { title: "Нужен уход за лицом", text: "Для массажа лица можно записаться сразу. Для косметологических процедур лучше начать с консультации." },
  { title: "Нужен курс", text: "Специалист поможет подобрать частоту посещений и формат абонемента без лишних процедур." },
];

export default function SpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Команда"
        title="Люди, которым можно доверить отдых"
        text="Познакомьтесь с массажистами ВШоколаде. Выберите услугу и удобное время в онлайн-записи."
        image="/images/face-massage.webp"
        imageAlt="Специалист проводит массаж лица"
        position="center 42%"
      >
        <SiteAnchor className="button button-outline" href="/reviews#content">Читать отзывы</SiteAnchor>
      </PageHero>

      <section className="site-container section-pad team-section" aria-labelledby="team-title">
        <div className="team-heading" data-reveal>
          <p className="eyebrow">Мастера массажа</p>
          <h2 id="team-title">Наша команда</h2>
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
          <p>Ориентируйтесь на задачу и процедуру. В форме онлайн-записи останутся только специалисты, которые выполняют выбранную услугу.</p>
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

      <BookingBand title="Посмотрите актуальную команду" text="Откройте YCLIENTS, выберите услугу и увидите доступных специалистов с расписанием." />
    </>
  );
}
