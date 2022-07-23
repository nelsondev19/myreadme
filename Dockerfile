FROM node:18.6.0-alpine

WORKDIR /app

COPY . /app

ENV NODE_ENV=production

RUN npm i --location=global serve@14.0.1

RUN npm i --omit=dev

EXPOSE 3000

CMD ["serve", "-s", "dist"]