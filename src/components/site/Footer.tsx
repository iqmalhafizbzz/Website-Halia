"use client";

import Link from "next/link";
import { bookCall, nav, site } from "@/content/site";
import { useCurrentPage } from "./useCurrentPage";
import s from "./site.module.css";

export function Footer() {
  const current = useCurrentPage();
  return (
    <footer className={s.footer} data-tone="dark">
      <img src="/img/hero-clouds.png" alt="" aria-hidden="true" />
      <div className={`${s.col} ${s.footInner}`}>
        <div className={s.footPanel}>
          <div className={s.footTop}>
            <div className={s.footCol}>
              <a className={s.backTop} href="#main"><img src="/img/icon-arrow-up.svg" alt="" width={14} height={14} />Back to top</a>
            </div>
            <div className={s.footCol}>
              <h2>Pages</h2>
              <ul>{nav.map(item => <li key={item.value}><a href={item.href} aria-current={item.value === current ? "page" : undefined}>{item.label}</a></li>)}</ul>
            </div>
            <div className={s.footCol}>
              <h2>Contact</h2>
              <ul>
                <li><a href={site.phoneHref}>{site.phone}</a></li>
                <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li><a href={site.whatsappHref}>WhatsApp us</a></li>
              </ul>
              <p>{site.address[0]}<br />{site.address[1]}</p>
              <p>{site.hours}</p>
            </div>
            <div className={s.footCol}>
              <a className={`${s.btn} ${s.btnPrimary}`} href={bookCall.href}>{bookCall.label}</a>
            </div>
          </div>
          <div className={s.footBottom}>
            <Link className={s.footBrand} href="/" prefetch={false}><img src="/img/logo.svg" alt="" width={18} height={27} />{site.wordmark}</Link>
            <span className={s.footMeta}>© 2026 {site.name} {site.tagline}</span>
            <ul className={s.footLinks}>
              <li><a href="/privacy/" aria-current={current === "privacy" ? "page" : undefined}>Privacy notice</a></li>
              {site.socials.map(social => <li key={social.label}><a href={social.href}>{social.label}</a></li>)}
            </ul>
          </div>
          <p className={s.legal}>{site.demoBanner}</p>
        </div>
      </div>
    </footer>
  );
}
