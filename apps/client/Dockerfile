FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
COPY apps/client/package.json ./apps/client/
COPY apps/client/tsconfig.json ./apps/client/
COPY tsconfig.base.json ./
COPY apps/client/src ./apps/client/src
COPY apps/client/public ./apps/client/public
COPY apps/client/tailwind.config.js ./apps/client/
COPY apps/client/postcss.config.js ./apps/client/
RUN npm install
RUN npm run build --workspace=apps/client

FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/apps/client/dist ./dist
RUN npm install -g serve
EXPOSE 4173
CMD ["serve", "-s", "dist", "-l", "4173"]
