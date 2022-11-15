import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const UserAuthContext = createContext({});

export function UserAuthProvider({ children }) {
  const [auth, setAuth] = useState(localStorage.getItem("auth"));
  const authToken = auth && JSON.parse(auth).token;

  useEffect(() => {
    if (auth) {
      localStorage.setItem("auth", auth);
    }
  }, [auth]);

  return (
    <UserAuthContext.Provider value={{ auth, setAuth, authToken }}>
      {children}
    </UserAuthContext.Provider>
  );
}

export const useAuth = () => useContext(UserAuthContext);
