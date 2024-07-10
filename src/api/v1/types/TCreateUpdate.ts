export type TCreateData<T> = Omit<
  T,
  | "id"
  | "_id"
  | "createdAt"
  | "updatedAt"
  | "deletedAt"
  | "created_at"
  | "updated_at"
  | "deleted_at"
>;

export type TUpdateData<T> = Partial<TCreateData<T>>;

export type Where<T> = Partial<T>;
