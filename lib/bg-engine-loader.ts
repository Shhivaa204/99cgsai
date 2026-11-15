// Full bg-engine is gzipped and base64-encoded below.
// This file is a placeholder; the full compressed source is in bg-engine.b64.gz
export function initSiteBackground(root: HTMLElement, opts: { gapMs?: number } = {}) {
  console.warn('Full engine not yet decompressed. Use the zip for the complete version.');
  root.dataset.stage = 'scene';
  return () => {};
}
