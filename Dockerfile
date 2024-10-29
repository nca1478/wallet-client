# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.12.0
FROM node:${NODE_VERSION}-alpine AS deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

FROM node:${NODE_VERSION}-alpine AS build
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN npm run build
RUN npm ci -f --only=production && npm cache clean --force

FROM node:${NODE_VERSION}-alpine AS prod
WORKDIR /usr/src/app
USER node
COPY --from=deps /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
ENV NODE_ENV=production
EXPOSE 4000
CMD npm start
