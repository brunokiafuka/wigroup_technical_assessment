import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  RoutesStackParamList,
  Routes,
  navigate
} from 'navigation/NavigationService';
import { Alert, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FAB from 'components/FAB';
import Input from 'components/Input';
import Button from 'components/Button';
import AsyncStorage from '@react-native-community/async-storage';
import { useAuthContext } from 'context/AuthContext';

type AuthScreen = StackScreenProps<RoutesStackParamList, Routes.auth>;

const AuthMain: React.FC<AuthScreen> = () => {
  const { setIsLogged, setUser } = useAuthContext();
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleAuth = async () => {
    if (username === '' || password === '') {
      Alert.alert('🔒', 'Please enter a username or password');
      return;
    }

    await AsyncStorage.setItem('@username', username);

    setIsLogged(true);
    setUser(username);
    return;
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Input
        icon="user"
        placeholder="username"
        onChangeText={(text: string) => setUsername(text)}
        autoCapitalize="none"
      />
      <Input
        icon="lock"
        placeholder="password"
        secureTextEntry
        onChangeText={(text: string) => setPassword(text)}
      />
      <Button onPress={handleAuth} label="login" />
      <FAB />
    </KeyboardAwareScrollView>
  );
};

export default AuthMain;

const styles = StyleSheet.create({});
