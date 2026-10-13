import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";

await rm("docs", { recursive: true, force: true });
await mkdir("docs");
for (const entry of await readdir("out")) {
  await cp(`out/${entry}`, `docs/${entry}`, { recursive: true });
}
await writeFile("docs/.nojekyll", "");
for (const entry of await readdir("out")) {
  await rm(entry, { recursive: true, force: true });
  await cp(`out/${entry}`, entry, { recursive: true, force: true });
}
await writeFile(".nojekyll", "");
console.log("GitHub Pages ready: main / (and /docs copy)");
