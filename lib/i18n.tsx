export type Lang = "pt" | "en";
export type L10n = { pt: string; en: string };

/** Renders both languages; CSS keyed on html[data-lang] hides the inactive one. */
export function T({ t }: { t: L10n }) {
  return (
    <>
      <span data-l="pt" lang="pt-BR">
        {t.pt}
      </span>
      <span data-l="en" lang="en">
        {t.en}
      </span>
    </>
  );
}

const PREFS_SCRIPT = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';d.dataset.theme=t;var l=localStorage.getItem('lang');if(!l){l=(navigator.language||'').toLowerCase().indexOf('pt')===0?'pt':'en'}d.dataset.lang=l;d.lang=l==='en'?'en':'pt-BR'}catch(e){d.dataset.lang='pt'}})();`;

/** Applies saved theme and language before first paint. */
export function PrefsScript() {
  return <script dangerouslySetInnerHTML={{ __html: PREFS_SCRIPT }} />;
}
