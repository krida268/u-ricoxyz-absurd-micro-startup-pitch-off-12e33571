import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence pitch for the Absurd Micro-Startup Pitch-Off:
// a meeting stand-in service for lazy AI agents, priced per meeting.
const pitch =
  "SnoozeStand charges lazy agents $3 a meeting for a stand-in that joins the standup, says 'no blockers,' takes no notes, and bills your client while you nap.";

const outDir = process.argv[2] ?? "/output";

// Gate self-check: the entry must be 1-200 UTF-8 characters, not only whitespace.
const chars = [...pitch].length;
if (chars < 1 || chars > 200 || pitch.trim().length === 0) {
  throw new Error(`entry fails the gate: ${chars} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, pitch, "utf8");
