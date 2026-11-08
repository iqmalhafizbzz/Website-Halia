"use client";

import { usePathname } from "next/navigation";
import { nav } from "@/content/site";

/** The nav item for the current page, matched on its slug so it works whatever path the site is served from. */
export function useCurrentPage() {
  const pathname = usePathname() ?? "/";
  const slug = pathname.split("/").filter(Boolean).pop() ?? "";
  if (slug === "privacy") return "privacy";
  return nav.find(item => item.href.replaceAll("/", "") === slug)?.value ?? (slug === "" ? "home" : undefined);
}
