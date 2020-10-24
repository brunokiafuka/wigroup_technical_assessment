import React from 'react';
import { StyleSheet } from 'react-native';
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
    />
  );
};

export default WebView;

const styles = StyleSheet.create({});
