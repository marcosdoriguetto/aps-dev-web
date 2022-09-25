import { createContext, useContext, useState } from "react";

const UserAuthContext = createContext({});

export function UserAuthProvider({ children }) {
  const [authToken, setAuthToken] = useState(localStorage.getItem("auth"));

  return (
    <UserAuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </UserAuthContext.Provider>
  );
}

export const useAuthToken = () => useContext(UserAuthContext);
