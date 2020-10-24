import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RoutesStackParamList, Routes } from 'navigation/NavigationService';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FAB from 'components/FAB';
import Input from 'components/Input';
import Button from 'components/Button';

type AuthScreen = StackScreenProps<RoutesStackParamList, Routes.auth>;

const AuthMain: React.FC<AuthScreen> = () => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Input icon="user" placeholder="username" />
      <Input icon="lock" placeholder="password" secureTextEntry />
      <Button onPress={() => {}} label="login" />
      <FAB />
    </KeyboardAwareScrollView>
  );
};

export default AuthMain;

const styles = StyleSheet.create({});
