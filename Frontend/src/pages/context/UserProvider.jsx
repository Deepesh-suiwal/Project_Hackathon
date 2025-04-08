import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [userLoading, setUserLoading] = useState(true);

  async function userFetchStatus() {
    try {
      setUserLoading(true);
      const response = await axios.get("", {
        withCredentials: true,
      });
      if (response.status === 200) {
        setIsUserAuthenticated(true);
      }
    } catch (error) {
      console.log(error);
      setIsUserAuthenticated(false);
    } finally {
      setUserLoading(false);
    }
  }

  useEffect(() => {
    userFetchStatus();
  }, []);

  return (
    <UserContext.Provider
      value={{
        isUserAuthenticated,
        userLoading,
        userFetchStatus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useAuthUser() {
  return useContext(UserContext);
}

export default UserProvider;
