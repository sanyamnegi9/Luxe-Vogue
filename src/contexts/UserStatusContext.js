import { createContext, useState } from "react";

export const UserStatusContext = createContext();

const UserStatusProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserStatusContext.Provider value={{ user, setUser }}>
      {children}
    </UserStatusContext.Provider>
  );
};

export default UserStatusProvider;
