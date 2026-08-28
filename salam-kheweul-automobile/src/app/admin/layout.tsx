import { AdminSidebar } from "@/components/admin/AdminSidebar";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Administration",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-ink lg:flex-row">
      <AdminSidebar />
      <div className="flex-1 px-5 py-8 lg:px-10">
        <p className="mb-8 text-[10px] uppercase tracking-[0.2em] text-gold/80">
          Prototype dashboard — authentification et base de données à connecter
        </p>
        {children}
      </div>
    </div>
  );
}
