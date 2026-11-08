import { bookCall, home, stats } from "@/content/site";
import { Cta, SectionHead, Stats } from "@/components/site/blocks";
import s from "@/components/site/site.module.css";

export default function HomePage() {
  return (
    <>
      <section className={s.heroBleed} data-tone="dark" aria-labelledby="page-title">
        <div className={s.heroMedia} aria-hidden="true">
          <div className={s.sky}>
            <div className={s.cloudTrack}>{[0, 1, 2].map(index => <img key={index} src="/img/hero-clouds.png" alt="" />)}</div>
          </div>
        </div>
        <div className={s.heroCopy}>
          <h1 id="page-title" className={s.display}>{home.hero.title[0]}<br />{home.hero.title[1]}</h1>
          <p className={s.body}>{home.hero.text}</p>
          <div className={s.heroActions}>
            <a className={`${s.btn} ${s.btnPrimary}`} href={bookCall.href}>{bookCall.label}</a>
            <a className={s.btn} href={home.hero.secondary.href}>{home.hero.secondary.label}</a>
          </div>
        </div>
      </section>

      <section className={s.band} aria-label="Halia in numbers">
        <div className={s.col}><Stats items={stats} /></div>
      </section>

      <section className={s.band} aria-labelledby="plate-title">
        <div className={s.col}>
          <SectionHead id="plate-title" title={home.plate.title} />
          <ul className={s.tiles}>
            {home.plate.items.map(item => (
              <li key={item.id}>
                <a className={s.tile} href={`/services/#${item.id}`}>
                  <img src={item.image} alt="" loading="lazy" />
                  <h3 className={s.title}>{item.title}</h3>
                  <p className={s.body}>{item.text}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={s.band} aria-labelledby="why-title">
        <div className={s.col}>
          <SectionHead id="why-title" title={home.why.title} />
          <ul className={s.cells}>
            {home.why.items.map(item => (
              <li key={item.title} className={s.cell}>
                <span className={s.iconTile}><img src={item.icon} alt="" width={32} height={32} /></span>
                <div className={s.stack}>
                  <h3 className={s.title}>{item.title}</h3>
                  <p className={s.body}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={s.band} aria-labelledby="start-title">
        <div className={s.col}>
          <SectionHead id="start-title" title={home.start.title} />
          <ol className={s.cells}>
            {home.start.steps.map((step, index) => (
              <li key={step.text} className={s.cell}>
                <span className={s.stepLabel}>Step {index + 1}</span>
                <span className={s.iconTile}><img src={step.icon} alt="" width={32} height={32} /></span>
                <p className={s.title}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Cta title={home.cta.title} text={home.cta.text} id="cta-title" />
    </>
  );
}
