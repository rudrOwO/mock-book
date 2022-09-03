FROM node:latest

WORKDIR /user-microservice

COPY ./package*.json ./

RUN npm i

COPY . .

RUN npx tsc --outDir ./build/

EXPOSE 5001 

CMD ["node", "."]