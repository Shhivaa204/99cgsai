import type {Metadata} from "next";
import "./globals.css";
export const metadata:Metadata={title:"99CGS | AI-Powered Content & Growth Agency",description:"Create smarter content. Reach the right audience. Generate qualified leads."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}