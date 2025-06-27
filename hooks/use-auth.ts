import { User } from "@/model/user";
import { apiGetProfile } from "@/services/user";
import { setCookies } from "cookies-next"; 
import { useCallback, useEffect, useState } from "react";
import debounce from "debounce";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getProfile = debounce(async () => {
      try {
        const response = await apiGetProfile();
        setUser(response.data);
      } catch (error: any) {
        console.log(error.message);
      }
    }, 500);

    getProfile();
  }, []);

  const removeUser = useCallback(() => {
    setUser(null);
    setCookies("token", "", { maxAge: 0, path: "/" });
  }, [setUser]);

  return { user, removeUser, setUser };
};
