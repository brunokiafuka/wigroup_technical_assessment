import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RoutesStackParamList, Routes } from 'navigation/NavigationService';
import { Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderSearch from 'components/HeaderSearch';
import WebView from 'components/WebView';

import isURL from 'utils/isUrl';
import urlFixer from 'utils/urlFixer';
import { defaultURL } from 'constants';
import FAB from 'components/FAB';

type SearchScreen = StackScreenProps<RoutesStackParamList, Routes.searchMain>;

const Search: React.FC<SearchScreen> = ({ navigation }) => {
  const [url, setUrl] = React.useState<string>(defaultURL);
  const [uri, setUri] = React.useState<string>(defaultURL);

  const handleValidateURL = () => {
    if (!isURL(url)) {
      Alert.alert('Error', 'Please add a valid url');
      return;
    }

    setUri(urlFixer(url));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderSearch
        placeholder="enter url"
        onSearchPress={handleValidateURL}
        onChangeText={(url: string) => setUrl(url)}
        autoCapitalize="none"
        value={url}
        onSubmitEditing={handleValidateURL}
      />

      <WebView uri={uri} />

      <FAB />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
