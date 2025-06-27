import { PaginateEntity, Entity } from "./rest";

export interface UserEntity {
  id: number;
  name: string;
  username: string;
  password: string;
  last_login: string;
  created_at: Date;
  updated_at: Date;
}

export interface ListUserEntity extends Entity<UserEntity[]> {
  data: UserEntity[];
  paging: PaginateEntity;
}

export interface GetUserEntity extends Entity<UserEntity> {}

export interface CreateUserEntity extends Entity<UserEntity> {}

export interface UpdateUserEntity extends Entity<UserEntity> {}

export interface DeleteUserEntity extends Entity<boolean> {}
