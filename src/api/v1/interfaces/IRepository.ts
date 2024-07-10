import { TCreateData, TUpdateData, Where } from "@v1/types";
export interface IRepository<TInput, TOutput> {
  findMany: (limit?: number, offset?: number) => Promise<TOutput[]>;
  findOne: (where: Where<TOutput>) => Promise<TOutput>;
  create: (data: TCreateData<TInput>) => Promise<TOutput>;
  update: (where: Where<TOutput>, data: TUpdateData<TInput>) => Promise<TOutput>;
  delete: (where: Where<TOutput>) => Promise<void>;
}
