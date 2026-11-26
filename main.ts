// Two-Sentence Horror entry for make.fun's "Two-Sentence Horror".
// Writes one horror story of exactly two sentences to entry.txt inside
// the output directory. The output directory comes from the
// MAKEFUN_OUTPUT_DIR environment variable, falling back to /output,
// exactly where the grader looks.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The story: a voice that repeats the narrator one second early reads
// at first as an unsettling mimic. The second sentence turns it: the
// voice is not repeating at all, but leading — the narrator is the
// echo, and whatever it says next, he will say too. Nothing is shown
// or explained; the reader fills in what it will make him say.
// Tightened in revision: present tense for immediacy, "in the wall"
// over "inside the wall", and a contraction in the turn so the voice
// of the telling stays plain and cold.
const STORY =
  "For three weeks the voice in the wall has repeated everything I say one second before I say it. This morning it said something I haven't thought of yet.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  // Clear only the contents of the output dir, never the dir itself.
  for (const name of readdirSync(outDir)) {
    rmSync(join(outDir, name), { recursive: true, force: true });
  }

  writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
}

main();
