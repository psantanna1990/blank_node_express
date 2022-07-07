FROM node:lts-alpine

WORKDIR /app

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]