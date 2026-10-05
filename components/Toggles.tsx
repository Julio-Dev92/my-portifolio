"use client";

import { Languages, Moon, Sun } from "lucide-react";

function save(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

const btn =
  "inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface px-3 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-text";

export function LangToggle() {
  function toggle() {
    const d = document.documentElement;
    const next = d.dataset.lang === "en" ? "pt" : "en";
    d.dataset.lang = next;
    d.lang = next === "en" ? "en" : "pt-BR";
    save("lang", next);
  }
  return (
    <button type="button" onClick={toggle} className={btn} aria-label="Mudar idioma / Switch language">
      <Languages size={14} aria-hidden />
      <span data-l="pt">EN</span>
      <span data-l="en">PT</span>
    </button>
  );
}

export function ThemeToggle() {
  function toggle() {
    const d = document.documentElement;
    const current =
      d.dataset.theme ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    d.dataset.theme = next;
    save("theme", next);
  }
  return (
    <button type="button" onClick={toggle} className={btn} aria-label="Alternar tema / Toggle theme">
      <Sun size={14} aria-hidden className="hidden [html[data-theme=dark]_&]:block" />
      <Moon size={14} aria-hidden className="[html[data-theme=dark]_&]:hidden" />
    </button>
  );
}
