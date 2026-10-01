import { SiteAnchor } from "@/components/site-elements";
import type { Metadata } from "next";
import { BookingBand, PageHero } from "@/components/shared";

export const metadata: Metadata = {
  title: "Специалисты",
  description: "Как выбрать специалиста по массажу или косметологии в клинике ВШоколаде. Актуальный состав команды доступен в YCLIENTS.",
};

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
        title="Специалист под вашу задачу"
        text="В YCLIENTS отображаются актуальный состав команды, доступные услуги и свободное время каждого специалиста."
        image="/images/face-massage.webp"
        imageAlt="Специалист проводит массаж лица"
        position="center 42%"
      >
        <SiteAnchor className="button button-outline" href="/reviews">Читать отзывы</SiteAnchor>
      </PageHero>

      <section className="site-container section-pad specialist-layout">
        <div className="specialist-intro">
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
