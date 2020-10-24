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
import { AuthProvider } from '../context/AuthContext';

const Stack = createStackNavigator();

const RootStack = () => (
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
);

const AuthStack = () => (
  <AuthProvider>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff', paddingHorizontal: 13 }
      }}
      initialRouteName={Routes.auth}
    >
      <Stack.Screen name={Routes.auth} component={Auth} />
    </Stack.Navigator>
  </AuthProvider>
);

export const AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};
