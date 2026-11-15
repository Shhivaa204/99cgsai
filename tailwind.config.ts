import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], theme: { extend: { colors: { ink: "#0B1020", panel: "#111827", card: "#151F30", mint: "#36D6B0", sky: "#55B9E8", muted: "#AAB5C5", line: "#273448" } } }, plugins: [] };
export default config;