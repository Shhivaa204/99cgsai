"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setError("");
    try {
      const res = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username, password }) });
      if (!res.ok) { const j = await res.json().catch(() => ({})); setError(j.error || "Login failed."); setBusy(false); return; }
      router.push("/admin"); router.refresh();
    } catch { setError("Network problem."); setBusy(false); }
  }
  return (
    <main className="admin-login"><div className="admin-login-card"><Link href="/" className="brand"><span className="brand-word">99CGS</span><small>Admin Portal</small></Link><h1>Welcome back.</h1><p>Sign in to manage your 99CGS website and enquiries.</p><form onSubmit={submit}><label>Username<input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} /></label><label>Password<input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} /></label>{error && <div>{error}</div>}<button disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button></form></div></main>
  );
}