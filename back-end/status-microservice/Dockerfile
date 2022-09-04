FROM node:latest

WORKDIR /status-microservice

COPY ./package*.json ./

RUN npm i

COPY . .

RUN npx tsc --outDir ./build/

EXPOSE 5002

CMD ["node", "."]