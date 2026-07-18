FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run build && npm test

FROM node:24-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app
RUN addgroup -S cleanital && adduser -S cleanital -G cleanital
COPY --from=build /app/dist ./dist
COPY --from=build /app/server ./server
COPY --from=build /app/scripts/prune-form-submissions.mjs ./scripts/prune-form-submissions.mjs
COPY package.json ./
RUN mkdir -p /var/lib/cleanital-website/submissions && chown -R cleanital:cleanital /var/lib/cleanital-website
USER cleanital
EXPOSE 4321
CMD ["node", "server/index.mjs"]
