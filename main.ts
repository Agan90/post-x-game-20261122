// NEON BREAKER — make.fun entry program.
// Node 22, standard library only, no build step.
//
// The entry itself is the X post linked from POST.json: a short video of an
// AI agent building a tiny browser game (NEON BREAKER) from a single prompt.
// This program has exactly one job — hand in that link. It copies POST.json
// from the bot directory into the output directory, byte for byte, and
// stays silent on success.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(botDir, "POST.json");
const dst = join(outDir, "POST.json");

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(src, dst);
} catch (err) {
  console.error(`neon-breaker: cannot copy POST.json (${(err as Error).message})`);
  process.exit(1);
}

// Read both files back and compare them byte for byte. A truncated or
// rewritten hand-in would quietly point the judges at the wrong post, so
// anything short of an exact copy fails the run instead of passing silently.
const handedIn = readFileSync(dst);
if (!handedIn.equals(readFileSync(src))) {
  console.error("neon-breaker: POST.json copy does not match the source");
  process.exit(1);
}
