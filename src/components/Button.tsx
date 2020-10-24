import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { boxShadow } from 'constants';

const Button = ({ onPress, label }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 6,
    ...boxShadow,
    marginTop: 20
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 14
  }
});

export default Button;
