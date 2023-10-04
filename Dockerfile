FROM node:20.8.0-alpine3.17

WORKDIR /app

COPY . /app

ENV NODE_ENV=production

RUN npm i --location=global serve@14.2.1

RUN npm i --omit=dev

EXPOSE 3000

CMD ["serve", "-s", "dist"]