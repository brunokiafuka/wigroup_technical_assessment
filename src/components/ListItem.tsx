import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ListItem = ({ onPress, title, subTitle }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={{ flex: 1 }}>
        <Text>{title}</Text>
        <Text style={{ fontSize: 12, color: '#999' }} numberOfLines={1}>
          {subTitle}
        </Text>
      </View>

      <Ionicons name="ios-arrow-forward" size={20} color="black" />
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row'
  }
});
