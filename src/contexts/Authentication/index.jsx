import React, { createContext, useEffect, useState } from 'react';
import { api } from '../../service/api';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'icast.token': token } = parseCookies();
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      api.get('auth/session').then((response) => {
        setUser(response.data);
      });
    }
  }, []);

  useEffect(() => {
    if(user) {
      setRole(user.role);
    }
  }, [user])

  async function signIn({ email, password }) {
    const response = await api.post('/auth', { email, password });

    const { token, user } = response.data;

    if (token && user) {
      setCookie(undefined, 'icast.token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(user);;
    }
  }

  async function logOut() {
    destroyCookie(undefined, 'icast.token');

    api.defaults.headers.common['Authorization'] = '';

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        logOut,
        role,
        setRole
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
