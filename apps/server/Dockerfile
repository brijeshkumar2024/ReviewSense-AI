FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
COPY apps/server/package.json ./apps/server/
COPY apps/server/tsconfig.json ./apps/server/
COPY tsconfig.base.json ./
COPY apps/server/src ./apps/server/src
RUN npm install
RUN npm run build --workspace=apps/server

FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/apps/server/dist ./dist
COPY apps/server/package.json ./package.json
RUN npm install --omit=dev
EXPOSE 4000
CMD ["node", "dist/index.js"]
