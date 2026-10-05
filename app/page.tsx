import { ArrowDown, Download, Mail, MapPin, MessageCircle } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";
import { T, type L10n } from "@/lib/i18n";
import { profile, stack } from "@/data/profile";
import { certifications, education, experience, languages } from "@/data/experience";
import { projects } from "@/data/projects";
import { Projects } from "@/components/Projects";
import { LangToggle, ThemeToggle } from "@/components/Toggles";
import { RevealObserver } from "@/components/Reveal";

const nav: { href: string; label: L10n }[] = [
  { href: "#projetos", label: { pt: "Projetos", en: "Work" } },
  { href: "#sobre", label: { pt: "Sobre", en: "About" } },
  { href: "#experiencia", label: { pt: "Experiência", en: "Experience" } },
  { href: "#contato", label: { pt: "Contato", en: "Contact" } },
];

function SectionTitle({ eyebrow, title, id }: { eyebrow: L10n; title: L10n; id: string }) {
  return (
    <header className="reveal mb-10">
      <p className="eyebrow">
        <T t={eyebrow} />
      </p>
      <h2 id={id} className="mt-2 font-display text-4xl leading-tight sm:text-5xl">
        <T t={title} />
      </h2>
    </header>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-display text-xl">
          Julio<span className="text-accent">.</span>
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-7 text-sm text-muted">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-text">
                  <T t={n.label} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-ok" />
          </span>
          <T t={profile.availability} />
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={13} aria-hidden />
          <T t={profile.location} />
        </span>
      </div>

      <h1 className="mt-8 font-display text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.95] tracking-tight">
        Julio Saldanha
        <br />
        <span className="italic text-accent">
          <T t={profile.role} />
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
        <T t={profile.headline} />
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#projetos"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
        >
          <T t={{ pt: "Ver projetos", en: "See my work" }} />
          <ArrowDown size={16} aria-hidden />
        </a>
        <a
          href={profile.resume}
          download
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium transition-colors hover:border-accent"
        >
          <Download size={16} aria-hidden />
          <T t={{ pt: "Currículo (EN)", en: "Résumé" }} />
        </a>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
        {[
          { v: "2019", l: { pt: "programando profissionalmente", en: "coding professionally since" } },
          { v: `${projects.length}`, l: { pt: "frentes de produto na empresa atual", en: "product fronts at my current job" } },
          { v: "10+", l: { pt: "sites de clientes mantidos", en: "client websites maintained" } },
          { v: "5.8→13", l: { pt: "versões de Laravel migradas", en: "Laravel versions migrated" } },
        ].map((s) => (
          <div key={s.v} className="bg-surface p-5">
            <dt className="sr-only">
              <T t={s.l} />
            </dt>
            <dd>
              <span className="block font-display text-3xl sm:text-4xl">{s.v}</span>
              <span className="mt-1 block text-sm text-muted">
                <T t={s.l} />
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Work() {
  return (
    <section aria-labelledby="projetos-t" id="projetos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle
        id="projetos-t"
        eyebrow={{ pt: "01 — Projetos na Medialine", en: "01 — Work at Medialine" }}
        title={{ pt: "Um pouco de cada coisa que construo hoje", en: "A bit of everything I build today" }}
      />
      <div className="reveal">
        <Projects />
      </div>
    </section>
  );
}

function About() {
  return (
    <section aria-labelledby="sobre-t" id="sobre" className="border-y border-line bg-surface-2/50">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionTitle
            id="sobre-t"
            eyebrow={{ pt: "02 — Sobre", en: "02 — About" }}
            title={{ pt: "Do .NET ao Next.js, sempre perto do negócio", en: "From .NET to Next.js, always close to the business" }}
          />
          <div className="reveal space-y-4 text-lg leading-relaxed text-muted">
            {profile.summary.map((p) => (
              <p key={p.en}>
                <T t={p} />
              </p>
            ))}
          </div>
        </div>
        <div className="reveal space-y-6 lg:pt-24">
          {stack.map((g) => (
            <div key={g.group.en}>
              <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">
                <T t={g.group} />
              </h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section aria-labelledby="exp-t" id="experiencia" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle
        id="exp-t"
        eyebrow={{ pt: "03 — Experiência", en: "03 — Experience" }}
        title={{ pt: "Por onde passei", en: "Where I've worked" }}
      />
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <ol className="relative space-y-10 border-l border-line pl-6">
          {experience.map((e) => (
            <li key={e.company} className="reveal relative">
              <span
                className={`absolute -left-7.75 top-1.5 size-3 rounded-full border-2 border-bg ${e.current ? "bg-accent" : "bg-line"}`}
                aria-hidden
              />
              <p className="font-mono text-xs text-muted">
                <T t={e.period} />
              </p>
              <h3 className="mt-1 text-xl font-semibold">
                {e.company}
                {e.current && (
                  <span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 align-middle font-mono text-[10px] font-normal text-text">
                    <T t={{ pt: "atual", en: "current" }} />
                  </span>
                )}
              </h3>
              <p className="text-accent">
                <T t={e.role} />
              </p>
              <ul className="mt-3 space-y-1.5 text-muted">
                {e.points.map((p) => (
                  <li key={p.en} className="leading-relaxed">
                    <T t={p} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <aside className="reveal space-y-8">
          <div className="card p-6">
            <h3 className="eyebrow mb-4">
              <T t={{ pt: "Formação", en: "Education" }} />
            </h3>
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.place}>
                  <p className="font-medium">
                    <T t={e.title} />
                  </p>
                  <p className="text-sm text-muted">
                    {e.place} · {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="eyebrow mb-4">
              <T t={{ pt: "Certificações", en: "Certifications" }} />
            </h3>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c.title}>
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-muted">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="eyebrow mb-4">
              <T t={{ pt: "Idiomas", en: "Languages" }} />
            </h3>
            <ul className="space-y-1">
              {languages.map((l) => (
                <li key={l.en}>
                  <T t={l} />
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Contact() {
  const c = profile.contacts;
  const links = [
    { href: `mailto:${c.email}`, icon: Mail, label: c.email },
    { href: c.whatsapp, icon: MessageCircle, label: c.phone },
    { href: c.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: c.github, icon: Github, label: "GitHub" },
  ];
  return (
    <section aria-labelledby="contato-t" id="contato" className="border-t border-line bg-surface-2/50">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="eyebrow reveal">
          <T t={{ pt: "04 — Contato", en: "04 — Contact" }} />
        </p>
        <h2 id="contato-t" className="reveal mt-3 max-w-3xl font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02]">
          <T t={{ pt: "Vamos construir algo ", en: "Let's build something " }} />
          <span className="italic text-accent">
            <T t={{ pt: "juntos?", en: "together?" }} />
          </span>
        </h2>
        <ul className="reveal mt-12 grid gap-3 sm:grid-cols-2">
          {links.map(({ href, icon: Icon, label }) => (
            <li key={href}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card group flex items-center gap-4 p-5 transition-colors hover:border-accent"
              >
                <span className="grid size-11 place-items-center rounded-full bg-accent-soft text-accent">
                  <Icon size={20} aria-hidden />
                </span>
                <span className="min-w-0 truncate font-medium">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
      <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-4 py-8 font-mono text-xs text-muted sm:px-6">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Next.js · Tailwind · Vercel</span>
      </footer>
      <RevealObserver />
    </>
  );
}
