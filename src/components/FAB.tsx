import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { boxShadow } from 'constants';
import { navigate, Routes } from 'navigation/NavigationService';

const FAB = () => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigate(Routes.main)}
  >
    <Feather name="home" color="#fff" size={24} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
    bottom: 20,
    right: 10,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 20,
    ...boxShadow
  }
});

export default FAB;
