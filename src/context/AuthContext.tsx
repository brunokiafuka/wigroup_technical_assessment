import AsyncStorage from '@react-native-community/async-storage';
import { navigate, Routes } from 'navigation/NavigationService';
import React from 'react';

interface IAuthContext {
  isLogged?: boolean;
  user?: string;
  setIsLogged?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = React.createContext<IAuthContext>({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [isLogged, setIsLogged] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<string>('');
  const checkUserLoggedIn = async () => {
    const user = await AsyncStorage.getItem('@username');

    if (user !== null) {
      setUser(user);
      setIsLogged(true);
      return;
    }
    setIsLogged(false);
  };

  React.useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged, user }}>
      {children}
    </AuthContext.Provider>
  );
};
