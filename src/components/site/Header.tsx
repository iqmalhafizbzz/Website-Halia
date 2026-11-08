"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { bookCall, nav, site, whatsapp } from "@/content/site";
import { Sheet } from "./Sheet";
import { useCurrentPage } from "./useCurrentPage";
import s from "./site.module.css";

const links = nav.filter(item => item.value !== "home");

/** Whatever sits under the middle of the bar decides its tone: anything marked data-tone="dark" turns the type white. */
function useToneUnderBar(bar: React.RefObject<HTMLElement | null>) {
  const [tone, setTone] = useState<"light" | "dark">("light");
  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      const header = bar.current;
      if (!header) return;
      const y = header.offsetHeight / 2;
      const under = document.elementsFromPoint(window.innerWidth / 2, y).find(element => !header.contains(element));
      setTone(under?.closest("[data-tone='dark']") ? "dark" : "light");
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(read); };
    read();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, [bar]);
  return tone;
}

export function Header() {
  const current = useCurrentPage();
  const [open, setOpen] = useState(false);
  const bar = useRef<HTMLElement>(null);
  const tone = useToneUnderBar(bar);
  const close = useCallback(() => setOpen(false), []);

  const linkProps = (item: (typeof links)[number]) => ({ href: item.href, "aria-current": item.value === current ? ("page" as const) : undefined });

  return (
    <header ref={bar} className={s.header} data-tone={tone}>
      <div className={s.topbar}>
        <div className={s.lead}>
          <Link className={s.brand} href="/" prefetch={false} aria-label={`${site.name} home`}>
            <img src="/img/logo.svg" alt="" width={18} height={27} />{site.wordmark}
          </Link>
          <nav aria-label="Main">
            <ul className={s.navLinks}>
              {links.map(item => <li key={item.value}><a className={s.navLink} {...linkProps(item)}>{item.short}</a></li>)}
            </ul>
          </nav>
        </div>
        <div className={s.actions}>
          <a className={s.btn} href={whatsapp.href}>{whatsapp.label}</a>
          <a className={`${s.btn} ${s.btnPrimary}`} href={bookCall.href}>{bookCall.label}</a>
        </div>
        <button type="button" className={s.menuButton} aria-expanded={open} aria-haspopup="dialog" aria-label="Open menu" onClick={() => setOpen(true)}>
          <Menu size={18} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
      <Sheet open={open} onClose={close} label="Main menu">
        <nav aria-label="Main">
          <ul className={s.sheetLinks}>
            {nav.map(item => <li key={item.value}><a {...linkProps(item)}>{item.label}</a></li>)}
          </ul>
        </nav>
        <div className={s.sheetActions}>
          <a className={`${s.btn} ${s.btnPrimary}`} href={bookCall.href}>{bookCall.label}</a>
          <a className={s.btn} href={whatsapp.href}>{whatsapp.label}</a>
        </div>
      </Sheet>
    </header>
  );
}
