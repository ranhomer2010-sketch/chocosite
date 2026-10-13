import { sitePath } from "@/lib/paths";
import type { Metadata } from "next";
import { FloatingBooking } from "@/components/shared";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { OrbitNavigation } from "@/components/orbit-navigation";
import { ScrollReveals } from "@/components/scroll-reveals";
import { NavigationHint } from "@/components/navigation-hint";
import { AnalyticsConsent } from "@/components/analytics-consent";
import { METRICA_ID } from "@/lib/analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ВШоколаде | Массаж и косметология в Лобне",
    template: "%s | ВШоколаде",
  },
  description:
    "Массаж, SPA-ритуалы, эстетическая и инъекционная косметология в Лобне. Онлайн-запись через YCLIENTS.",
  icons: {
    icon: sitePath("/favicon.svg"),
    shortcut: sitePath("/favicon.svg"),
  },
};

const contentSecurityPolicy = METRICA_ID
  ? "default-src 'self'; base-uri 'self'; object-src 'none'; form-action 'none'; script-src 'self' 'unsafe-inline' https://mc.yandex.ru https://mc.yandex.com https://yastatic.net; script-src-attr 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://mc.yandex.ru https://mc.yandex.com; font-src 'self'; connect-src 'self' https://mc.yandex.ru https://mc.yandex.com; frame-src https://yandex.ru https://www.yandex.ru; worker-src 'none'; upgrade-insecure-requests"
  : "default-src 'self'; base-uri 'self'; object-src 'none'; form-action 'none'; script-src 'self' 'unsafe-inline'; script-src-attr 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-src https://yandex.ru https://www.yandex.ru; worker-src 'none'; upgrade-insecure-requests";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta httpEquiv="Content-Security-Policy" content={contentSecurityPolicy} />
        <meta name="referrer" content="no-referrer" />
      </head>
      <body>
        <SiteHeader />
        <main><OrbitNavigation /><div id="content" className="page-content-anchor">{children}</div></main>
        <ScrollReveals />
        <NavigationHint />
        <AnalyticsConsent />
        <SiteFooter />
        <FloatingBooking />
      </body>
    </html>
  );
}
