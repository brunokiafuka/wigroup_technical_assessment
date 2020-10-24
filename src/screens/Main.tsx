import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  RoutesStackParamList,
  Routes,
  navigate
} from 'navigation/NavigationService';
import { Dimensions, StyleSheet, Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import apps from 'config/apps';
import { boxShadow } from 'constants';

type MainScreen = StackScreenProps<RoutesStackParamList, Routes.main>;

const boxSize = Dimensions.get('window').width / 2 - 26;

const Main: React.FC<MainScreen> = () => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={apps}
      keyExtractor={item => String(item.label)}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate(item.path)}
        >
          <FontAwesome name={item.icon} size={40} color="black" />
          <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#fff',
    width: boxSize,
    height: boxSize,
    margin: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    ...boxShadow
  },
  text: { fontSize: 14, fontWeight: 'bold', marginTop: 10 }
});
