import { bookCall } from "@/content/site";
import s from "./site.module.css";

/** Inner-page opening: a centred title and lead under the topbar. */
export function PageHead({ title, text }: { title: string; text: string }) {
  return (
    <section className={s.band} aria-labelledby="page-title">
      <div className={`${s.col} ${s.pageHead}`}>
        <h1 id="page-title" className={s.display}>{title}</h1>
        <p className={s.body}>{text}</p>
      </div>
    </section>
  );
}

export function SectionHead({ id, title }: { id: string; title: string }) {
  return <div className={s.head}><h2 id={id} className={s.h2}>{title}</h2></div>;
}

export function Stats({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className={s.stats}>
      {items.map(item => (
        <div key={item.label} className={s.stat}>
          <dt>{item.label}</dt>
          <dd className={s.figure}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** The black call-to-action panel that closes a page. */
export function Cta({ id, title, text }: { id: string; title: string; text: string }) {
  return (
    <section className={s.band} aria-labelledby={id}>
      <div className={`${s.col} ${s.ctaWrap}`}>
        <div className={s.cta}>
          <div className={s.ctaCopy}>
            <h2 id={id} className={s.h2}>{title}</h2>
            <p className={s.body}>{text}</p>
          </div>
          <a className={s.btn} href={bookCall.href}>{bookCall.label}</a>
        </div>
      </div>
    </section>
  );
}
