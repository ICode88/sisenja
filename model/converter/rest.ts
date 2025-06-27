import { PaginateEntity } from "@/entity/rest";
import { Paginate } from "../rest";

export const paginateToView = (paginate: PaginateEntity): Paginate => {
  return {
    page: paginate.page,
    size: paginate.size,
    totalItem: paginate.total_item,
    totalPage: paginate.total_page,
  };
};
