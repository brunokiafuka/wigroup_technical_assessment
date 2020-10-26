import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RoutesStackParamList, Routes } from 'navigation/NavigationService';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FAB from 'components/FAB';

type LoggedViewScreen = StackScreenProps<
  RoutesStackParamList,
  Routes.loggedView
>;

const LoggedView: React.FC<LoggedViewScreen> = ({ navigation }) => {
  navigation.setOptions({
    headerShown: true,
    headerBackTitleVisible: false,
    headerTintColor: '#000',
    headerTitle: 'Screen 3'
  });
  return <SafeAreaView style={{ flex: 1 }}></SafeAreaView>;
};

export default LoggedView;

const styles = StyleSheet.create({});
