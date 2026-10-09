"use client";

import { SiteAnchor } from "@/components/site-elements";


import { useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { MAPS_URL } from "@/lib/content";

// Exact entrance coordinates from the clinic's Yandex Maps organization card.
const DESTINATION = "56.004411,37.448269";
const PLACE_WIDGET = "https://yandex.ru/map-widget/v1/?oid=198231269692&ol=biz&z=16";
type TravelMode = "auto" | "mt" | "pd";

export function YandexRouteWidget() {
  const [mapConsent, setMapConsent] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const [geoConsent, setGeoConsent] = useState(false);
  const [origin, setOrigin] = useState<string | null>(null);
  const [mode, setMode] = useState<TravelMode>("auto");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const requestId = useRef(0);
  const routeParams = origin ? new URLSearchParams({ rtext: `${origin}~${DESTINATION}`, rtt: mode }) : null;
  const routeUrl = routeParams ? `https://yandex.ru/maps/?${routeParams}` : `https://yandex.ru/maps/?rtext=~${DESTINATION}&rtt=${mode}`;

  function revokeGeo() {
    requestId.current += 1;
    setGeoConsent(false); setOrigin(null); setPending(false); setError("");
  }

  function requestRoute() {
    if (!allowed || !geoConsent || pending) return;
    setError("");
    if (!navigator.geolocation) {
      setError("Браузер не поддерживает геолокацию. Откройте Яндекс Карты и укажите отправную точку вручную.");
      return;
    }
    setPending(true);
    const id = ++requestId.current;
    navigator.geolocation.getCurrentPosition(
      position => {
        if (id !== requestId.current) return;
        setOrigin(`${position.coords.latitude.toFixed(5)},${position.coords.longitude.toFixed(5)}`);
        setPending(false);
      },
      geoError => {
        if (id !== requestId.current) return;
        setPending(false);
        setError(geoError.code === 1
          ? "Доступ к геолокации не разрешен. Можно изменить разрешение в браузере или задать начало маршрута в Яндекс Картах вручную."
          : "Не удалось определить местоположение. Попробуйте еще раз или укажите начало маршрута в Яндекс Картах вручную.");
      },
      { enableHighAccuracy: false, timeout: 12000, maximumAge: 60000 },
    );
  }

  return (
    <section className="route-section site-container section-pad" id="route">
      <div className="section-heading"><h2>Как добраться</h2><p>Лобня, Лобненский бульвар, 12, первый этаж.</p></div>
      {!allowed ? <div className="widget-consent map-consent">
        <MapPin size={32} aria-hidden="true" />
        <h3>Карта и маршрут до клиники</h3>
        <p>Чтобы показать карту, нужно загрузить виджет Яндекса. Он получит IP-адрес и сведения о браузере и может использовать cookies. Геолокация на этом шаге не запрашивается.</p>
        <label className="consent-checkbox"><input type="checkbox" checked={mapConsent} onChange={e => setMapConsent(e.target.checked)} /><span>Даю согласие на обработку технических данных для загрузки карты Яндекса.</span></label>
        <SiteAnchor className="consent-details" href="/consent#map" target="_blank" rel="noreferrer">Условия согласия и cookies</SiteAnchor>
        <button className="button" type="button" disabled={!mapConsent} onClick={() => setAllowed(true)}>Открыть карту</button>
      </div> : <>
        <div className="route-layout">
          <div className="route-controls">
            <h3>Маршрут от вас</h3>
            <p>Определим местоположение один раз и передадим координаты Яндексу для построения маршрута. На сервере сайта координаты не сохраняются.</p>
            <fieldset className="route-modes"><legend>Как поедете?</legend>
              {([{ value: "auto", label: "На машине" }, { value: "mt", label: "Транспорт" }, { value: "pd", label: "Пешком" }] as const).map(item => <label key={item.value}><input type="radio" name="route-mode" checked={mode === item.value} onChange={() => setMode(item.value)} value={item.value} /><span>{item.label}</span></label>)}
            </fieldset>
            <label className="consent-checkbox"><input type="checkbox" checked={geoConsent} onChange={e => e.target.checked ? setGeoConsent(true) : revokeGeo()} /><span>Даю отдельное согласие определить моё местоположение и передать координаты Яндексу только для маршрута.</span></label>
            <SiteAnchor className="consent-details" href="/consent#route" target="_blank" rel="noreferrer">Условия согласия на геолокацию</SiteAnchor>
            <button className="button" type="button" disabled={!geoConsent || pending} onClick={requestRoute}>{pending ? "Определяем местоположение…" : origin ? "Обновить маршрут" : "Построить маршрут от меня"}</button>
            <div aria-live="polite" className="route-status">{pending ? "Разрешите доступ к геолокации в запросе браузера." : error || (origin ? "Координаты переданы. Яндекс строит маршрут на карте." : "")}</div>
            <SiteAnchor className="text-link" href={routeUrl} target="_blank" rel="noreferrer">{origin ? "Открыть маршрут в Яндекс Картах" : "Задать начало маршрута в Яндексе"}</SiteAnchor>
          </div>
          <iframe className="route-map" key={origin ? routeParams?.toString() : "place"} src={routeParams ? `https://yandex.ru/map-widget/v1/?${routeParams}` : PLACE_WIDGET} title={origin ? "Маршрут до клиники ВШоколаде в Яндекс Картах" : "Клиника ВШоколаде на Яндекс Картах"} referrerPolicy="no-referrer" />
        </div>
        <button className="consent-reset" type="button" onClick={() => { revokeGeo(); setAllowed(false); setMapConsent(false); }}>Закрыть карту и отозвать разрешения</button>
      </>}
    </section>
  );
}
