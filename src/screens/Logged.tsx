import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RoutesStackParamList, Routes } from 'navigation/NavigationService';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FAB from 'components/FAB';

type LoggedScreen = StackScreenProps<RoutesStackParamList, Routes.logged>;

const Logged: React.FC<LoggedScreen> = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Storage</Text>
      <FAB />
    </SafeAreaView>
  );
};

export default Logged;

const styles = StyleSheet.create({});
