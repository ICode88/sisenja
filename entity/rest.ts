export interface Entity<T> {
  data: T;
}

export interface PaginateEntity {
  page: number;
  size: number;
  total_item: number;
  total_page: number;
}
