import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppContainer } from 'navigation/AppContainer';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AppContainer />
    </>
  );
}
