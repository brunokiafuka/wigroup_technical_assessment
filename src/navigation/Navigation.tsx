import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, Routes } from './NavigationService';

// screens
import Main from 'screens/Main';
import Search from 'screens/Search';
import Wiki from 'screens/Wiki';
import WikiView from 'screens/WikiView';
import Auth from 'screens/Auth';
import { AuthProvider, useAuthContext } from '../context/AuthContext';
import Logged from 'screens/Logged';
import LoggedView from 'screens/LoggedView';

const Stack = createStackNavigator();

const RootStack = () => (
  <AuthProvider>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#F7F7F7' }
      }}
      initialRouteName={Routes.main}
    >
      <Stack.Screen name={Routes.wikiMain} component={Wiki} />
      <Stack.Screen name={Routes.searchMain} component={Search} />
      <Stack.Screen name={Routes.main} component={Main} />
      <Stack.Screen name={Routes.wikiView} component={WikiView} />
      <Stack.Screen name={Routes.auth} component={AuthStack} />
    </Stack.Navigator>
  </AuthProvider>
);

const AuthStack = () => {
  const { isLogged } = useAuthContext();

  if (!isLogged) {
    return <NotLoggedStack />;
  }
  return <LoggedStack />;
};

const NotLoggedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff', paddingHorizontal: 13 }
      }}
      initialRouteName={Routes.logged}
    >
      <Stack.Screen name={Routes.auth} component={Auth} />
    </Stack.Navigator>
  );
};

const LoggedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff', paddingHorizontal: 13 }
      }}
      initialRouteName={Routes.logged}
    >
      <Stack.Screen name={Routes.logged} component={Logged} />
      <Stack.Screen name={Routes.loggedView} component={LoggedView} />
    </Stack.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};
