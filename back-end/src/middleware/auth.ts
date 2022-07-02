import type { Request } from "express";

interface SecureRequest extends Request {
  user: string;
}
