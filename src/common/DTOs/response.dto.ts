import { BooleanType } from "../types/boolean.type";

export interface ResponseDTO<T> {
  isSuccess: BooleanType;
  code: string;
  message: string;
  count: number;
  data: T;
}
