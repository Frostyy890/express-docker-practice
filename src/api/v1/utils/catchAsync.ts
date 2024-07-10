import { TControllerFunction, TController } from "@v1/types";
import { Request, Response, NextFunction } from "express";

export function catchAsync(fn: TControllerFunction) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err) => next(err));
  };
}

export class UserController implements TController {
  constructor() {}
  async findMany(req: Request, res: Response) {
    throw new Error("Not implemented");
  }
}
