"use client";

import { useEffect, useState } from "react";
import { FeatherMark } from "@/components/brand/Logo";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = window.setTimeout(() => setVisible(false), 2200);
    return () => window.clearTimeout(hide);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="page-loader fixed inset-0 z-[80] flex items-center justify-center bg-ivory"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6 text-ink">
        <FeatherMark className="h-16 w-10" />
        <p className="font-serif text-sm tracking-[0.42em]">NID DE PLUMES</p>
      </div>
    </div>
  );
}
