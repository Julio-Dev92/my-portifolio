"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { T } from "@/lib/i18n";
import { categories, projects, type Category, type Project } from "@/data/projects";
import { Mockup } from "@/components/Mockups";

export function Projects() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [active, setActive] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const visible = filter === "all" ? projects : projects.filter((p) => p.categories.includes(filter));

  function open(p: Project) {
    setActive(p);
    dialog.current?.showModal();
  }

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtro / Filter">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setFilter(c.id)}
            aria-pressed={filter === c.id}
            className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-text aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-accent-ink"
          >
            <T t={c.label} />
          </button>
        ))}
      </div>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => open(p)}
              className="card group flex h-full w-full flex-col overflow-hidden text-left transition-transform hover:-translate-y-1"
            >
              <div className="border-b border-line">
                <Mockup id={p.mockup} />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="font-mono text-xs text-muted">
                  <T t={p.client} />
                </span>
                <h3 className="flex items-start justify-between gap-2 text-lg font-semibold leading-snug">
                  <T t={p.title} />
                  <ArrowUpRight size={18} className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent" aria-hidden />
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  <T t={p.tagline} />
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                  {p.stack.slice(0, 4).map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                  {p.stack.length > 4 && <span className="chip">+{p.stack.length - 4}</span>}
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="m-auto max-h-[90dvh] w-[min(46rem,calc(100vw-2rem))] overflow-y-auto rounded-2xl border border-line bg-surface p-0 text-text shadow-2xl"
        aria-labelledby="project-title"
      >
        {active && (
          <article>
            <div className="relative border-b border-line">
              <Mockup id={active.mockup} className="pr-16" />
              <button
                type="button"
                onClick={() => dialog.current?.close()}
                className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-line bg-surface text-muted hover:text-text"
                aria-label="Fechar / Close"
                autoFocus
              >
                <X size={18} aria-hidden />
              </button>
            </div>
            <div className="space-y-6 p-6 sm:p-8">
              <header>
                <p className="font-mono text-xs text-muted">
                  <T t={active.client} />
                </p>
                <h3 id="project-title" className="mt-1 font-display text-3xl leading-tight">
                  <T t={active.title} />
                </h3>
              </header>
              <section>
                <h4 className="eyebrow mb-2">
                  <T t={{ pt: "O problema", en: "The problem" }} />
                </h4>
                <p className="leading-relaxed text-muted">
                  <T t={active.problem} />
                </p>
              </section>
              <section>
                <h4 className="eyebrow mb-2">
                  <T t={{ pt: "A solução", en: "The solution" }} />
                </h4>
                <p className="leading-relaxed text-muted">
                  <T t={active.solution} />
                </p>
              </section>
              <section>
                <h4 className="eyebrow mb-2">
                  <T t={{ pt: "O que entreguei", en: "What I shipped" }} />
                </h4>
                <ul className="space-y-1.5">
                  {active.highlights.map((h) => (
                    <li key={h.en} className="flex gap-2 leading-relaxed">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>
                        <T t={h} />
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
              <div className="flex flex-wrap gap-1.5">
                {active.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
              <p className="border-t border-line pt-4 text-xs text-muted">
                <T
                  t={{
                    pt: "Cliente anonimizado e ilustração representativa — o código e os dados pertencem aos clientes.",
                    en: "Client anonymized and illustration representative — code and data belong to the clients.",
                  }}
                />
              </p>
            </div>
          </article>
        )}
      </dialog>
    </>
  );
}
