import {
  CreateUserEntity,
  DeleteUserEntity,
  GetUserEntity,
  ListUserEntity,
  UpdateUserEntity,
} from "@/entity/user";
import client from "@/libs/client";
import constant from "@/libs/constant";
import { encodeFromObject, LooseObject } from "@/libs/query";
import { paginateToView } from "@/model/converter/rest";
import { userToView } from "@/model/converter/user";
import {
  CreateUserRequest,
  CreateUserResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  GetUserRequest,
  GetUserResponse,
  ListUserRequest,
  ListUserResponse,
  ProfileUserResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  User,
} from "@/model/user";

const BE_SISENJA_URL = constant.BE_SISENJA_URL;

export const apiGetProfile = async (): Promise<ProfileUserResponse> => {
  try {
    const response = await client.get<GetUserEntity>(
      `${BE_SISENJA_URL}/users/profile`
    );

    const result: ProfileUserResponse = {
      data: userToView(response.data.data),
    };
    return result;
  } catch (error: unknown) {
    throw error;
  }
};

export const apiListUser = async ({
  page,
  size,
}: ListUserRequest): Promise<ListUserResponse> => {
  try {
    const query = encodeFromObject({ page, size });
    const response = await client.get<ListUserEntity>(
      `${BE_SISENJA_URL}/users?${query}`
    );

    const users: User[] = [];
    for (const user of response.data.data) {
      users.push(userToView(user));
    }

    const result: ListUserResponse = {
      data: users,
      paginate: paginateToView(response.data.paging),
    };

    return result;
  } catch (error: unknown) {
    throw error;
  }
};
export const apiGetUser = async ({
  id,
}: GetUserRequest): Promise<GetUserResponse> => {
  try {
    const response = await client.get<GetUserEntity>(
      `${BE_SISENJA_URL}/users/${id}`
    );

    const result: GetUserResponse = {
      data: userToView(response.data.data),
    };
    return result;
  } catch (error: unknown) {
    throw error;
  }
};

export const apiCreateUser = async (
  request: CreateUserRequest
): Promise<CreateUserResponse> => {
  try {
    const params: LooseObject = {
      name: request.name,
      username: request.username,
      password: request.password,
    };

    const response = await client.post<CreateUserEntity>(
      `${BE_SISENJA_URL}/users`,
      params
    );

    const result: CreateUserResponse = {
      data: userToView(response.data.data),
    };

    return result;
  } catch (error: unknown) {
    throw error;
  }
};

export const apiUpdateUser = async (
  request: UpdateUserRequest
): Promise<UpdateUserResponse> => {
  try {
    const params: LooseObject = {
      name: request.name,
      username: request.username,
    };
    const response = await client.put<UpdateUserEntity>(
      `${BE_SISENJA_URL}/users/${request.id}`,
      params
    );
    const result: UpdateUserResponse = {
      data: userToView(response.data.data),
    };
    return result;
  } catch (error: unknown) {
    throw error;
  }
};

export const apiDeleteUser = async ({
  id,
}: DeleteUserRequest): Promise<DeleteUserResponse> => {
  try {
    const response = await client.delete<DeleteUserEntity>(
      `${BE_SISENJA_URL}/users/${id}`
    );

    const result: DeleteUserResponse = {
      data: response.data.data,
    };

    return result;
  } catch (error: unknown) {
    throw error;
  }
};
