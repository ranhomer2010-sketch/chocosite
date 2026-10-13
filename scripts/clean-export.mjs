import { rm } from "node:fs/promises";

// Ensure stale Next build IDs and unused chunks are not copied into an export.
for (const path of ["out", ".next"]) {
  await rm(path, { recursive: true, force: true });
}
