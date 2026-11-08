import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Accordion } from "@/components/arc/accordion/accordion";
import { fees } from "@/content/site";
import { PageHead, SectionHead } from "@/components/site/blocks";
import s from "@/components/site/site.module.css";

export const metadata: Metadata = { title: "How we work & fees", description: fees.hero.text };

export default function FeesPage() {
  return (
    <>
      <PageHead title={fees.hero.title} text={fees.hero.text} />

      <section className={s.band} aria-labelledby="process-title">
        <div className={s.col}>
          <SectionHead id="process-title" title={fees.process.title} />
          <div className={s.narrow}>
            <Accordion size="lg" defaultOpen={0} items={fees.process.steps.map(step => ({ title: step.title, content: step.text }))} />
          </div>
        </div>
      </section>

      <section aria-labelledby="pricing-title">
        <div className={s.col}>
          <SectionHead id="pricing-title" title={fees.plans.title} />
          <div className={s.tableWrap}>
            <ul className={s.table}>
              {fees.plans.items.map(plan => (
                <li key={plan.name} className={plan.badge ? `${s.plan} ${s.planFeatured}` : s.plan}>
                  <div className={s.planHead}>
                    <h3 className={`${s.title} ${s.planName}`}>{plan.name}{plan.badge && <span className={s.badge}>{plan.badge}</span>}</h3>
                    <p className={s.body}>{plan.for}</p>
                  </div>
                  <p className={s.price}>
                    {plan.prefix && <span className={s.monoLabel}>{plan.prefix}</span>}
                    <span className={s.figure}>{plan.price}</span>
                    <span className={s.unit}>{plan.unit}</span>
                  </p>
                  <ul className={s.checks} aria-label={`${plan.name} includes`}>
                    {plan.includes.map(entry => <li key={entry}><Check size={16} strokeWidth={2} aria-hidden="true" />{entry}</li>)}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={s.band} aria-labelledby="included-title">
        <div className={s.col}>
          <SectionHead id="included-title" title={fees.included.title} />
          <ol className={`${s.cells} ${s.cells4}`}>
            {fees.included.items.map((item, index) => (
              <li key={item} className={`${s.cell} ${s.cellTight}`}>
                <span className={s.monoLabel}>0{index + 1}</span>
                <p className={s.title}>{item}</p>
              </li>
            ))}
          </ol>
          <p className={s.note}>{fees.included.note}</p>
        </div>
      </section>

      <section className={s.band} aria-labelledby="faq-title">
        <div className={s.col}>
          <SectionHead id="faq-title" title={fees.faq.title} />
          <div className={s.narrow}>
            <Accordion size="lg" defaultOpen={-1} items={fees.faq.items.map(item => ({ title: item.question, content: item.answer }))} />
          </div>
        </div>
      </section>
    </>
  );
}
