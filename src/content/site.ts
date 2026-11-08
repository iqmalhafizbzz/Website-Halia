// All visible copy for the Halia & Co. demo site, from the Content Pack, tightened to the Fiskal Figma layout.
// Halia & Co. is invented: no name, figure, fee or address here belongs to a real business.

export const site = {
  name: "Halia & Co.",
  wordmark: "Halia.co",
  tagline: "Tax & Accounting",
  demoBanner: "Demo site by Primaxoft. Halia & Co. is not a real business.",
  phone: "+60 3-1234 5678",
  phoneHref: "tel:+60312345678",
  email: "hello@halia.example",
  address: ["Level 9, Menara Halia", "47800 Petaling Jaya, Selangor"],
  hours: "Monday to Friday, 9:00 am to 6:00 pm",
  // The brief asks for the WhatsApp button to open the Contact page, not wa.me.
  whatsappHref: "/contact/",
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
  ],
};

export const bookCall = { label: "Book a free call", href: "/contact/" };
export const whatsapp = { label: "WhatsApp us", href: site.whatsappHref };

// `short` is the header label; the footer uses the full one.
export const nav = [
  { value: "home", label: "Home", short: "Home", href: "/" },
  { value: "services", label: "Services", short: "Services", href: "/services/" },
  { value: "about", label: "About", short: "About", href: "/about/" },
  { value: "fees", label: "How we work & fees", short: "Fees", href: "/how-we-work/" },
  { value: "contact", label: "Contact", short: "Contact", href: "/contact/" },
];

export type Item = { title: string; text: string };

// Shared by Home and About.
export const stats = [
  { label: "Established", value: "2010" },
  { label: "Clients looked after", value: "50+" },
  { label: "Years of combined experience", value: "30+" },
];

export const home = {
  hero: {
    title: ["Your books, done right.", "Your taxes, on time."],
    text: "Accounting, tax and payroll for Klang Valley small businesses, for one fixed monthly fee. You run the business; we keep LHDN, SSM and your bank happy.",
    secondary: { label: "See our fees", href: "/how-we-work/" },
  },
  plate: {
    title: "What we take off your plate",
    items: [
      { id: "bookkeeping", title: "Bookkeeping & accounts", text: "Monthly books, bank reconciliation and the statements your bank asks for.", image: "/img/service-bookkeeping.png" },
      { id: "tax", title: "Tax", text: "Filing for you and your business, with planning so the bill never surprises you.", image: "/img/service-tax.png" },
      { id: "payroll", title: "Payroll", text: "Salaries, EPF, SOCSO, EIS and PCB, paid and filed every month.", image: "/img/service-payroll.png" },
      { id: "e-invoicing", title: "e-Invoicing and SST", text: "MyInvois set up for you, and SST returns filed on time.", image: "/img/service-einvoicing.png" },
    ],
  },
  why: {
    title: "Why business owners stay with us",
    items: [
      { icon: "/img/icon-credit-card.svg", title: "Fixed fees", text: "The price is agreed before we start, and questions never change it." },
      { icon: "/img/icon-phone.svg", title: "A reply within one working day", text: "On WhatsApp or email, from the accountant who knows your file." },
      { icon: "/img/icon-globe.svg", title: "Plain language", text: "We explain what your numbers mean, not just what they are." },
    ],
  },
  start: {
    title: "Getting started takes two weeks",
    steps: [
      { icon: "/img/icon-phone.svg", text: "A free 20-minute call about your business." },
      { icon: "/img/icon-calculator.svg", text: "A fixed quote within two working days." },
      { icon: "/img/icon-file.svg", text: "We collect past records and take over from your old accountant." },
    ],
  },
  cta: {
    title: "Not sure where your books stand?",
    text: "Book a free 20-minute call. We'll tell you what's missing, what's due and what fixing it costs. No obligation.",
  },
};

