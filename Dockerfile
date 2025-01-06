FROM node:22-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3020

CMD [ "serve", "-s", "dist/angular-ngrx-ts/browser", "-p", "3020" ]