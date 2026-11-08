"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Check, Menu } from "lucide-react";
import { Accordion } from "@/components/arc/accordion/accordion";
import { Button } from "@/components/arc/button/button";
import { Select } from "@/components/arc/select/select";
import { Sheet } from "@/components/site/Sheet";
import { about, bookCall, contact, fees, home, nav, services } from "@/content/site";
import s from "@/components/site/site.module.css";
import c from "./compare.module.css";

/** One part of the UI, rendered twice: the left column with the Figma originals, the right with the Tactile treatment. */
function Part({ title, text, changes, render }: { title: string; text: string; changes: string[]; render: (side: "before" | "after", portal: HTMLElement | null) => ReactNode }) {
  const [before, setBefore] = useState<HTMLElement | null>(null);
  const [after, setAfter] = useState<HTMLElement | null>(null);
  return (
    <section className={c.part} aria-label={title}>
      <div className={c.partHead}>
        <h2 className={s.h2}>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={c.pair}>
        <div ref={setBefore} className={`${c.side} ${c.before}`}>
          <span className={c.tag}>Before · Figma</span>
          {render("before", before)}
        </div>
        <div ref={setAfter} className={c.side}>
          <span className={c.tag}>After · Tactile</span>
          {render("after", after)}
        </div>
      </div>
      <ul className={c.notes}>{changes.map(change => <li key={change}>{change}</li>)}</ul>
    </section>
  );
}

