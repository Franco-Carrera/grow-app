import React, { useState } from "react";

const Context = React.createContext();

export const UserContextProvider = ({ children }) => {
  console.log(children);
  const [user, setUser] = useState();

  const login = (objUser) => {
    setUser(objUser.username);
  };

  const logout = () => {
    setUser();
  };

  return (
    <Context.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
