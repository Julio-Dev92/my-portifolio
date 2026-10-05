"use client";

import { useRef, useState } from "react";
import { X } from "lucide-react";
import { T } from "@/lib/i18n";
import { projects, type Project } from "@/data/projects";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  function open(p: Project) {
    setActive(p);
    dialog.current?.showModal();
  }

  return (
    <>
      <ul className="space-y-6">
        {projects.map((p) => (
          <li key={p.id}>
            <button type="button" onClick={() => open(p)} className="group w-full text-left">
              <span className="underline decoration-line decoration-1 underline-offset-4 group-hover:decoration-text">
                <T t={p.title} />
              </span>
              <span className="mt-1 block leading-relaxed text-muted">
                <T t={p.tagline} />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="m-auto max-h-[90dvh] w-[min(44rem,calc(100vw-2rem))] overflow-y-auto border border-line bg-bg p-0 text-text"
        aria-labelledby="project-title"
      >
        {active && (
          <article className="space-y-7 p-6 sm:p-10">
            <header className="flex items-start justify-between gap-4">
              <div>
                <h3 id="project-title" className="text-2xl font-semibold leading-tight tracking-tight">
                  <T t={active.title} />
                </h3>
                <p className="mt-1 text-muted">
                  <T t={active.client} />
                </p>
              </div>
              <button
                type="button"
                onClick={() => dialog.current?.close()}
                className="grid size-9 shrink-0 place-items-center text-muted hover:text-text"
                aria-label="Fechar / Close"
                autoFocus
              >
                <X size={20} aria-hidden />
              </button>
            </header>
            <section>
              <h4 className="mb-1.5 font-semibold">
                <T t={{ pt: "O problema", en: "The problem" }} />
              </h4>
              <p className="leading-relaxed text-muted">
                <T t={active.problem} />
              </p>
            </section>
            <section>
              <h4 className="mb-1.5 font-semibold">
                <T t={{ pt: "A solução", en: "The solution" }} />
              </h4>
              <p className="leading-relaxed text-muted">
                <T t={active.solution} />
              </p>
            </section>
            <section>
              <h4 className="mb-1.5 font-semibold">
                <T t={{ pt: "O que entreguei", en: "What I shipped" }} />
              </h4>
              <ul className="list-disc space-y-1.5 pl-5 leading-relaxed marker:text-muted">
                {active.highlights.map((h) => (
                  <li key={h.en}>
                    <T t={h} />
                  </li>
                ))}
              </ul>
            </section>
            <p className="text-sm text-muted">{active.stack.join(", ")}</p>
            <p className="border-t border-line pt-4 text-xs text-muted">
              <T
                t={{
                  pt: "Clientes anonimizados. O código e os dados pertencem a eles.",
                  en: "Clients anonymized. The code and data belong to them.",
                }}
              />
            </p>
          </article>
        )}
      </dialog>
    </>
  );
}
