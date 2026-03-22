# Multi-stage Dockerfile para Next.js no padrão App Router
# 1. Dependências (deps)
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Instala as dependências estritas a partir do package-lock
COPY package.json package-lock.json ./
RUN npm ci

# 2. Construtor (builder)
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desativa telemetria durante o build
ENV NEXT_TELEMETRY_DISABLED 1

# Constrói o app Next.js
RUN npm run build

# 3. Rodador/Runner (produção)
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia os diretórios necessários
COPY --from=builder /app/public ./public

# Configura as permissões para a pasta standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Inicia o servidor stand-alone construído
CMD ["node", "server.js"]
