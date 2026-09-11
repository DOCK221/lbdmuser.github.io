"use client";

import { useSyncExternalStore } from "react";

const cache = new Map<string, { raw: string | null; value: unknown }>();

function subscribe() {
  return () => undefined;
}

function readJson(key: string): unknown {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(key);
  const previous = cache.get(key);
  if (previous && previous.raw === raw) return previous.value;
  const value = raw ? JSON.parse(raw) : null;
  cache.set(key, { raw, value });
  return value;
}

export function useSessionJson<T>(key: string): T | null {
  return useSyncExternalStore(
    subscribe,
    () => readJson(key) as T | null,
    () => null,
  );
}
