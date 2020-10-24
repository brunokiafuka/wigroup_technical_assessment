import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EmptyListItem = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>No results found or not search initialized</Text>
    </View>
  );
};

export default EmptyListItem;

const styles = StyleSheet.create({});
