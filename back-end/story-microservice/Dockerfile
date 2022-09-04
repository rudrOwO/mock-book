FROM node:latest

WORKDIR /story-microservice

COPY ./package*.json ./

RUN npm i

COPY . .

RUN npx tsc --outDir ./build/

EXPOSE 5003

CMD ["node", "."]