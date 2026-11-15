"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "@/components/icons";
const services = [{slug:"ai-content",name:"AI Content"},{slug:"seo",name:"SEO"},{slug:"automation",name:"Automation"},{slug:"leads",name:"Lead Generation"}];
export function ServicesMegaMenu(){
  const [open,setOpen]=useState(false);
  return (
    <div className="mega" onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
      <Link href="/services">Services</Link>
      {open && <div className="mega-panel">{services.map(s=><Link key={s.slug} href={`/services/${s.slug}`}>{s.name} <ArrowUpRight size={12}/></Link>)}</div>}
    </div>
  );
}