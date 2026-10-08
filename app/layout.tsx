import { sitePath } from "@/lib/paths";
import type { Metadata } from "next";
import { FloatingBooking } from "@/components/shared";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { OrbitNavigation } from "@/components/orbit-navigation";
import { ScrollReveals } from "@/components/scroll-reveals";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; base-uri 'self'; object-src 'none'; form-action 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-src https://yandex.ru https://www.yandex.ru" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body>
        <SiteHeader />
        <main><OrbitNavigation /><div id="content" className="page-content-anchor">{children}</div></main>
        <ScrollReveals />
        <SiteFooter />
        <FloatingBooking />
      </body>
    </html>
  );
}
