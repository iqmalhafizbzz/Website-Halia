"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Fades each page section in as the one above it nears the end of its scroll: a section shows once its top
 * crosses 88% of the viewport. Sections already on screen at load show at once, so nothing blinks; without
 * script everything is simply visible. Styles live in globals.css under [data-reveal].
 */
export function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("main > section, body > footer"));
    const fold = window.innerHeight * 0.88;
    for (const target of targets) {
      target.dataset.reveal = "";
      if (target.getBoundingClientRect().top < fold) target.dataset.shown = "";
    }
    root.dataset.revealReady = "";
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        (entry.target as HTMLElement).dataset.shown = "";
        observer.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px -12% 0px" });
    targets.filter(target => !("shown" in target.dataset)).forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
