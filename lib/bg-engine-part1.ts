/**
 * Site background engine - PART 1 of 3
 * Concatenate with part2 and part3 to get the full engine.
 */

// PART 1 START
/**
 * Site background engine (plain TypeScript, no framework).
 *
 * One cycle (behind the page content, never blocking it):
 *   1. only the name "99CGS / AI Agency"
 *   2. fingerprint appears, scans with holographic ridges and registers (padlock opens)
 *   3. the name again, inside a microchip outline
 *   4. chip power runs out along circuit traces (forward, vertically, horizontally), spreading across
 *      the screen and revealing the painted scene
 * The cycle repeats forever: `gapMs` (default 1 minute) after the scene is revealed, everything starts
 * again with a new, randomly generated fingerprint and circuit board.
 *
 * Lightweight by design: canvases only run while needed, the dust loop pauses when the tab is hidden,
 * and "lite" mode (phones, low-memory / low-core devices, data saver) uses fewer particles, no blur and
 * a lower frame rate.
 */
type Stage = "closing" | "brand1" | "scan" | "unlock" | "brand2" | "circuit" | "scene";
type Pt = { x: number; y: number };

const BRAND1_MS = 1900;
const SCAN_START = 300;
const SCAN_MS = 2300;
const UNLOCK_MS = 1000;
const BRAND2_MS = 1500;
const CIRCUIT_MS = 3000;
const CLOSE_MS = 900;

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// PART 1 continues in next file
export const PART1 = true;
