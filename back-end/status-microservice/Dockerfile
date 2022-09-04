FROM node:latest

WORKDIR /status-microservice

ENV PORT=5002
ENV AUTH_SERVICE=http://user_microservice:5001/auth
ENV MONGODB_URL=mongodb://statusDB:27017/statusDB

COPY ./package.json ./

RUN npm i

COPY . .

RUN npx tsc --outDir ./build/

EXPOSE 5002

CMD ["node", "."]