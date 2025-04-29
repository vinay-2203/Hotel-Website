import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (email) => {
    setIsLoggedIn(true);
    setIsAdmin(email === "cr.vinay8448@gmail.com");
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, isAdmin, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
