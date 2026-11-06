import type { Metadata } from "next";
import { ArrowDownToLine, ArrowUpRight, FileText, ShieldCheck } from "lucide-react";
import { SiteAnchor } from "@/components/site-elements";
import { legalDocuments } from "@/lib/legal-documents";
import { COMPANY_NAME, COMPANY_INN, COMPANY_OGRN, COMPANY_ADDRESS, SOLE_TRADER_NAME, SOLE_TRADER_INN, SOLE_TRADER_OGRNIP, PHONE_DISPLAY, PHONE_HREF, BOOKING_URL } from "@/lib/content";

export const metadata: Metadata = { title: "Правовая информация", description: "Лицензия ООО ВШоколаде, сведения о клинике, документы для пациентов, правила платных медицинских услуг и контакты контролирующих организаций." };
const sections = [["clinic", "О клинике и лицензии"], ["documents", "Документы"], ["patients", "Пациентам"], ["programs", "Бесплатная помощь"], ["authorities", "Контролирующие органы"], ["data", "Персональные данные"]];
const groups = [["clinic", "Документы клиники"], ["patient", "Документы для пациентов"], ["paid", "Платные медицинские услуги"], ["consent", "Бланки согласий"]];

export default function LegalPage() {
  return (
    <div className="legal-page site-container">
      <header className="document-heading"><p className="eyebrow">Информация для пациентов</p><h1>Правовая информация</h1><p>Лицензия, сведения о клинике и документы, с которыми можно ознакомиться до приёма.</p></header>
      <nav className="legal-jump-links" aria-label="Разделы правовой информации">{sections.map(([id,title]) => <a key={id} href={`#${id}`}>{title}</a>)}</nav>
      <section className="legal-section" id="clinic">
        <div className="legal-section-title"><ShieldCheck aria-hidden="true" /><h2>О клинике и лицензии</h2></div>
        <dl className="legal-facts">
          <div><dt>Медицинская организация</dt><dd>Общество с ограниченной ответственностью «ВШоколаде»</dd></div>
          <div><dt>Реквизиты</dt><dd>ИНН {COMPANY_INN} · КПП 771301001<br />ОГРН {COMPANY_OGRN} · зарегистрировано 21.10.2025</dd></div>
          <div><dt>Юридический адрес</dt><dd>{COMPANY_ADDRESS}</dd></div>
          <div><dt>Адрес оказания медицинской помощи</dt><dd>141736, Московская область, г. Лобня, бульвар Лобненский, д. 12, помещение 4Н.<br /><SiteAnchor href="/contacts#route">Схема проезда</SiteAnchor></dd></div>
          <div><dt>Учредитель и генеральный директор</dt><dd>Антипова Яна Геннадьевна</dd></div>
          <div><dt>Режим работы</dt><dd>Ежедневно с 10:00 до 21:30</dd></div>
          <div><dt>Телефон</dt><dd><SiteAnchor href={PHONE_HREF}>{PHONE_DISPLAY}</SiteAnchor></dd></div>
        </dl>
        <div className="license-panel"><p className="eyebrow">Медицинская лицензия</p><h3>№ Л041-01162-50/04066667</h3><p>Предоставлена 24 декабря 2025 года Министерством здравоохранения Московской области.</p><p>Медицинский массаж, сестринское дело в косметологии и косметология. Помощь оказывается в амбулаторных условиях.</p><SiteAnchor className="text-link" href="/documents/medical-license.pdf" target="_blank" rel="noreferrer">Открыть выписку из реестра лицензий <ArrowUpRight size={17} aria-hidden="true" /></SiteAnchor><small>Выписка от 03.04.2026. Лицензиат — ООО «ВШоколаде».</small></div>
        <details className="legal-details"><summary>Структура и другие исполнители услуг</summary><p>Управление клиникой осуществляет генеральный директор. В структуру врачебно-медицинского отдела входят врач-косметолог, медицинская сестра по косметологии и медицинская сестра по массажу.</p><p><strong>{SOLE_TRADER_NAME}</strong><br />ИНН {SOLE_TRADER_INN} · ОГРНИП {SOLE_TRADER_OGRNIP}.</p><p>Исполнитель конкретной услуги указывается при записи и в договоре. Приведённая выше медицинская лицензия выдана {COMPANY_NAME}.</p></details>
      </section>
      <section className="legal-section" id="documents">
        <h2>Документы</h2>
        <p>Файлы предоставлены клиникой. Бланки согласий предназначены для ознакомления; их оформление проводится при оказании услуг.</p>
        {groups.map(([group,title]) => <div className="document-group" key={group}><h3>{title}</h3><div className="document-grid">{legalDocuments.filter(d=>d.group===group).map(doc=><SiteAnchor className="document-card" href={doc.href} key={doc.href} download><FileText size={23} aria-hidden="true" /><span><strong>{doc.title}</strong><span>{doc.description}</span><small>{doc.format} · {doc.size} · Скачать</small></span><ArrowDownToLine size={18} aria-hidden="true" /></SiteAnchor>)}</div></div>)}
        <div className="legal-inline-links"><SiteAnchor href="/kosmetologiya#prices-list">Цены на косметологию ↗</SiteAnchor><SiteAnchor href="/massazh#prices-list">Цены на массаж и SPA ↗</SiteAnchor></div>
      </section>
      <section className="legal-section" id="patients">
        <h2>Пациентам</h2>
        <details className="legal-details" open><summary>Запись и первый визит</summary><p>Записаться можно по телефону <SiteAnchor href={PHONE_HREF}>{PHONE_DISPLAY}</SiteAnchor>, лично в клинике или через <SiteAnchor href={BOOKING_URL} target="_blank" rel="noreferrer">YCLIENTS</SiteAnchor>. Для записи понадобятся имя и контактный телефон. На первый приём возьмите документ, удостоверяющий личность.</p><p>Медицинские услуги оказываются по договору. Перед медицинским вмешательством специалист объясняет его цели, риски и возможные варианты, после чего оформляется информированное добровольное согласие.</p></details>
        <details className="legal-details"><summary>Права и обязанности пациента</summary><p>Пациент имеет право на уважительное отношение, информацию о своём здоровье и лечении, сохранение врачебной тайны, ознакомление с медицинской документацией и получение её копий в установленном порядке.</p><p>Пациент вправе дать согласие на медицинское вмешательство или отказаться от него в предусмотренном законом порядке. Необходимо соблюдать согласованные рекомендации врача и правила посещения, сообщать сведения, важные для оказания помощи.</p><SiteAnchor href="/documents/patient-rules.docx" download>Скачать правила и перечень прав пациента</SiteAnchor></details>
        <details className="legal-details"><summary>Обращения и медицинские документы</summary><p>Письменное обращение, претензию или запрос на копии медицинских документов можно передать администрации по адресу клиники: г. Лобня, бульвар Лобненский, д. 12, помещение 4Н. Укажите суть обращения и способ получения ответа.</p><p>Порядок подачи и получения документов можно уточнить по телефону <SiteAnchor href={PHONE_HREF}>{PHONE_DISPLAY}</SiteAnchor>. Для выдачи медицинских документов требуется подтверждение личности и, при обращении представителя, его полномочий.</p></details>
        <details className="legal-details"><summary>Диагностические исследования и госпитализация</summary><p>По сведениям, предоставленным клиникой, диагностические исследования и госпитализация в ООО «ВШоколаде» не проводятся.</p></details>
      </section>
      <section className="legal-section" id="programs"><h2>Бесплатная медицинская помощь</h2><p>ООО «ВШоколаде» не участвует в программе государственных гарантий бесплатного оказания медицинской помощи и территориальной программе. Медицинские услуги в клинике оказываются платно.</p><p>Вы можете получить соответствующую помощь бесплатно в организациях, участвующих в этих программах, при соблюдении предусмотренных ими условий. Сведения об организациях и порядке получения помощи размещены на сайте ТФОМС Московской области.</p><div className="legal-inline-links"><a href="https://www.mofoms.ru/grazhdanam/" target="_blank" rel="noreferrer">ТФОМС Московской области ↗</a><a href="https://www.mofoms.ru/dokumenty/normativnaya-baza/" target="_blank" rel="noreferrer">Нормативные документы ТФОМС ↗</a></div></section>
      <section className="legal-section" id="authorities"><h2>Контролирующие организации</h2><div className="authority-grid">
        <article><h3>Министерство здравоохранения Московской области</h3><p>Московская область, г. Красногорск, бульвар Строителей, д. 1</p><a href="tel:+74986020301">+7 (498) 602-03-01</a><a href="https://mz.mosreg.ru/" target="_blank" rel="noreferrer">Официальный сайт ↗</a></article>
        <article><h3>Росздравнадзор по Москве и Московской области</h3><p>109316, г. Москва, Волгоградский проспект, д. 27</p><a href="tel:+79162567676">+7 (916) 256-76-76</a><a href="https://www.roszdravnadzor.gov.ru/about/structure/territorial/66" target="_blank" rel="noreferrer">Контакты территориального органа ↗</a></article>
        <article><h3>Роспотребнадзор по Московской области</h3><p>141014, Московская область, г. Мытищи, ул. Семашко, д. 2</p><a href="tel:+74955861078">+7 (495) 586-10-78</a><a href="https://50.rospotrebnadzor.ru/" target="_blank" rel="noreferrer">Официальный сайт ↗</a></article>
      </div></section>
      <section className="legal-section" id="data"><h2>Персональные данные</h2><div className="legal-inline-links"><SiteAnchor href="/privacy">Политика обработки персональных данных</SiteAnchor><SiteAnchor href="/consent">Согласия на сайте</SiteAnchor><SiteAnchor href="/cookies">Cookies и настройки аналитики</SiteAnchor></div><p>Документы сайта и согласие пациента на обработку медицинских данных относятся к разным ситуациям. Бланк для пациента можно скачать в разделе документов выше.</p></section>
      <section className="legal-section" id="regulations"><h2>Нормативная информация</h2><p>Официальные тексты правовых актов, стандартов медицинской помощи и клинических рекомендаций:</p><ul className="legal-source-links"><li><a href="https://pravo.gov.ru/" target="_blank" rel="noreferrer">Официальный интернет-портал правовой информации</a></li><li><a href="https://cr.minzdrav.gov.ru/" target="_blank" rel="noreferrer">Рубрикатор клинических рекомендаций Минздрава России</a></li><li><a href="https://publication.pravo.gov.ru/document/0001202606010083" target="_blank" rel="noreferrer">Правила платных медицинских услуг — постановление № 659 от 30.05.2026</a></li><li><a href="https://publication.pravo.gov.ru/document/0001202504110006" target="_blank" rel="noreferrer">Требования к информации на сайте — приказ Минздрава № 118н от 13.03.2025</a></li></ul></section>
    </div>
  );
}
