ARG NODE_VERSION=21.6.0

FROM node:${NODE_VERSION}-alpine AS base    

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm ci && npm run build