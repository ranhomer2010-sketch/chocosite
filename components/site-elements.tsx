import Image, { type ImageProps } from "next/image";
import type { ComponentProps } from "react";
import { sitePath } from "@/lib/paths";

export function SiteAnchor({ href, ...props }: ComponentProps<"a">) {
  return <a {...props} href={href ? sitePath(href) : href} />;
}

export function SiteImage({ src, ...props }: ImageProps) {
  return <Image {...props} src={typeof src === "string" ? sitePath(src) : src} />;
}

export function SiteImg({ src, ...props }: ComponentProps<"img">) {
  return <img {...props} src={typeof src === "string" ? sitePath(src) : src} />;
}
