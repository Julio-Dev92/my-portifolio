import type { L10n } from "@/lib/i18n";

export const profile = {
  name: "Julio Junior Saldanha Alegre",
  shortName: "Julio Saldanha",
  role: { pt: "Desenvolvedor Full-Stack", en: "Full-Stack Developer" } satisfies L10n,
  location: { pt: "Porto Alegre, Brasil", en: "Porto Alegre, Brazil" } satisfies L10n,
  availability: {
    pt: "Aberto a vagas remotas e realocação para a Europa",
    en: "Open to remote roles and relocation to Europe",
  } satisfies L10n,
  headline: {
    pt: "Construo produtos web de ponta a ponta, da modelagem do banco à interface que o cliente usa.",
    en: "I build web products end to end, from the database schema to the interface customers use.",
  } satisfies L10n,
  summary: [
    {
      pt: "Desenvolvo software profissionalmente desde 2019, com passagens pela Safeweb, Movanto e Roko, onde atuei em projetos estratégicos para a Electrolux. Comecei no ecossistema .NET/C# com Angular e Blazor, e hoje trabalho em uma agência digital entregando plataformas para clientes de saúde, indústria, varejo e serviços.",
      en: "I've been building software professionally since 2019, at Safeweb, Movanto and Roko, where I worked on strategic projects for Electrolux. I started in the .NET/C# ecosystem with Angular and Blazor, and today I work at a digital agency shipping platforms for healthcare, industrial, retail and service clients.",
    },
    {
      pt: "Meu dia a dia mistura front-end moderno (Next.js, React, Tailwind), back-end em Laravel e .NET, apps mobile com React Native, modernização de sistemas legados e integrações com IA generativa. Gosto de código simples, bem testado e de entender o problema do negócio antes de abrir o editor.",
      en: "My day-to-day mixes modern front-end (Next.js, React, Tailwind), Laravel and .NET back-ends, React Native mobile apps, legacy modernization and generative-AI integrations. I like simple, well-tested code and understanding the business problem before opening the editor.",
    },
  ] satisfies L10n[],
  contacts: {
    email: "julio.junior.301@gmail.com",
    phone: "+55 51 99216-7233",
    whatsapp: "https://wa.me/5551992167233",
    linkedin: "https://www.linkedin.com/in/juliojunior-saldanha-alegre",
    github: "https://github.com/Julio-Dev92",
  },
  resume: "/julio-saldanha-resume-en.pdf",
  /** Portrait in /public (4:5). The hero falls back to a single column while unset. */
  photo: null as string | null,
};

export const stack: { group: L10n; items: string[] }[] = [
  {
    group: { pt: "Front-end", en: "Front-end" },
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Angular", "Blazor", "Vue", "Livewire", "HeroUI", "SCSS"],
  },
  {
    group: { pt: "Back-end", en: "Back-end" },
    items: ["C# / .NET", "Entity Framework", "PHP / Laravel", "NestJS", "Prisma", "REST APIs", "JWT"],
  },
  {
    group: { pt: "Mobile", en: "Mobile" },
    items: ["React Native", "Expo"],
  },
  {
    group: { pt: "Dados & Cloud", en: "Data & Cloud" },
    items: ["SQL Server", "MySQL", "PostgreSQL", "Redis", "Azure", "AWS", "Docker"],
  },
  {
    group: { pt: "IA & Ferramentas", en: "AI & Tooling" },
    items: ["Google Gemini", "Claude Code", "Git", "PHPUnit", "Scrum"],
  },
];
