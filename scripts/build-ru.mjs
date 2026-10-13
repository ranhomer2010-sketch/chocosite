import { spawnSync } from "node:child_process";

const required = [
  "NEXT_PUBLIC_HOSTING_PROVIDER",
  "NEXT_PUBLIC_HOSTING_REGION",
  "NEXT_PUBLIC_HOSTING_LOG_RETENTION",
];
const missing = required.filter((name) => !process.env[name]?.trim());
if (missing.length) {
  console.error(`For the RU deployment build, set verified hosting details: ${missing.join(", ")}`);
  process.exit(1);
}

const env = { ...process.env, NEXT_PUBLIC_BASE_PATH: "" };
for (const args of [["scripts/clean-export.mjs"], ["node_modules/next/dist/bin/next", "build", "--webpack"], ["scripts/audit-static.mjs"]]) {
  const run = spawnSync(process.execPath, args, { env, stdio: "inherit" });
  if (run.error) throw run.error;
  if (run.status !== 0) process.exit(run.status ?? 1);
}

console.log("RU-hosting static export ready in out/. Review the policy and server configuration before uploading.");