export const services = {
  hero: {
    title: "Services",
    text: "Everything a small business needs to stay compliant and know where it stands, from one team.",
  },
  items: [
    {
      id: "bookkeeping",
      title: "Bookkeeping & accounts",
      image: "/img/service-bookkeeping.png",
      text: "Send receipts and bank statements by the 7th; we do the rest. You get monthly accounts showing profit, cash and what you're owed, plus annual statements for your audit or bank.",
    },
    {
      id: "tax",
      title: "Tax",
      image: "/img/service-tax.png",
      text: "Form B or BE for sole proprietors, Form P for partnerships and Form C for companies, all on time. For companies we prepare the CP204 estimate and review it mid-year, so there's no under-estimate penalty. If LHDN reviews your file, we handle the letters and the meeting.",
    },
    {
      id: "payroll",
      title: "Payroll",
      image: "/img/service-payroll.png",
      text: "Payslips, EPF, SOCSO, EIS and PCB every month, paid and filed before the deadline, and EA forms for your staff at year end. Priced per employee, so it grows with you.",
    },
    {
      id: "e-invoicing",
      title: "e-Invoicing and SST",
      image: "/img/service-einvoicing.png",
      text: "We help you choose how to issue e-Invoices through MyInvois, set it up with your system and check the first months with you. If you need SST, we handle the registration and every return after.",
    },
  ],
  partners: {
    title: "Audit and company secretarial",
    text: "Done by partner firms we've worked with for years. We prepare everything they need, so you deal with one team.",
  },
};

export const about = {
  hero: {
    title: "Big-firm experience, small-business attention",
    text: "Two accountants from large firms started Halia & Co. in 2016. Small businesses were getting rushed service and surprise bills; we give them big-client care at a price they can plan for.",
  },
  beliefs: {
    title: "What we believe",
    items: ["Your accountant should be easy to reach.", "A price should be a price.", "Good numbers help you decide, not just file."],
  },
  team: {
    title: "The team",
    people: [
      { name: "Nurul Aina Rahman", role: "Founding Partner, Tax", image: "/img/team-nurul.png" },
      { name: "Daniel Wong Kah Wai", role: "Partner, Accounting", image: "/img/team-daniel.png" },
      { name: "Priya Raman", role: "Senior Accountant, Payroll", image: "/img/team-priya.png" },
      { name: "Hafiz Azman", role: "Accounts Executive", image: "/img/team-hafiz.png" },
    ],
  },
  numbers: { title: "Halia, in numbers" },
  visit: {
    title: "Come and see us",
    text: "Our Petaling Jaya office is five minutes from the LRT. Visits are by appointment, so the person who knows your file is there to meet you.",
    image: "/img/visit-office.png",
  },
};

export const fees = {
  hero: {
    title: "How we work and what it costs",
    text: "One fixed monthly fee, agreed before we start. Here's how it works and where prices start.",
  },
  process: {
    title: "From first call to first report",
    steps: [
      { title: "Free call (20 minutes)", text: "We learn about your business and what's due." },
      { title: "Fixed quote", text: "Within two working days." },
      { title: "Handover", text: "In your first two weeks we collect past records and contact your old accountant for you." },
      { title: "Every month", text: "Send documents by the 7th; your report arrives by the 20th." },
    ],
  },
  plans: {
    title: "Our pricing",
    items: [
      { name: "Starter", for: "For sole proprietors and partnerships", prefix: "From", price: "RM250", unit: "per month", includes: ["Bookkeeping", "Annual accounts", "Form B or P"] },
      { name: "Company", for: "For Sdn. Bhd. companies", prefix: "From", price: "RM650", unit: "per month", includes: ["Bookkeeping", "Management accounts", "Form C", "CP204"], badge: "Recommended" },
      { name: "Payroll", for: "Add to any plan", prefix: "", price: "RM15", unit: "per employee per month", includes: ["Payslips", "EPF, SOCSO, EIS and PCB", "EA forms at year end"] },
    ],
  },
  included: {
    title: "Always included, never extra",
    items: ["Questions on WhatsApp and email", "A yearly planning meeting", "LHDN letters and reviews", "Takeover from your old accountant"],
    note: "Extra work, like catching up on years of missing books, is quoted in writing first.",
  },
  faq: {
    title: "Questions we often hear",
    items: [
      { question: "My books are a mess. Can you still help?", answer: "Yes. We quote the catch-up work separately, then start the monthly fee." },
      { question: "Do I have to change software?", answer: "No. We work with most accounting software, or your spreadsheets." },
      { question: "Can I leave?", answer: "Yes, with one month's notice. We hand your records to your next accountant." },
      { question: "Do you do audits?", answer: "Through partner firms; see Services." },
    ],
  },
};

export const contact = {
  hero: {
    title: "Talk to us",
    text: "Tell us about your business and we'll reply within one working day to book your free 20-minute call.",
  },
  form: {
    title: "Send an enquiry",
    businessTypes: ["Sole proprietor", "Partnership", "Sdn. Bhd."],
    needs: ["Bookkeeping", "Tax", "Payroll", "e-Invoicing and SST", "Not sure"],
    submit: "Send",
    thanks: "Thanks! This is a demo site, so your message wasn't sent anywhere.",
  },
  other: { title: "Other ways to reach us" },
};
