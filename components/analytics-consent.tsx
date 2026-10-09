"use client";

import { SiteAnchor } from "@/components/site-elements";
import { METRICA_ID } from "@/lib/analytics";
import { useEffect, useState } from "react";

const CONSENT_KEY = "vshokolade-metrica-consent";
const SETTINGS_EVENT = "open-metrica-settings";
type Choice = "accepted" | "rejected" | null;
type MetricaFunction = ((...args: unknown[]) => void) & { a?: unknown[][]; l?: number };

function loadMetrica(id: number) {
  const browser = window as Window & { ym?: MetricaFunction };
  if (!browser.ym) {
    const queue: MetricaFunction = (...args) => { (queue.a ??= []).push(args); };
    queue.l = Date.now();
    browser.ym = queue;
    const script = document.createElement("script");
    script.src = "https://mc.yandex.ru/metrika/tag.js";
    script.async = true;
    script.dataset.yandexMetrica = "";
    document.head.appendChild(script);
  }

  browser.ym(id, "init", {
    defer: true,
    clickmap: false,
    trackLinks: false,
    accurateTrackBounce: false,
    webvisor: false,
  });
  browser.ym(id, "hit", window.location.href);

  const trackSection = () => browser.ym?.(id, "hit", window.location.href);
  window.addEventListener("hashchange", trackSection);
  return () => window.removeEventListener("hashchange", trackSection);
}

export function openAnalyticsSettings() {
  window.dispatchEvent(new Event(SETTINGS_EVENT));
}

function AnalyticsConsentActive({ id }: { id: number }) {
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState<Choice>(null);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    let saved: string | null = null;
    try { saved = window.localStorage.getItem(CONSENT_KEY); } catch { /* The choice remains session-only. */ }
    setChoice(saved === "accepted" || saved === "rejected" ? saved : null);
    setPanelOpen(saved !== "accepted" && saved !== "rejected");
    setReady(true);
    const open = () => setPanelOpen(true);
    window.addEventListener(SETTINGS_EVENT, open);
    return () => window.removeEventListener(SETTINGS_EVENT, open);
  }, []);

  useEffect(() => {
    if (!ready || choice !== "accepted") return;
    return loadMetrica(id);
  }, [ready, choice, id]);

  const decide = (next: Exclude<Choice, null>) => {
    try { window.localStorage.setItem(CONSENT_KEY, next); } catch { /* The choice remains session-only. */ }
    setPanelOpen(false);
    if (choice === "accepted" && next === "rejected") {
      window.location.reload();
      return;
    }
    setChoice(next);
  };

  if (!ready || !panelOpen) return null;

  return (
    <aside className="analytics-consent" aria-label="Настройки аналитики">
      <div>
        <strong>Аналитические cookies</strong>
        <p>С вашего разрешения загрузим Яндекс Метрику. Она использует cookies и передаёт Яндексу сведения о посещении. Без разрешения счётчик не работает. <SiteAnchor href="/consent#analytics">Условия согласия</SiteAnchor> · <SiteAnchor href="/cookies">О cookies</SiteAnchor></p>
      </div>
      <div className="analytics-actions">
        <button className="button button-outline" type="button" onClick={() => decide("rejected")}>Не разрешать</button>
        <button className="button" type="button" onClick={() => decide("accepted")}>Разрешить</button>
      </div>
    </aside>
  );
}

export function AnalyticsConsent() {
  return METRICA_ID ? <AnalyticsConsentActive id={METRICA_ID} /> : null;
}
