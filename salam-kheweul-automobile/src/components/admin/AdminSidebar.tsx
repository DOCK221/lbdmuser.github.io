"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/Logo";

const links = [
  { href: "/admin", label: "Vue d’ensemble" },
  { href: "/admin/vehicules", label: "Véhicules" },
  { href: "/admin/rendez-vous", label: "Rendez-vous" },
  { href: "/admin/commandes", label: "Commandes" },
];

export function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside className="border-b border-white/5 bg-ink-soft lg:min-h-screen lg:w-64 lg:border-b-0 lg:border-r">
      <div className="flex items-center justify-between px-5 py-5">
        <Link href="/admin">
          <Logo compact />
        </Link>
        <Link href="/" className="text-[10px] uppercase tracking-[0.16em] text-mist">
          Site
        </Link>
      </div>
      <nav className="flex gap-4 overflow-x-auto px-5 pb-4 lg:flex-col lg:gap-1 lg:pb-8">
        {links.map((link) => {
          const active =
            link.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap py-2 text-[11px] uppercase tracking-[0.18em] ${
                active ? "text-gold" : "text-mist hover:text-ivory"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
