import { SiteAnchor } from "@/components/site-elements";
import { AnalyticsSettingsLink } from "@/components/analytics-settings-link";
import {
  BOOKING_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  TELEGRAM_CHANNEL_URL,
  TELEGRAM_CHAT_URL,
  COMPANY_NAME,
  COMPANY_INN,
  COMPANY_OGRN,
  SOLE_TRADER_NAME,
  SOLE_TRADER_INN,
  SOLE_TRADER_OGRNIP,
  navigation,
} from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <SiteAnchor className="brand-mark footer-logo" href="/">
            <span className="brand-gem" aria-hidden="true" />
            <span>
              <b>ВШоколаде</b>
              <small>массаж и косметология</small>
            </span>
          </SiteAnchor>
          <p>Забота о теле и лице в спокойном пространстве в центре Лобни.</p>
          <SiteAnchor className="button button-light" href={BOOKING_URL} target="_blank" rel="noreferrer">
            Онлайн-запись
          </SiteAnchor>
        </div>

        <div>
          <h2 className="footer-title">Разделы</h2>
          <div className="footer-links">
            {navigation.map((item) => (
              <SiteAnchor key={item.href} href={item.href}>
                {item.label}
              </SiteAnchor>
            ))}
            <SiteAnchor href="/about#content">О клинике</SiteAnchor>
          </div>
        </div>

        <div>
          <h2 className="footer-title">Контакты</h2>
          <div className="footer-links footer-contact-links">
            <SiteAnchor href={PHONE_HREF}>{PHONE_DISPLAY}</SiteAnchor>
            <SiteAnchor href={MAPS_URL} target="_blank" rel="noreferrer">
              Лобненский бульвар, 12
            </SiteAnchor>
            <SiteAnchor href={TELEGRAM_CHANNEL_URL} target="_blank" rel="noreferrer">Канал в Telegram</SiteAnchor>
            <SiteAnchor href={TELEGRAM_CHAT_URL} target="_blank" rel="noreferrer">Написать в Telegram</SiteAnchor>
          </div>
        </div>
      </div>
      <div className="site-container footer-legal" aria-label="Реквизиты исполнителей">
        <p><strong>{COMPANY_NAME}</strong> · ИНН {COMPANY_INN} · ОГРН {COMPANY_OGRN}<br /><span>Медицинская деятельность по лицензии № Л041-01162-50/04066667.</span></p>
        <p><strong>{SOLE_TRADER_NAME}</strong> · ИНН {SOLE_TRADER_INN} · ОГРНИП {SOLE_TRADER_OGRNIP}<br /><span>Исполнитель услуги указывается при записи и в договоре.</span></p>
      </div>
      <div className="site-container footer-bottom">
        <span>© {new Date().getFullYear()} ВШоколаде</span>
        <div className="footer-policy-links">
          <SiteAnchor href="/privacy">Политика обработки данных</SiteAnchor>
          <SiteAnchor href="/consent">Согласия</SiteAnchor>
          <SiteAnchor href="/cookies">Cookies</SiteAnchor>
          <AnalyticsSettingsLink />
        </div>
        <span>Имеются противопоказания. Необходима консультация специалиста.</span>
      </div>
    </footer>
  );
}
