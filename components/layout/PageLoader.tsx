"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FeatherMark } from "@/components/brand/Logo";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const hide = window.setTimeout(
      () => setVisible(false),
      reduce ? 200 : 2100,
    );
    const unlock = window.setTimeout(
      () => {
        document.body.style.overflow = previous;
      },
      reduce ? 200 : 2600,
    );
    return () => {
      window.clearTimeout(hide);
      window.clearTimeout(unlock);
      document.body.style.overflow = previous;
    };
  }, [reduce]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ivory"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: reduce ? 0 : 1.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6 text-ink">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <FeatherMark className="h-16 w-10" />
        </motion.div>
        <motion.p
          className="font-serif text-sm tracking-[0.42em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 1 }}
        >
          NID DE PLUMES
        </motion.p>
      </div>
    </motion.div>
  );
}
