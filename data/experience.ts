import type { L10n } from "@/lib/i18n";

export const experience: { company: string; period: L10n; role: L10n; points: L10n[]; current?: boolean }[] = [
  {
    company: "Medialine",
    period: { pt: "2026 — atual", en: "2026 — present" },
    role: { pt: "Desenvolvedor Full-Stack", en: "Full-Stack Developer" },
    current: true,
    points: [
      { pt: "Plataformas headless em Next.js + Laravel, sites e e-commerces para clientes de diversos setores.", en: "Headless Next.js + Laravel platforms, websites and stores for clients across industries." },
      { pt: "Integrações com IA generativa, apps React Native e modernização de sistemas legados.", en: "Generative-AI integrations, React Native apps and legacy system modernization." },
    ],
  },
  {
    company: "Roko",
    period: { pt: "2024 — 2025", en: "2024 — 2025" },
    role: { pt: "Desenvolvedor de Software · projetos Electrolux", en: "Software Developer · Electrolux projects" },
    points: [
      { pt: "Serviços back-end em C# e .NET para processamento automatizado de dados operacionais em alto volume.", en: "C# and .NET back-end services for automated, high-volume operational data processing." },
      { pt: "Substituição de fluxos manuais por automações; Entity Framework, SQL Server e Azure com foco em performance e integridade.", en: "Replaced manual workflows with automation; Entity Framework, SQL Server and Azure focused on performance and integrity." },
    ],
  },
  {
    company: "Movanto",
    period: { pt: "2023", en: "2023" },
    role: { pt: "Desenvolvedor de Software", en: "Software Developer" },
    points: [
      { pt: "Soluções full-stack com C#, .NET e Blazor; serviços AWS e otimização de bancos MySQL.", en: "Full-stack solutions with C#, .NET and Blazor; AWS services and MySQL optimization." },
    ],
  },
  {
    company: "Safeweb Segurança da Informação",
    period: { pt: "2019 — 2022", en: "2019 — 2022" },
    role: { pt: "Desenvolvedor de Software", en: "Software Developer" },
    points: [
      { pt: "Produtos de segurança da informação com C#, .NET, Angular 14, TypeScript, SQL e Azure.", en: "Information-security products with C#, .NET, Angular 14, TypeScript, SQL and Azure." },
      { pt: "Design e integração de APIs entre sistemas internos.", en: "Designed and integrated APIs between internal systems." },
    ],
  },
  {
    company: "Prefeitura de Sapucaia do Sul — COMDICA",
    period: { pt: "2017 — 2018", en: "2017 — 2018" },
    role: { pt: "Estagiário de Desenvolvimento Web", en: "Web Development Intern" },
    points: [
      { pt: "Interfaces web responsivas com HTML, CSS e JavaScript.", en: "Responsive web interfaces with HTML, CSS and JavaScript." },
    ],
  },
];

export const education: { title: L10n; place: string; period: string }[] = [
  {
    title: { pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas", en: "Associate Degree in Systems Analysis and Development" },
    place: "Universidade LaSalle",
    period: "2022 — 2025",
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
  { pt: "Português — nativo", en: "Portuguese — native" },
  { pt: "Inglês — avançado", en: "English — advanced" },
];
