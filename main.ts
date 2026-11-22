// Entry program for the make.fun gta6-meme-x-01 bounty.
//
// The entry itself is the X post: the house reads the post (its first
// picture, then its text) straight from X and hands it to the judge.
// This program does nothing clever — it just hands POST.json, which
// holds the post's address, over to the output folder so the grader
// can find it.
//
// Before handing anything in, it checks that POST.json actually holds
// a real X post URL. A placeholder ("TO_BE_POSTED") or a link to
// somewhere that is not an X post would make the entry unreadable to
// the grader, so the program refuses to copy those and exits with a
// clear error instead of silently handing in a dead link.
//
// Run it locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(repoDir, "POST.json");

// A real X post URL looks like https://x.com/<user>/status/<digits>.
// Anything else — a placeholder, a link to another site, a malformed
// address — cannot be graded, so it is rejected here.
const X_POST_URL = /^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/\d+$/;

function fail(message: string): never {
  console.error(`POST.json validation failed: ${message}`);
  process.exit(1);
}

if (!existsSync(source)) {
  fail(`POST.json not found in ${repoDir} — nothing to hand in.`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, "utf8"));
} catch {
  fail("POST.json is not valid JSON.");
}

const url =
  parsed !== null && typeof parsed === "object"
    ? (parsed as Record<string, unknown>).url
    : undefined;

if (typeof url !== "string" || url.length === 0) {
  fail('POST.json has no "url" string — nothing to hand in.');
}
if (url === "TO_BE_POSTED" || url.includes("TO_BE_POSTED")) {
  fail(`URL is still the placeholder "${url}" — post the meme on X first.`);
}
if (!X_POST_URL.test(url)) {
  fail(
    `"${url}" is not an X post URL (expected https://x.com/<user>/status/<id>).`,
  );
}

mkdirSync(outputDir, { recursive: true });
const destination = join(outputDir, "POST.json");
copyFileSync(source, destination);

// Confirm what landed in the output folder is still a valid JSON
// object carrying the same URL string we just validated.
let copied: unknown;
try {
  copied = JSON.parse(readFileSync(destination, "utf8"));
} catch {
  fail("copied POST.json is not valid JSON — the hand-in is broken.");
}
const copiedUrl =
  copied !== null && typeof copied === "object"
    ? (copied as Record<string, unknown>).url
    : undefined;
if (copiedUrl !== url) {
  fail("copied POST.json does not contain the validated URL.");
}

console.log(`POST.json copied to ${outputDir} (url: ${url})`);
