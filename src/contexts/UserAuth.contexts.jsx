import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const UserAuthContext = createContext({});

export function UserAuthProvider({ children }) {
  const [authToken, setAuthToken] = useState(localStorage.getItem("auth"));

  useEffect(() => {
    if (authToken) {
      localStorage.setItem('auth', authToken)
    }

  }, [authToken])

  return (
    <UserAuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </UserAuthContext.Provider>
  );
}

export const useAuthToken = () => useContext(UserAuthContext);
