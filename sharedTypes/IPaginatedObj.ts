export interface IPaginatedObj<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
}