function PhoneSheet() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${c.phone} ${s.contained}`}>
      <div className={c.phoneBar}>Halia.co<button type="button" className={s.menuButton} style={{ display: "grid" }} aria-label="Open menu" onClick={() => setOpen(true)}><Menu size={18} strokeWidth={2} aria-hidden="true" /></button></div>
      <div className={c.phoneBody}><span /><span /><span style={{ width: "60%" }} /></div>
      <Sheet open={open} onClose={() => setOpen(false)} label="Main menu" contained>
        <ul className={s.sheetLinks}>{nav.map(item => <li key={item.value}><a href="#sheets" aria-current={item.value === "services" ? "page" : undefined} onClick={event => event.preventDefault()}>{item.label}</a></li>)}</ul>
        <div className={s.sheetActions}>
          <a className={`${s.btn} ${s.btnPrimary}`} href="#sheets">{bookCall.label}</a>
          <a className={s.btn} href="#sheets">WhatsApp us</a>
        </div>
      </Sheet>
    </div>
  );
}

function PhoneOldMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className={c.phone}>
      <div className={c.phoneBar}>Halia.co<button type="button" className={c.oldToggle} aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(value => !value)}><Menu size={18} strokeWidth={1.75} aria-hidden="true" /></button></div>
      {open && (
        <nav className={c.oldMenu} aria-label="Old menu">
          {nav.map(item => <a key={item.value} href="#sheets" onClick={event => event.preventDefault()}>{item.label}</a>)}
          <div className={c.oldMenuActions}><span>WhatsApp us</span><span>Book a call</span></div>
        </nav>
      )}
      <div className={c.phoneBody}><span /><span /><span style={{ width: "60%" }} /></div>
    </div>
  );
}

export function Compare() {
  const [need, setNeed] = useState({ before: "Tax", after: "Tax" });
  const plan = fees.plans.items[1];
  const service = services.items[0];
  const tile = home.plate.items[1];
  const person = about.team.people[2];

  return (
    <main className={c.page}>
      <header className={c.intro}>
        <h1 className={s.display}>Tactile, part by part</h1>
        <p>Every part below is the live site component, rendered twice. Press, hover and open them. The left column swaps the Tactile tokens back to what the Figma file specified; nothing else differs.</p>
      </header>

      <Part
        title="Buttons"
        text="The header and hero actions, and the white button on a dark panel."
        changes={[
          "Edge: the soft 12px blur and inner highlight become a 1px ring plus a crisp 1px drop, so the button reads raised without a glow.",
          "Press: squeezes to 97% in 150ms on the strong ease-out; the round menu button squeezes to 94%.",
          "Hover: colour only (white to stone-100, orange-600 to orange-700), fine pointer only.",
          "Focus: one zinc-500 ring, 2px out, on every control.",
        ]}
        render={() => (
          <>
            <div className={`${c.stage} ${c.stagePhoto}`}>
              <img src="/img/hero-clouds.png" alt="" />
              <div className={c.row}>
                <a className={`${s.btn} ${s.btnPrimary}`} href="#buttons">{bookCall.label}</a>
                <a className={s.btn} href="#buttons">See our fees</a>
              </div>
            </div>
            <div className={`${c.stage} ${c.stageDark}`}>
              <div className={c.row}>
                <a className={s.btn} href="#buttons" style={{ boxShadow: "var(--shadow-dark)" }}>{bookCall.label}</a>
                <button type="button" className={s.menuButton} style={{ display: "grid" }} aria-label="Menu"><Menu size={18} strokeWidth={2} aria-hidden="true" /></button>
              </div>
            </div>
            <div className={`${c.stage} ${c.stagePanel}`}>
              <div className={c.row}><Button type="button" size="lg">{contact.form.submit}</Button><Button type="button" variant="secondary">Write another message</Button></div>
            </div>
          </>
        )}
      />

      <Part
        title="Cards"
        text="Home's service tiles (they open Services), the black service cards and the team cards."
        changes={[
          "Raised: black cards on white get the card ring, the 1px drop and one short 3px drop, instead of sitting flat.",
          "Press: the clickable home tiles squeeze to 99%, the gentlest step, as cards should; non-clickable cards don't move.",
          "Hover: the tile's tint lifts slightly, colour only.",
        ]}
        render={() => (
          <>
            <ul className={s.tiles} style={{ gridTemplateColumns: "1fr", border: 0 }}>
              <li><a className={s.tile} href="#cards" style={{ height: 280 }} onClick={event => event.preventDefault()}><img src={tile.image} alt="" /><h3 className={s.title}>{tile.title}</h3><p className={s.body}>{tile.text}</p></a></li>
            </ul>
            <div className={s.card}>
              <div className={`${s.cardMedia} ${s.tinted}`} style={{ height: 180 }}><img src={service.image} alt="" /></div>
              <div className={s.cardBody}><h3 className={s.title}>{service.title}</h3><p className={s.body}>{service.text}</p></div>
            </div>
            <div className={`${s.card} ${s.person}`} style={{ maxWidth: 280 }}>
              <div className={s.cardMedia}><img src={person.image} alt="" /></div>
              <div className={s.cardBody}><h3 className={s.title}>{person.name}</h3><p className={s.role}>{person.role}</p></div>
            </div>
          </>
        )}
      />

      <Part
        title="Tables"
        text="The pricing table on Fees: three plans side by side, the recommended one in navy."
        changes={[
          "One frame: the table gets a 12px radius and the table ring and drop, inset from the column, instead of cells running into the page lines.",
          "Hairlines: column dividers drop from 1px to 0.5px, so structure stays quiet.",
          "Badge: \u201cRecommended\u201d is a white pill with the button ring and drop, so it reads as a label on the navy.",
        ]}
        render={() => (
          <div className={s.tableWrap} style={{ borderTop: 0 }}>
            <ul className={s.table} style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              {[fees.plans.items[0], plan].map(item => (
                <li key={item.name} className={item.badge ? `${s.plan} ${s.planFeatured}` : s.plan} style={{ minHeight: 0, gap: 24, padding: "32px 12px" }}>
                  <div className={s.planHead}><h3 className={`${s.title} ${s.planName}`}>{item.name}{item.badge && <span className={s.badge}>{item.badge}</span>}</h3></div>
                  <p className={s.price}><span className={s.monoLabel}>{item.prefix}</span><span className={s.figure}>{item.price}</span><span className={s.unit}>{item.unit}</span></p>
                  <ul className={s.checks}>{item.includes.slice(0, 3).map(entry => <li key={entry}><Check size={16} strokeWidth={2} aria-hidden="true" />{entry}</li>)}</ul>
                </li>
              ))}
            </ul>
          </div>
        )}
      />

      <Part
        title="Charts"
        text="The site has no charts, so there is nothing to compare. Its figures (2010, 50+, 30+) stay as plain mono numbers: Tactile keeps animation off data figures."
        changes={["No change."]}
        render={() => <div className={c.stage}><dl className={s.stats} style={{ padding: 0 }}><div className={s.stat}><dt>Established</dt><dd className={s.figure}>2010</dd></div></dl></div>}
      />

      <Part
        title="Dropdowns"
        text={"The \u201cWhat you need help with\u201d select on Contact, and the accordions on Fees."}
        changes={[
          "Trigger: a white button with the ring and drop instead of a grey outline; hover and press change the fill only, because the menu measures the trigger.",
          "Menu: the big 48px blur becomes a crisp ring, drop and one short 8px drop; opens in 150ms from the trigger, closes in 120ms.",
          "Items: hover is one step above the menu, the chosen item two steps, and the tick is gone.",
          "Accordion: the chevron sits in a round pill with the button edge and squeezes to 94% on press.",
        ]}
        render={(side, portal) => (
          <>
            <div className={`${c.stage} ${c.stagePanel}`} style={{ "--radius-control": "var(--radius-card)" } as React.CSSProperties}>
              <div className={c.wide}>
                <Select label="What you need help with" placeholder="Choose one" value={need[side]} onValueChange={value => setNeed(current => ({ ...current, [side]: value }))} options={contact.form.needs.map(value => ({ value, label: value }))} portalContainer={portal} />
              </div>
            </div>
            <div className={c.stage}><div className={c.wide}><Accordion size="lg" defaultOpen={-1} items={fees.faq.items.slice(0, 2).map(item => ({ title: item.question, content: item.answer }))} /></div></div>
          </>
        )}
      />

      <Part
        title="Sheets"
        text="The phone menu. Tap the round button in each phone."
        changes={[
          "Before, the menu dropped down under the bar and pushed the page.",
          "After, it is a bottom sheet over a 30% dimmed, lightly blurred page: up in 320ms, down in 200ms.",
          "A white grab handle replaces a close button. Tap it, tap outside, press Escape, or drag the sheet down (past 64px or a quick flick) to close.",
          "Actions stack full width with the primary on top; links are 48px rows; the current page is underlined.",
        ]}
        render={side => <div className={c.stage}>{side === "before" ? <PhoneOldMenu /> : <PhoneSheet />}</div>}
      />
    </main>
  );
}
