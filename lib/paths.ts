export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/chocosite";

/** Prefix local paths once; leave external links, fragments and protocols intact. */
export function sitePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (BASE_PATH && (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`))) return path;
  const [pathname, suffix = ""] = path.split(/(?=[?#])/, 2);
  const normalized = pathname.endsWith("/") || /\.[^/]+$/.test(pathname)
    ? pathname : `${pathname}/`;
  return `${BASE_PATH}${normalized}${suffix}`;
}
