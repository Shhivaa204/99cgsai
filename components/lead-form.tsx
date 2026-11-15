"use client";
import {FormEvent,useState} from "react";
import {ArrowUpRight} from "@/components/icons";
export function LeadForm({defaultService}:{defaultService?:string}){
  const[busy,setBusy]=useState(false);
  const[message,setMessage]=useState("");
  async function submit(e:FormEvent){
    e.preventDefault();
    setBusy(true); setMessage("");
    const fd = new FormData(e.target as HTMLFormElement);
    const body = Object.fromEntries(fd.entries());
    const r = await fetch("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
    setBusy(false);
    setMessage(r.ok ? "Thank you. We'll be in touch." : "Something went wrong. Please try again.");
  }
  return (
    <form onSubmit={submit} className="lead-form">
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="business" placeholder="Business" />
      <input name="phone" placeholder="Phone" />
      <textarea name="message" placeholder="What do you want to grow?" />
      <button disabled={busy}>{busy ? "Sending…" : "Get a Growth Strategy"} <ArrowUpRight size={15}/></button>
      {message && <p>{message}</p>}
    </form>
  );
}