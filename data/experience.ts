import type { L10n } from "@/lib/i18n";

export type TechCategory = "front" | "back" | "data" | "mobile" | "ai";

/** Category drives the syntax colour each technology gets on the page. */
export const techCategory: Record<string, TechCategory> = {
  HTML: "front",
  CSS: "front",
  JavaScript: "front",
  TypeScript: "front",
  Angular: "front",
  Blazor: "front",
  React: "front",
  "Next.js": "front",
  "Tailwind CSS": "front",
  Vue: "front",
  Livewire: "front",
  "C#": "back",
  ".NET": "back",
  "REST APIs": "back",
  "Entity Framework": "back",
  PHP: "back",
  Laravel: "back",
  PHPUnit: "back",
  "SQL Server": "data",
  Azure: "data",
  AWS: "data",
  MySQL: "data",
  PostgreSQL: "data",
  Redis: "data",
  Docker: "data",
  "React Native": "mobile",
  Expo: "mobile",
  "Google Gemini": "ai",
};

export const techCategories: { id: TechCategory; label: L10n }[] = [
  { id: "front", label: { pt: "Front-end", en: "Front-end" } },
  { id: "back", label: { pt: "Back-end", en: "Back-end" } },
  { id: "data", label: { pt: "Dados e cloud", en: "Data and cloud" } },
  { id: "mobile", label: { pt: "Mobile", en: "Mobile" } },
  { id: "ai", label: { pt: "IA", en: "AI" } },
];

/** Oldest first: each step lists what was new to me at that job. */
export const experience: { company: string; period: string; current?: boolean; role: L10n; summary: L10n; learned: string[] }[] = [
  {
    company: "Prefeitura de Sapucaia do Sul",
    period: "2017–2018",
    role: { pt: "Estagiário de desenvolvimento web", en: "Web development intern" },
    summary: { pt: "Primeiro trabalho: interfaces web responsivas para o COMDICA.", en: "First job: responsive web interfaces for COMDICA." },
    learned: ["HTML", "CSS", "JavaScript"],
  },
  {
    company: "Safeweb",
    period: "2019–2022",
    role: { pt: "Desenvolvedor de software", en: "Software developer" },
    summary: { pt: "Produtos de segurança da informação e APIs entre sistemas internos.", en: "Information-security products and APIs between internal systems." },
    learned: ["C#", ".NET", "Angular", "TypeScript", "SQL Server", "Azure", "REST APIs"],
  },
  {
    company: "Movanto",
    period: "2023",
    role: { pt: "Desenvolvedor de software", en: "Software developer" },
    summary: { pt: "Aplicações full-stack em Blazor, serviços AWS e otimização de MySQL.", en: "Full-stack Blazor apps, AWS services and MySQL tuning." },
    learned: ["Blazor", "AWS", "MySQL"],
  },
  {
    company: "Roko",
    period: "2024–2025",
    role: { pt: "Desenvolvedor de software", en: "Software developer" },
    summary: { pt: "Automação de processamento de dados em alto volume para a Electrolux.", en: "High-volume data processing automation for Electrolux." },
    learned: ["Entity Framework"],
  },
  {
    company: "Medialine",
    period: "2026",
    current: true,
    role: { pt: "Desenvolvedor full-stack", en: "Full-stack developer" },
    summary: { pt: "Plataformas headless, e-commerces, apps mobile e integrações com IA.", en: "Headless platforms, online stores, mobile apps and AI integrations." },
    learned: ["Next.js", "React", "Tailwind CSS", "PHP", "Laravel", "Livewire", "Vue", "PHPUnit", "PostgreSQL", "Redis", "Docker", "React Native", "Expo", "Google Gemini"],
  },
];

export const education: { title: L10n; place: string; period: string }[] = [
  {
    title: { pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas", en: "Associate Degree in Systems Analysis and Development" },
    place: "Universidade LaSalle",
    period: "2022–2025",
  },
  {
    title: { pt: "Técnico em Informática", en: "Technical Diploma in Information Technology" },
    place: "ULBRA São Lucas",
    period: "2017",
  },
];

export const certifications: { title: string; issuer: string }[] = [
  { title: "CS50: Introduction to Computer Science", issuer: "Harvard University (edX)" },
  { title: "Java Object-Oriented Programming", issuer: "LinkedIn" },
  { title: "Agile Software Development", issuer: "LinkedIn" },
  { title: "Git and GitHub", issuer: "Digital Innovation One" },
];

export const languages: L10n[] = [
  { pt: "Português nativo", en: "Native Portuguese" },
  { pt: "inglês avançado", en: "advanced English" },
];
