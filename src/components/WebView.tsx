import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text, Alert } from 'react-native';
import { WebView as RNWebView } from 'react-native-webview';

interface IProps {
  uri: string;
}

const WebView = ({ uri }) => {
  return (
    <RNWebView
      source={{
        uri
      }}
      domStorageEnabled={true}
      scalesPageToFit={true}
      pullToRefreshEnabled
      renderLoading={() => (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator />
        </View>
      )}
      renderError={() => (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>😢</Text>
          <Text>Please enter a valid url</Text>
        </View>
      )}
    />
  );
};

export default WebView;

const styles = StyleSheet.create({});
