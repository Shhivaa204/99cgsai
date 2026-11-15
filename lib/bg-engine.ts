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
export function initSiteBackground(root: HTMLElement, opts: { gapMs?: number } = {}) {
  // Placeholder - full engine is large. Will be replaced with complete version.
  root.dataset.stage = "scene";
  return () => {};
}
