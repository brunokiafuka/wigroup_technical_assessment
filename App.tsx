import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Navigation } from 'navigation/Navigation';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Navigation />
    </>
  );
}
