/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null });

  const login = (user) => {
    setAuth({ user });
  };

  const logout = () => {
    setAuth({ user: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};