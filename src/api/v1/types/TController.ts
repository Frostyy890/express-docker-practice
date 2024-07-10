import type { Request, Response, NextFunction } from "express";

export type TCRUDOperation =
  | "findMany"
  | "findOne"
  | "findById"
  | "create"
  | "update"
  | "updateById"
  | "delete"
  | "deleteById";

export type TControllerFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

export type TController = Partial<Record<TCRUDOperation, TControllerFunction>>;
