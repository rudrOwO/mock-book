/// <reference path="../node_modules/@types/node/process.d.ts" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly PORT: string;
      readonly MINIO_PORT: string;
      readonly HOST: string;
      readonly MONGODB_URL: string;
      readonly MINIO_ACCESS_KEY: string;
      readonly MINIO_SECRET_KEY: string;
      readonly JWT_HASH_KEY: string;
    }
  }
}

export {};
