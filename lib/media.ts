import type { Media } from "@/payload-types";

export function mediaURL(
  value: Media | number | null | undefined,
  fallback: string,
): string {
  if (!value || typeof value === "number") {
    return fallback;
  }

  return value.url || fallback;
}
