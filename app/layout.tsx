import type {Metadata} from "next";
import "./globals.css";
import {SiteHeader} from "@/components/site-header";
import {SiteFooter} from "@/components/site-footer";
import {AnimatedBg} from "@/components/animated-bg";
export const metadata:Metadata={title:"99CGS | AI-Powered Content & Growth Agency",description:"Create smarter content. Reach the right audience. Generate qualified leads."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><AnimatedBg/><SiteHeader/>{children}<SiteFooter/></body></html>}