FROM node:20-alpine

ARG DEBIAN_FRONTEND=noninteractive
ARG NODE_ENV=prod
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

CMD ["node", "--unhandled-rejections=strict", "dist/index.js"]