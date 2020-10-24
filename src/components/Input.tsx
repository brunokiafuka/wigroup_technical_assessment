import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

interface IProps {
  icon?: string;
  placeholder: string;
  [rest: string]: any;
}

const Input: React.FC<IProps> = ({ icon, placeholder, ...rest }) => {
  return (
    <View style={styles.content}>
      <Feather name={icon} size={18} color="black" />
      <TextInput style={styles.input} placeholder={placeholder} {...rest} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  content: {
    width: '100%',
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderRadius: 6,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: { fontSize: 16, flex: 1, marginHorizontal: 5 }
});
