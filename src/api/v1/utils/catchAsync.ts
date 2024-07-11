import { TControllerFunction } from "@v1/types";
import { Request, Response, NextFunction } from "express";

export function catchAsync(fn: TControllerFunction) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err) => next(err));
  };
}
