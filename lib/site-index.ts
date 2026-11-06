import { massageGroups, cosmetologyGroups } from "@/lib/content";
import { legalDocuments } from "@/lib/legal-documents";

export const sitePages = [
  { title: "Главная", href: "/", text: "Клиника ВШоколаде в Лобне. Массаж и косметология." },
  { title: "Массаж и SPA", href: "/massazh", text: "Услуги и цены на классический массаж, массаж лица, SPA, коррекцию силуэта." },
  { title: "Косметология", href: "/kosmetologiya", text: "Услуги и цены на уход за лицом, аппаратные и инъекционные процедуры." },
  { title: "Цены", href: "/prices", text: "Прайс-лист на массаж, SPA и косметологию." },
  { title: "О клинике", href: "/about", text: "Клиника ВШоколаде, фотографии и Telegram-канал." },
  { title: "Специалисты", href: "/specialists", text: "Массажисты Ольга, Алексей и Евгений." },
  { title: "Отзывы", href: "/reviews", text: "Отзывы посетителей в Яндексе." },
  { title: "Контакты", href: "/contacts", text: "Адрес: Лобненский бульвар, 12. Как добраться. Телефон +7 (967) 207-55-50. Ежедневно 10:00–21:30." },
  { title: "Правовая информация", href: "/legal", text: "Лицензия, реквизиты ООО и ИП, учредитель, директор, документы клиники." },
  { title: "Пациентам", href: "/legal#patients", text: "Правила записи, права и обязанности, обращения, претензии, копии медицинских документов, госпитализация." },
  { title: "Бесплатная медицинская помощь", href: "/legal#programs", text: "ОМС, программа государственных гарантий, ТФОМС." },
  { title: "Контролирующие организации", href: "/legal#authorities", text: "Контакты Минздрава, Росздравнадзора и Роспотребнадзора." },
  { title: "Политика обработки персональных данных", href: "/privacy", text: "Защита данных, операторы, 152-ФЗ." },
  { title: "Согласия на сайте", href: "/consent", text: "Условия подключения Яндекс Карт, отзывов, геолокации и аналитики." },
  { title: "Cookies", href: "/cookies", text: "Cookie, Яндекс Метрика, настройка аналитики." },
  { title: "Карта сайта", href: "/site-map", text: "Все страницы и документы." },
];
export const searchEntries = [
  ...sitePages,
  ...legalDocuments.map(d=>({title:d.title,href:d.href,text:`${d.description}. Документ ${d.format}.`})),
  ...[[massageGroups,"/massazh"],[cosmetologyGroups,"/kosmetologiya"]].flatMap(([groups,href]) =>
    (groups as typeof massageGroups).flatMap(group => group.items.map(item => ({
      title:item.title, href:`${href}?category=${group.id}#prices-list`, text:`${group.title}. ${item.time || ""} ${item.price}. ${item.note || ""}`,
    })))),
];
