"use client";

import { useEffect, useRef } from "react";
import { HeroScene } from "@/components/hero-scene";
import { initSiteBackground } from "@/lib/bg-engine";

/** Fixed, site-wide background (same on every page). Gap between animation loops: NEXT_PUBLIC_BG_GAP_MS (default 60000 = 1 minute). */
export function SiteBackground() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const gapMs = Number(process.env.NEXT_PUBLIC_BG_GAP_MS) || 60000;
    return initSiteBackground(ref.current, { gapMs });
  }, []);

  return (
    <div className="site-bg" ref={ref} data-stage="closing" aria-hidden="true">
      <div className="bg-scene"><HeroScene /></div>
      <div className="bg-grain" />
      <div className="bg-scrim" />
      <canvas className="bg-dust" />
      <div className="bg-cover" />
      <canvas className="bg-circuit" />
      <div className="bg-brand"><span className="brand-word">99CGS</span><small>AI Agency</small></div>
      <div className="fp-stage">
        <canvas className="fp-canvas" />
        <div className="fp-lock">
          <svg viewBox="0 0 48 48" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <g className="fp-shackle"><path d="M15 22v-6a9 9 0 0 1 18 0v6" /></g>
            <rect x="10" y="22" width="28" height="20" rx="5" fill="rgba(54,214,176,.14)" />
            <circle cx="24" cy="32" r="2.6" fill="currentColor" stroke="none" />
          </svg>
        </div>
      </div>
    </div>
  );
}