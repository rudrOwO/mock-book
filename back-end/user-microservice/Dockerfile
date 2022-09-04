FROM node:latest

WORKDIR /user-microservice

ENV PORT=5001
ENV MONGODB_URL=mongodb://userDB:27017/userDB
ENV JWT_HASH_KEY=g39uohjgofdgu03u4gh84

COPY ./package.json ./

RUN npm i

COPY . .

RUN npx tsc --outDir ./build/

EXPOSE 5001  

CMD ["node", "."]