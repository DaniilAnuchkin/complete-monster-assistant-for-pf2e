import { IPagination } from "./IPagination";
import { ISort } from "./ISort";

export interface IFetchAllReq extends IPagination, ISort {
  search?: string;
}
