const rawMetricaId = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID ?? "";

export const METRICA_ID = /^\d+$/.test(rawMetricaId) && Number.isSafeInteger(Number(rawMetricaId))
  ? Number(rawMetricaId)
  : null;
