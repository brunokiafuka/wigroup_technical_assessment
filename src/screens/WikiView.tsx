import { StackScreenProps } from '@react-navigation/stack';
import WebView from 'components/WebView';
import { RoutesStackParamList, Routes } from 'navigation/NavigationService';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type WikiViewScreen = StackScreenProps<RoutesStackParamList, Routes.wikiView>;

const WikiView: React.FC<WikiViewScreen> = ({ navigation, route }) => {
  navigation.setOptions({
    headerShown: true,
    headerTitle: route.params.title,
    headerBackTitleVisible: false,
    headerTintColor: '#000'
  });

  return <WebView uri={route.params.url} />;
};

export default WikiView;

const styles = StyleSheet.create({});
