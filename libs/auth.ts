import { cookies } from "next/headers";

export const setToken = ({ token }: { token: string }) => {
  const cookiesStore = cookies();
  cookiesStore.set("token", token);
};

export const getToken = () => {
  const cookiesStore = cookies();
  return cookiesStore.get("token");
};

export const isAuthenticated = () => {
  const token = getToken();
  if (token) return true;
  return false;
};
