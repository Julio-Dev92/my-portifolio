# Portfólio — Julio Saldanha

Portfólio pessoal estático em **Next.js 16 + Tailwind CSS 4**, bilíngue (PT/EN) e com tema claro/escuro.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera o export estático em out/
```

## Editando o conteúdo

Todo o texto fica em `data/`:

- `data/profile.ts` — nome, resumo, contatos, stack
- `data/projects.ts` — projetos (clientes anonimizados) e categorias do filtro
- `data/experience.ts` — experiência, formação, certificações, idiomas

Cada texto é um objeto `{ pt, en }`; o componente `T` (`lib/i18n.tsx`) renderiza os dois idiomas e o CSS esconde o inativo. As ilustrações de cada projeto ficam em `components/Mockups.tsx`. O currículo baixável é `public/julio-saldanha-resume-en.pdf`.

## Deploy na Vercel

1. Suba este repositório para o GitHub.
2. Na Vercel: **Add New → Project**, importe o repositório.
3. Framework detectado: Next.js. Não precisa de variáveis de ambiente. Clique em **Deploy**.
