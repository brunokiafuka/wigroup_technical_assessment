import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

interface IProps {
  placeholder: string;
  onSearchPress: () => void;
  [rest: string]: any;
}

const HeaderSearch: React.FC<IProps> = ({
  placeholder,
  onSearchPress,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          placeholder={placeholder}
          {...rest}
          keyboardType="web-search"
        />
      </View>
      <TouchableOpacity onPress={onSearchPress} style={{ marginLeft: 10 }}>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 13,
    paddingVertical: 10,
    alignItems: 'center'
  },
  content: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderRadius: 6
  }
});
