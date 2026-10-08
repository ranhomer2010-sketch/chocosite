export const BOOKING_URL = "https://n458175.yclients.com/";
export const MAPS_URL =
  "https://yandex.ru/maps/org/vshokolade/198231269692?si=6vgrv61jhymx7eyt4znqe9xwaw";
export const PHONE_DISPLAY = "+7 (967) 207-55-50";
export const PHONE_HREF = "tel:+79672075550";
export const TELEGRAM_CHANNEL_URL = "https://t.me/vshokolade_clinic";

export const navigation = [
  { href: "/prices#massage-prices", label: "Цены на массаж и SPA" },
  { href: "/prices#cosmetology-prices", label: "Цены на косметологию" },
  { href: "/specialists#content", label: "Специалисты" },
  { href: "/reviews#content", label: "Отзывы" },
  { href: "/contacts#content", label: "Контакты" },
] as const;

export type PriceItem = {
  title: string;
  time?: string;
  price: string;
  note?: string;
};

export type PriceGroup = {
  id: string;
  title: string;
  description: string;
  items: PriceItem[];
};

export const massageGroups: PriceGroup[] = [
  {
    id: "classic",
    title: "Классический массаж",
    description: "Выберите зону и длительность вместе со специалистом.",
    items: [
      { title: "Шейно-воротниковая зона", time: "30 мин", price: "2 000 ₽" },
      { title: "Спина или ноги", time: "45 мин", price: "2 900 ₽" },
      { title: "Спина, общий или ноги", time: "60 мин", price: "3 500 ₽" },
      { title: "Общий или лимфодренажный", time: "75 мин", price: "4 200 ₽" },
      { title: "Общий массаж", time: "90 мин", price: "4 800 ₽" },
    ],
  },
  {
    id: "spa",
    title: "Расслабляющий SPA-массаж",
    description: "Ритуалы для глубокого отдыха и мягкого восстановления.",
    items: [
      { title: "Расслабляющий SPA-массаж", time: "120 мин", price: "6 900 ₽" },
      { title: "Спортивный массаж", time: "75 мин", price: "4 200 ₽" },
      { title: "Миоструктурный массаж", time: "75 мин", price: "3 800 ₽" },
      { title: "Нейроседативный SPA-массаж", time: "75 мин", price: "3 800 ₽" },
      { title: "Стоунтерапия с расслабляющим массажем", time: "90 мин", price: "4 500 ₽" },
      { title: "Стоунтерапия с расслабляющим массажем", time: "120 мин", price: "6 000 ₽" },
      { title: "Массаж для беременных", time: "60 мин", price: "3 800 ₽" },
      { title: "Детский массаж до 14 лет", time: "45 мин", price: "2 900 ₽" },
    ],
  },
  {
    id: "body",
    title: "Коррекция силуэта",
    description: "Ручные и аппаратные техники для работы с тонусом тела.",
    items: [
      { title: "Антицеллюлитный массаж: бока, ноги и живот", time: "60 мин", price: "3 600 ₽" },
      { title: "Антицеллюлитный массаж: живот и бока", time: "45 мин", price: "3 100 ₽" },
      { title: "Аппаратный массаж ACC", time: "60 мин", price: "3 600 ₽" },
      { title: "Курс из 6 сеансов", time: "по 60 мин", price: "18 600 ₽" },
      { title: "Курс из 8 сеансов", time: "по 60 мин", price: "24 800 ₽" },
    ],
  },
  {
    id: "face",
    title: "Массаж лица",
    description: "Техники для расслабления, тонуса и более свежего вида кожи.",
    items: [
      { title: "Скульптурный массаж лица", time: "60 мин", price: "4 000 ₽" },
      { title: "Хиромассаж лица, шеи и зоны декольте", time: "60 мин", price: "4 000 ₽" },
      { title: "Миофасциальный массаж лица, головы, шеи и декольте", time: "60 мин", price: "4 000 ₽" },
      { title: "Классический массаж лица", time: "30 мин", price: "2 800 ₽" },
      { title: "Абонемент на 5 сеансов", time: "по 60 мин", price: "17 500 ₽" },
      { title: "Абонемент на 8 сеансов", time: "по 60 мин", price: "28 000 ₽" },
    ],
  },
];

