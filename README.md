# Projeto GFP System 🚀

Este é um projeto gerado a partir das instruções do *prompt inicial*, estruturado de maneira detalhada e voltado para ser uma refêrencia para **Programadores Júnior** entenderem como funciona uma arquitetura Next.js profissional na prática.

## 🎯 Arquitetura
A aplicação foi construída com:
- **Next.js (App Router)**: Utilizamos a nova estrutura baseada na pasta `src/app/` que permite componentização no servidor.
- **Tailwind CSS v4**: Utilizamos o novo `@tailwindcss/postcss` com variáveis baseadas em `@theme inline` dentro do `globals.css` definindo os modos Light/Dark.
- **Prisma ORM**: Acesso simplificado e seguro ao banco de dados `PostgreSQL`. A pasta `prisma/` contém um mapa do banco de dados (schema).
- **TypeScript**: Habilitado em modo restrito estrito (`strict: true`) junto dos alias de importação (`@/components`, `@/lib`).
- **Testes com Vitest**: Sistema muito rápido embutido nativamente com o ecossistema Vite junto da lib `@testing-library/react`.

---

## 🏗️ Estrutura de Pastas
Para facilitar o desenvolvimento, os componentes principais de interface foram movidos para:
- `/src/components/layout/Header.tsx`
- `/src/components/layout/Sidebar.tsx`
- `/src/components/layout/Content.tsx`
- `/src/components/layout/Footer.tsx`

Estas peças são combinadas de maneira fluida pelo Layout Raiz (`/src/app/layout.tsx`). Foram geradas páginas em rotas dedicadas (`/` em `Home`, `/testes` e `/configuracoes`). Todo e qualquer componente é documentado em **Português**.

---

## 🐳 Inicializando com Docker e Localmente
Temos a orquestração multi-ambientes pronta no `docker-compose.yml`:
1. **Banco de Dados (PostgreSQL)** exposto na rota 5432.
2. **Setup do Prisma**: Depois do banco inciar, basta rodar localmente `npx prisma db push` para estabelecer o schema.
3. Para inciar o Docker: 
   ```bash
   docker-compose up -d
   ```

### Rodar projeto separadamente no modo dev:
```bash
npm install
npm run dev
```

### Para efetuar o Build (Produção):
O `Dockerfile` inclui múltiplos estágios simulando o workflow profissional sem expor arquivos de desenvolvedor na imagem final.

## ✅ Rodando os Testes
Nossos testes garantem a integridade visual sem quebrar:
```bash
npm run test
```
A arquitetura GFP está montada para ser uma espinha dorsal escalável, mantenha as regras estabelecidas de limpeza de código!
