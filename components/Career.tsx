"use client";

import { useEffect, useRef, useState } from "react";
import { T } from "@/lib/i18n";
import { experience, techCategories, techCategory } from "@/data/experience";

const learnedAt = new Map(experience.flatMap((e, i) => e.learned.map((t) => [t, i] as const)));

export function Career() {
  // Index of the furthest step that has scrolled into view. Without JS every step shows as reached.
  const [reached, setReached] = useState(experience.length - 1);
  const list = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const steps = Array.from(list.current?.querySelectorAll<HTMLElement>(".step") ?? []);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      steps.forEach((s) => s.setAttribute("data-on", ""));
      return;
    }
    // The observer's first callback reports every step, so this also resets the no-JS default.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.setAttribute("data-on", "");
          io.unobserve(e.target);
        }
        setReached(steps.findLastIndex((s) => s.hasAttribute("data-on")));
      },
      { rootMargin: "0px 0px -35% 0px" },
    );
    steps.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const count = [...learnedAt.values()].filter((i) => i <= reached).length;
  const progress = reached < 0 ? 0 : (reached + 1) / experience.length;

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
      <ol ref={list} className="relative">
        <span className="absolute bottom-2 left-[5px] top-2 w-px bg-line" aria-hidden />
        <span
          className="absolute left-[5px] top-2 w-px origin-top bg-text transition-transform duration-700 ease-out"
          style={{ height: "calc(100% - 1rem)", transform: `scaleY(${progress})` }}
          aria-hidden
        />
        {experience.map((e, i) => (
          <li key={e.company} className="step relative pb-14 pl-9 last:pb-0">
            <span
              className={`absolute left-0 top-1.5 size-[11px] rounded-full border border-text transition-colors duration-500 ${i <= reached ? "bg-text" : "bg-bg"}`}
              aria-hidden
            />
            <p className="font-mono text-sm text-muted">
              {e.period}
              {e.current && (
                <>
                  –<T t={{ pt: "hoje", en: "now" }} />
                </>
              )}
            </p>
            <h3 className="mt-1 text-xl font-semibold">
              {e.company}
              <span className="font-normal text-muted">
                , <T t={e.role} />
              </span>
            </h3>
            <p className="mt-2 max-w-[56ch] leading-relaxed text-muted">
              <T t={e.summary} />
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-sm" aria-label="Tecnologias / Technologies">
              {e.learned.map((t, j) => (
                <li key={t} className={`tech syn-${techCategory[t]}`} style={{ "--i": j } as React.CSSProperties}>
                  {t}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <aside className="hidden lg:block" aria-hidden>
        <div className="sticky top-24 border border-line bg-surface p-5 font-mono text-sm">
          <p className="flex items-baseline justify-between border-b border-line pb-3 text-muted">
            <span>stack.json</span>
            <span className="tabular-nums text-text">{count}</span>
          </p>
          <dl className="mt-4 space-y-4">
            {techCategories.map((c) => (
              <div key={c.id}>
                <dt className="text-muted">
                  <T t={c.label} />
                </dt>
                <dd className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5">
                  {[...learnedAt]
                    .filter(([t]) => techCategory[t] === c.id)
                    .map(([t, i]) => (
                      <span key={t} className={`stack-item ${i <= reached ? `syn-${c.id}` : "text-line"}`}>
                        {t}
                      </span>
                    ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </aside>
    </div>
  );
}
