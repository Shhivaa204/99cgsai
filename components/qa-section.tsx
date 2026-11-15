"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Search } from "@/components/icons";
export type QAItem = { q: string; a: string; category: string };
export function QASection({ items, compact = false }: { items: QAItem[]; compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [open, setOpen] = useState<number | null>(0);
  const categories = ["All", ...Array.from(new Set(items.map((x) => x.category)))];
  const filtered = useMemo(() => items.filter((x) => (category === "All" || x.category === category) && (x.q.toLowerCase().includes(query.toLowerCase()) || x.a.toLowerCase().includes(query.toLowerCase()))), [items, query, category]);
  return (
    <section className="qa-section">
      <div className="qa-controls">
        <div className="qa-search"><Search size={16} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search questions" /></div>
        <div className="qa-cats">{categories.map((c) => <button key={c} className={c === category ? "active" : ""} onClick={() => setCategory(c)}>{c}</button>)}</div>
      </div>
      <div className="qa-list">{filtered.map((item, i) => (
        <div key={i} className={`qa-item ${open === i ? "open" : ""}`}>
          <button onClick={() => setOpen(open === i ? null : i)}>{item.q} <ChevronDown size={16} /></button>
          {open === i && <p>{item.a}</p>}
        </div>
      ))}</div>
      {!compact && <Link href="/contact" className="button">Still have a question? <ArrowUpRight size={15} /></Link>}
    </section>
  );
}