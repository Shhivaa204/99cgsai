import { site } from "@/lib/site";
export async function getSettings(): Promise<Record<string, string>> {
  return {};
}
export type ContactSettings = { company: string; phone: string; email: string; whatsapp: string; website: string; address: string };
export async function getContactSettings(): Promise<ContactSettings> {
  return { company: site.name, phone: site.phone, email: site.email, whatsapp: site.whatsapp, website: "", address: site.location };
}