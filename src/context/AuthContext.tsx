import React from 'react';

interface IAuthContext {
  setIsLogged?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = React.createContext<IAuthContext>({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [isLogged, setIsLogged] = React.useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
