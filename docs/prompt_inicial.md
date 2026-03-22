Gerar um projeto Next.js com TypeScript seguindo padrões de arquitetura profissional.  
Todo o código deve ser **comentado em português**, com explicações didáticas para programadores júnior.

## Requisitos Técnicos

### Infraestrutura
- Versionamento usando git.
- Aplicação containerizada com **Docker**.
- Criar `Dockerfile` otimizado para produção (multi-stage).
- Criar `docker-compose.yml` contendo:
  - Serviço `app` (Next.js)
  - Serviço `db` (PostgreSQL)
  - Configuração de hostname usando **nip.io**.

### Estilo Global e UI
- Configurar tema **light/dark** via Tailwind ou Context API.
- Fonte padrão: **Roboto 300**.
- Layout responsivo.
- Criar estrutura em `/src/components/layout` contendo:
  - `Header`: título alinhado à esquerda, avatar/perfil à direita.
  - `Sidebar`: fixa à esquerda, responsiva, com ícone sanduíche para mobile.
  - `Content`: wrapper para páginas.
  - `Footer`: minimalista, apenas copyrights.
- Criar `GlobalStyles` com reset + variáveis de tema.
- Criar Styles para cada component do leyout em `/src/components/layout`.

### Arquitetura
- Estrutura base em `/src`:
  - `/components`
  - `/layout`
  - `/hooks`
  - `/lib`
  - `/styles`
  - `/pages` ou `/app` (dependendo da versão do Next)
- Configurar aliases no `tsconfig.json` (`@components`, `@lib`, etc.).
- Habilitar `strict: true` no TypeScript.

### Banco de Dados
- Instalar e configurar **Prisma**.
- Conectar ao PostgreSQL via variável de ambiente. (.env)
- Criar `schema.prisma` inicial **vazio**, apenas datasource + generator.
- Incluir comentários explicativos sobre cada parte da configuração.

### Páginas iniciais
Criar páginas:
- `/` (home)
- `/testes`
- `/configuracoes`

Cada página deve:
- Usar o layout global.
- Usar o layout da pagina.
- Ter sua pasta de components propia em /components`/pages` ou `/app`/styleNomedaPage
- Conter comentários detalhados explicando fluxo de renderização.

### Testes
- Configurar Jest ou Vitest.
- Criar testes básicos para:
  - Layout
  - Componentes principais
  - Funções utilitárias
  - Criar um Script de rotina de testes

### Documentação interna
- Todos os arquivos devem conter:
  - Comentários explicando funções, variáveis, interfaces e props.
  - Explicações sobre decisões arquiteturais.
  - Notas sobre boas práticas aplicadas.
  - README.md detalhado.

## Entregáveis
- Estrutura completa do projeto.
- Código limpo, modular e totalmente comentado.
- Docker + docker-compose funcionais.
- Prisma configurado e conectado.
- Layout responsivo implementado.
- Tema global configurado.
- Páginas iniciais criadas.
- Testes básicos configurados.