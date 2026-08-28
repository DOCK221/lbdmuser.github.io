import { MobileDock } from "@/components/layout/MobileDock";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pb-20 lg:pb-0">{children}</main>
      <SiteFooter />
      <WhatsAppButton />
      <MobileDock />
    </>
  );
}
