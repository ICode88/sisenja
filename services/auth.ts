import { LoginEntity } from "@/entity/auth";
import client from "@/libs/client";
import constant from "@/libs/constant";
import { LoginRequest, LoginResponse } from "@/model/auth";

const BE_SISENJA_URL = constant.BE_SISENJA_URL;

export const login = async (params: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await client.post<LoginEntity>(
      `${BE_SISENJA_URL}/users/login`,
      params
    );
    return response.data.data;
  } catch (error: unknown) {
    throw error;
  }
};
