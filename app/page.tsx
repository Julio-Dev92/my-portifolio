import Image from "next/image";
import { T, type L10n } from "@/lib/i18n";
import { profile } from "@/data/profile";
import { certifications, education, languages } from "@/data/experience";
import { Career } from "@/components/Career";
import { Projects } from "@/components/Projects";
import { LangToggle, ThemeToggle } from "@/components/Toggles";

function Section({ id, title, children }: { id: string; title: L10n; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="mt-20">
      <h2 id={id} className="mb-6 font-semibold">
        <T t={title} />
      </h2>
      {children}
    </section>
  );
}

function Intro() {
  return (
    <header>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          {profile.photo && (
            <Image
              src={profile.photo}
              alt=""
              width={128}
              height={160}
              preload
              className="h-20 w-16 object-cover"
            />
          )}
          <div>
            <h1 className="font-mono text-3xl font-semibold sm:text-4xl">
              <span className="typed" style={{ "--chars": profile.shortName.length } as React.CSSProperties}>
                {profile.shortName}
              </span>
              <span className="caret" aria-hidden />
            </h1>
            <p className="fade-in mt-2 text-muted">
              <T t={profile.role} />, <T t={profile.location} />
            </p>
          </div>
        </div>
        <div className="-mr-2 -mt-1.5 flex">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>

      <div className="fade-in mt-12 max-w-[64ch] space-y-4 leading-relaxed">
        <p>
          <T t={profile.headline} />
        </p>
        {profile.summary.map((p) => (
          <p key={p.en} className="text-muted">
            <T t={p} />
          </p>
        ))}
        <p className="text-muted">
          <T t={profile.availability} />
          {". "}
          <a href="#contato" className="link">
            <T t={{ pt: "Fale comigo", en: "Get in touch" }} />
          </a>{" "}
          <T t={{ pt: "ou baixe o", en: "or download my" }} />{" "}
          <a href={profile.resume} download className="link">
            <T t={{ pt: "currículo em inglês", en: "résumé" }} />
          </a>
          .
        </p>
      </div>
    </header>
  );
}

function Experience() {
  return (
    <Section id="experiencia" title={{ pt: "Carreira", en: "Career" }}>
      <Career />
    </Section>
  );
}

function Education() {
  return (
    <Section id="formacao" title={{ pt: "Formação", en: "Education" }}>
      <ul className="space-y-3">
        {education.map((e) => (
          <li key={e.place} className="grid gap-x-6 sm:grid-cols-[8.5rem_1fr]">
            <span className="text-muted tabular-nums">{e.period}</span>
            <span>
              <T t={e.title} />
              <span className="text-muted">, {e.place}</span>
            </span>
          </li>
        ))}
        {certifications.map((c) => (
          <li key={c.title} className="grid gap-x-6 sm:grid-cols-[8.5rem_1fr]">
            <span className="text-muted">
              <T t={{ pt: "Certificado", en: "Certificate" }} />
            </span>
            <span>
              {c.title}
              <span className="text-muted">, {c.issuer}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-muted">
        {languages.map((l, i) => (
          <span key={l.en}>
            {i > 0 && ", "}
            <T t={l} />
          </span>
        ))}
        .
      </p>
    </Section>
  );
}

function Contact() {
  const c = profile.contacts;
  return (
    <section aria-labelledby="contato" className="mt-20">
      <h2 id="contato" className="mb-6 font-semibold">
        <T t={{ pt: "Contato", en: "Contact" }} />
      </h2>
      <p className="leading-relaxed text-muted">
        <T t={{ pt: "Escreva para", en: "Email me at" }} />{" "}
        <a href={`mailto:${c.email}`} className="link">
          {c.email}
        </a>{" "}
        <T t={{ pt: "ou me chame no", en: "or reach me on" }} />{" "}
        <a href={c.whatsapp} target="_blank" rel="noreferrer" className="link">
          WhatsApp
        </a>
        . <T t={{ pt: "Também estou no", en: "I'm also on" }} />{" "}
        <a href={c.linkedin} target="_blank" rel="noreferrer" className="link">
          LinkedIn
        </a>{" "}
        <T t={{ pt: "e no", en: "and" }} />{" "}
        <a href={c.github} target="_blank" rel="noreferrer" className="link">
          GitHub
        </a>
        .
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-6 sm:pt-20">
      <Intro />
      <main>
        <Section id="projetos" title={{ pt: "Projetos recentes", en: "Recent work" }}>
          <Projects />
        </Section>
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="mt-20 text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}
