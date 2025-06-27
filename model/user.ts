import { Paginate } from "./rest";

export interface User {
  id: number;
  name: string;
  username: string;
  password: string;
  lastLogin?: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface ProfileUserResponse {
  data: User;
}

export interface ListUserRequest {
  page: number;
  size: number;
}

export interface ListUserResponse {
  data: User[];
  paginate: Paginate;
}

export interface CreateUserRequest {
  name: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface CreateUserResponse {
  data: User;
}

export interface GetUserRequest {
  id: number;
}

export interface GetUserResponse {
  data: User;
}

export interface UpdateUserRequest {
  id: number;
  name: string;
  username: string;
}

export interface UpdateUserResponse {
  data: User;
}

export interface DeleteUserRequest {
  id: number;
}

export interface DeleteUserResponse {
  data: boolean;
}
