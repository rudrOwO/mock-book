/// <reference path="../node_modules/@types/node/process.d.ts" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly PORT: string;
      readonly HOST: string;
      readonly MONGODB_URL: string;
      readonly JWT_HASH_KEY: string;
    }
  }
}

export {};
