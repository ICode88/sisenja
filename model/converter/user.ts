import { UserEntity } from "@/entity/user";
import { User } from "../user";

export const userToView = (user: UserEntity): User => {
  return {
    id: user.id,
    name: user.name,
    username: user.username,
    password: user.password,
    lastLogin: user.last_login,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
  };
};
