export function cn(...v:(string|false|null|undefined)[]){return v.filter(Boolean).join(" ")}
export function safeText(v:unknown,max=5000){return typeof v==="string"?v.trim().slice(0,max):""}
export function getSiteUrl(){return (process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000").replace(/\/$/,"")}