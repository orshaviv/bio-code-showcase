import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function safeExternalUrl(url?: string) {
  if (!url) return "#"
  try {
    const base = typeof window !== "undefined" ? window.location.origin : "http://localhost"
    const u = new URL(url, base)
    return u.protocol === "http:" || u.protocol === "https:" ? u.toString() : "#"
  } catch {
    return "#"
  }
}
