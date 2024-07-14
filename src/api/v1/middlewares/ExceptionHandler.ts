import type { Request, Response, NextFunction } from "express";
import { CustomError, HttpStatusCodes } from "@v1/utils";

const ExceptionFactory = (err: Error, res: Response) => {
  if (err instanceof CustomError) {
    const { statusCode, errors } = err;
    return res.status(statusCode).send({
      errors: errors.map((error) => {
        return { message: error };
      }),
    });
  }
  return null;
};

export const ExceptionHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const handledError = ExceptionFactory(err, res);
  if (handledError) return handledError;
  console.error("Unhandled exception:", JSON.stringify(err, null, 2));
  return res
    .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
    .send({ errors: [{ message: "Internal server error" }] });
};
