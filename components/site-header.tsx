import { SiteAnchor } from "@/components/site-elements";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="site-header orbit-header">
      <div className="site-container header-inner">
        <SiteAnchor className="brand-mark" href="/" aria-label="ВШоколаде, на главную">
          <span>
            <b>ВШоколаде</b>
            <small>клиника в Лобне</small>
          </span>
        </SiteAnchor>

        <div className="header-actions">
          <SiteAnchor className="header-phone" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </SiteAnchor>
          <SiteAnchor className="sections-link" href="#navigation">Все разделы</SiteAnchor>
          <SiteAnchor className="button button-compact" href={BOOKING_URL} target="_blank" rel="noreferrer">
            Онлайн-запись
          </SiteAnchor>
        </div>
      </div>

    </header>
  );
}
