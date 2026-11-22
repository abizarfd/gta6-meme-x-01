// Entry program for the make.fun gta6-meme-x-01 bounty.
//
// The entry itself is the X post: the house reads the post (its first
// picture, then its text) straight from X and hands it to the judge.
// This program does nothing clever — it just hands POST.json, which
// holds the post's address, over to the output folder so the grader
// can find it.
//
// Run it locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(repoDir, "POST.json");

if (!existsSync(source)) {
  console.error(`POST.json not found in ${repoDir} — nothing to hand in.`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "POST.json"));
console.log(`POST.json copied to ${outputDir}`);