export const subscriptions: PriceItem[] = [
  { title: "Все включено", time: "480 мин", price: "24 990 ₽", note: "Используйте минуты в удобном формате" },
  { title: "8 сеансов", time: "по 90 мин", price: "33 600 ₽" },
  { title: "5 сеансов", time: "по 90 мин", price: "20 990 ₽" },
  { title: "8 сеансов", time: "по 75 мин", price: "28 800 ₽" },
  { title: "5 сеансов", time: "по 75 мин", price: "18 000 ₽" },
  { title: "8 сеансов", time: "по 60 мин", price: "24 800 ₽" },
  { title: "5 сеансов", time: "по 60 мин", price: "15 500 ₽" },
];

export const cosmetologyGroups: PriceGroup[] = [
  {
    id: "consultation",
    title: "Консультация",
    description: "Начните с очной оценки состояния кожи и подбора процедур.",
    items: [
      { title: "Прием врача-косметолога", time: "30 мин", price: "1 500 ₽" },
      { title: "Повторный прием врача-косметолога", time: "30 мин", price: "1 500 ₽" },
    ],
  },
  {
    id: "aesthetic",
    title: "Эстетическая косметология",
    description: "Очищение, уходы и мягкие аппаратные методики.",
    items: [
      { title: "Чистка лица", time: "90 мин", price: "4 800 ₽" },
      { title: "Чистка спины", time: "120 мин", price: "8 000 ₽" },
      { title: "Пилинг PRX-T33", time: "30 мин", price: "7 500 ₽" },
      { title: "Пилинг BioRePeelCl3", time: "30 мин", price: "5 500 ₽" },
      { title: "Миндальный пилинг", time: "30 мин", price: "3 500 ₽" },
      { title: "RF-лифтинг", time: "30 мин", price: "1 600 ₽" },
      { title: "Кавитация", time: "30 мин", price: "2 000 ₽" },
    ],
  },
  {
    id: "care",
    title: "Уход за лицом",
    description: "Профессиональные протоколы Gernetic International.",
    items: [
      { title: "Процедура Myo Myoso", price: "5 500 ₽" },
      { title: "Процедура Vasco", price: "5 500 ₽" },
      { title: "Процедура Eclaircissante", price: "5 500 ₽" },
    ],
  },
  {
    id: "injections",
    title: "Инъекционная косметология",
    description: "Процедуры выполняются после консультации врача-косметолога.",
    items: [
      { title: "Мезотерапия", price: "от 4 500 ₽" },
      { title: "Биоревитализация", price: "от 12 000 ₽" },
      { title: "Контурная пластика Stylage M / Lips", time: "1 мл", price: "18 500 ₽" },
      { title: "Контурная пластика Pluryal Classic", time: "1 мл", price: "17 000 ₽" },
      { title: "Контурная пластика Pluryal Volume", time: "1 мл", price: "18 500 ₽" },
      { title: "Контурная пластика Radiesse — лицо и шея", time: "3 мл", price: "58 000 ₽" },
      { title: "Ботулинотерапия Dysport", time: "1 ед.", price: "200 ₽" },
      { title: "Ботулинотерапия Релатокс", time: "1 ед.", price: "450 ₽" },
      { title: "Ботулинотерапия Миотокс", time: "1 ед.", price: "450 ₽" },
      { title: "Липолитики", time: "30 мин", price: "от 4 500 ₽" },
    ],
  },
];

export const trustFacts = [
  { value: "5,0", label: "рейтинг в Яндексе" },
  { value: "759", label: "оценок гостей" },
  { value: "652", label: "отзыва" },
  { value: "2026", label: "Хорошее место" },
] as const;
