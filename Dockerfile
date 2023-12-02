FROM node:20.10-alpine3.17

WORKDIR /app

COPY --link package-lock.json package.json ./

RUN npm install --omit=dev

COPY . /app

RUN npm i --location=global serve@14.2.1

ENV NODE_ENV=production

RUN chown -R node:node /app

USER node

EXPOSE 3000

CMD ["serve", "-s", "dist"]