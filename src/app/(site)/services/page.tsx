import type { Metadata } from "next";
import { services } from "@/content/site";
import { Cta, PageHead } from "@/components/site/blocks";
import s from "@/components/site/site.module.css";

export const metadata: Metadata = { title: "Services", description: services.hero.text };

export default function ServicesPage() {
  return (
    <>
      <PageHead title={services.hero.title} text={services.hero.text} />
      <section className={s.band} aria-label="What we do">
        <div className={s.col}>
          <ul className={s.cardGrid}>
            {services.items.map(item => (
              <li key={item.id} id={item.id} className={s.card}>
                <div className={`${s.cardMedia} ${s.tinted}`}><img src={item.image} alt="" loading="lazy" /></div>
                <div className={s.cardBody}>
                  <h2 className={s.title}>{item.title}</h2>
                  <p className={s.body}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Cta id="partners-title" title={services.partners.title} text={services.partners.text} />
    </>
  );
}
