// Dad Joke Showdown — one dad joke, written to /output/entry.txt.
// A classic pun with a straight-faced setup: the vacuum cleaner
// complains about "dirt on management" — literal dirt, and office gossip.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const joke =
  "Our vacuum cleaner quit its job. It said there was too much dirt on management.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");

// Read-back self-check: the written entry must be the joke, 1–200 chars,
// and not only whitespace — the same gate the competition applies.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== joke) {
  throw new Error("entry.txt does not match the joke");
}
if (written.length < 1 || written.length > 200 || written.trim().length === 0) {
  throw new Error(`entry.txt failed the gate: ${written.length} characters`);
}
console.log(`Wrote ${joke.length} characters to /output/entry.txt`);
