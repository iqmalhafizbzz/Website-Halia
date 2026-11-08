import type { Metadata } from "next";
import { about, bookCall, stats } from "@/content/site";
import { PageHead, SectionHead } from "@/components/site/blocks";
import s from "@/components/site/site.module.css";

export const metadata: Metadata = { title: "About", description: about.hero.text };

export default function AboutPage() {
  return (
    <>
      <PageHead title={about.hero.title} text={about.hero.text} />

      <section className={s.band} aria-labelledby="beliefs-title">
        <div className={s.col}>
          <SectionHead id="beliefs-title" title={about.beliefs.title} />
          <ol className={s.cells}>
            {about.beliefs.items.map((belief, index) => (
              <li key={belief} className={`${s.cell} ${s.cellTight}`}>
                <span className={s.index}>0{index + 1}</span>
                <p className={s.title}>{belief}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={s.band} aria-labelledby="team-title">
        <div className={s.col}>
          <SectionHead id="team-title" title={about.team.title} />
          <ul className={`${s.cardGrid} ${s.cardGrid4}`}>
            {about.team.people.map(person => (
              <li key={person.name} className={`${s.card} ${s.person}`}>
                <div className={s.cardMedia}><img src={person.image} alt={`Portrait of ${person.name}`} loading="lazy" /></div>
                <div className={s.cardBody}>
                  <h3 className={s.title}>{person.name}</h3>
                  <p className={s.role}>{person.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={s.band} aria-labelledby="numbers-title">
        <div className={s.col}>
          <SectionHead id="numbers-title" title={about.numbers.title} />
          <dl className={s.cells}>
            {stats.map(stat => (
              <div key={stat.label} className={`${s.cell} ${s.cellTight}`}>
                <dt className={s.muted}>{stat.label}</dt>
                <dd className={s.figure}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={s.band} aria-labelledby="visit-title">
        <div className={`${s.col} ${s.ctaWrap}`}>
          <div className={s.visit}>
            <img src={about.visit.image} alt="The team talking with a client in our office" loading="lazy" />
            <div className={s.visitCopy}>
              <div>
                <h2 id="visit-title" className={s.h2}>{about.visit.title}</h2>
                <p className={s.body}>{about.visit.text}</p>
              </div>
              <a className={s.btn} href={bookCall.href}>{bookCall.label}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
