FROM node:16.16.0-alpine3.15

WORKDIR /app

COPY . /app

ENV NODE_ENV=production

RUN npm i -g npm@8.15.0

RUN npm i --omit=dev

EXPOSE 3000

CMD ["serve", "-s", "dist"]