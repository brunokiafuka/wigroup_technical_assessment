import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  RoutesStackParamList,
  Routes,
  navigate
} from 'navigation/NavigationService';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FAB from 'components/FAB';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useAuthContext } from 'context/AuthContext';
import Button from 'components/Button';

type LoggedScreen = StackScreenProps<RoutesStackParamList, Routes.logged>;

const Logged: React.FC<LoggedScreen> = ({ navigation }) => {
  const { setIsLogged, user } = useAuthContext();

  navigation.setOptions({
    headerShown: true,
    headerLeft: null,
    headerTitle: null,
    headerRight: () => (
      <TouchableOpacity onPress={handleLogout} style={{ marginRight: 10 }}>
        <Text>Log out</Text>
      </TouchableOpacity>
    )
  });

  const handleLogout = async () => {
    await AsyncStorage.removeItem('@username');
    setIsLogged(false);
  };
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Text>{`Welcome @${user}`}</Text>
      <Button onPress={() => navigate(Routes.loggedView)} label="Open screen" />
      <FAB />
    </SafeAreaView>
  );
};

export default Logged;

const styles = StyleSheet.create({});
