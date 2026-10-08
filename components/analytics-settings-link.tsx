"use client";

import { openAnalyticsSettings } from "@/components/analytics-consent";
import { METRICA_ID } from "@/lib/analytics";

export function AnalyticsSettingsLink() {
  if (!METRICA_ID) return null;
  return <button className="footer-settings-link" type="button" onClick={openAnalyticsSettings}>Настройки аналитики</button>;
}
