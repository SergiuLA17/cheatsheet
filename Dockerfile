FROM node:18-alpine

WORKDIR  /usr/app

COPY package*.json ./
COPY yarn*.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]