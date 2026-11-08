import type { Metadata } from "next";
import { contact, site } from "@/content/site";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PageHead } from "@/components/site/blocks";
import s from "@/components/site/site.module.css";

export const metadata: Metadata = { title: "Contact", description: contact.hero.text };

export default function ContactPage() {
  return (
    <>
      <PageHead title={contact.hero.title} text={contact.hero.text} />
      <section className={s.band} aria-label="Get in touch">
        <div className={`${s.col} ${s.contact}`}>
          <dl className={s.details}>
            <h2 className={s.h2}>{contact.other.title}</h2>
            <div><dt className={s.monoLabel}>Phone</dt><dd><a className={s.link} href={site.phoneHref}>{site.phone}</a></dd></div>
            <div><dt className={s.monoLabel}>Email</dt><dd><a className={s.link} href={`mailto:${site.email}`}>{site.email}</a></dd></div>
            <div><dt className={s.monoLabel}>Office</dt><dd>{site.address[0]}<br />{site.address[1]}</dd></div>
            <div><dt className={s.monoLabel}>Hours</dt><dd>{site.hours}</dd></div>
            <div><dt className={s.monoLabel}>Social</dt><dd>{site.socials.map((social, index) => <span key={social.label}>{index > 0 && " · "}<a className={s.link} href={social.href}>{social.label}</a></span>)}</dd></div>
          </dl>
          <div className={s.formPanel}>
            <h2 className={s.h2}>{contact.form.title}</h2>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
