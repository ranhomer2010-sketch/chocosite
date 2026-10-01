"use client";

import { SiteAnchor } from "@/components/site-elements";


import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { MAPS_URL } from "@/lib/content";

export function ReviewsConsent() {
  const [allowed, setAllowed] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <div className="consented-widget">
      {allowed ? <>
        <div className="yandex-widget-shell">
          <iframe className="yandex-widget-frame" src="https://yandex.ru/maps-reviews-widget/198231269692?comments" title="Отзывы о клинике ВШоколаде на Яндекс Картах" referrerPolicy="no-referrer" />
          <SiteAnchor className="yandex-widget-link" href={MAPS_URL} target="_blank" rel="noreferrer">ВШоколаде на Яндекс Картах</SiteAnchor>
        </div>
        <button className="consent-reset" type="button" onClick={() => { setAllowed(false); setChecked(false); }}>Скрыть отзывы и отозвать разрешение</button>
      </> : <div className="widget-consent reviews-consent">
        <MessageCircle size={32} aria-hidden="true" />
        <h3>Отзывы из Яндекс Карт</h3>
        <p>Виджет загрузится только с вашего разрешения. Яндекс получит IP-адрес и сведения о браузере и может использовать cookies.</p>
        <label className="consent-checkbox"><input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} /><span>Разрешаю загрузку отзывов и передачу технических данных Яндексу.</span></label>
        <SiteAnchor className="consent-details" href="/privacy#yandex">Подробнее об обработке данных</SiteAnchor>
        <button className="button" type="button" disabled={!checked} onClick={() => setAllowed(true)}>Показать отзывы</button>
        <noscript>Для загрузки виджета включите JavaScript. Отзывы также доступны в карточке клиники на Яндекс Картах.</noscript>
      </div>}
    </div>
  );
}
