import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const root = "out";
const htmlFiles = [];
const cssFiles = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.name.endsWith(".html")) htmlFiles.push(path);
    else if (entry.name.endsWith(".css")) cssFiles.push(path);
  }
}

await walk(root);
if (!htmlFiles.length) throw new Error("No exported HTML files to audit");

const violations = [];
for (const path of htmlFiles) {
  const html = await readFile(path, "utf8");
  // Anchors to YCLIENTS, Telegram and Yandex are intentional user-initiated links.
  // Resource tags must stay local; optional Yandex iframes are client-rendered only after consent.
  for (const match of html.matchAll(/<(script|iframe|img|link|source|video|audio|embed)\b[^>]*>/gi)) {
    const tag = match[0];
    const kind = match[1].toLowerCase();
    if (kind === "link" && !/\brel=["'](?:stylesheet|preload|modulepreload|prefetch|preconnect|dns-prefetch)["']/i.test(tag)) continue;
    for (const attribute of tag.matchAll(/\b(?:src|href|poster|srcset)=["']([^"']+)["']/gi)) {
      if (/(?:^|[\s,])(?:https?:)?\/\//i.test(attribute[1])) {
        violations.push(`${path}: external ${kind} resource ${attribute[1]}`);
      }
    }
  }
  if (/<iframe\b/i.test(html)) violations.push(`${path}: iframe rendered before consent`);
  if (!/http-equiv=["']Content-Security-Policy["']/i.test(html)) violations.push(`${path}: CSP meta missing`);
}
for (const path of cssFiles) {
  const css = await readFile(path, "utf8");
  for (const match of css.matchAll(/(?:@import\s+(?:url\()?\s*|url\(\s*)["']?((?:https?:)?\/\/[^\s)'";]+)/gi)) {
    violations.push(`${path}: external CSS resource ${match[1]}`);
  }
}

if (violations.length) {
  console.error(violations.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Static audit passed: ${htmlFiles.length} HTML pages and ${cssFiles.length} CSS files, no eager third-party resources or iframes.`);
}
