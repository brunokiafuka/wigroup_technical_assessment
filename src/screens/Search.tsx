import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RoutesStackParamList, Routes } from 'navigation/NavigationService';
import { Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderSearch from 'components/HeaderSearch';
import WebView from 'components/WebView';
import _ from 'lodash';

import isURL from 'utils/isUrl';
import urlFixer from 'utils/urlFixer';
import { defaultURL } from 'constants';
import FAB from 'components/FAB';

type SearchScreen = StackScreenProps<RoutesStackParamList, Routes.searchMain>;

const Search: React.FC<SearchScreen> = ({ navigation }) => {
  const [url, setUrl] = React.useState<string>(defaultURL);
  const [uri, setUri] = React.useState<string>(defaultURL);

  const handleSearchOnSubmit = () => {
    if (!isURL(url)) {
      Alert.alert('Error', 'Please add a valid url');
      return;
    }

    setUri(urlFixer(url));
  };

  const debounceSearch = _.debounce(
    (searchTerm: string) => {
      if (!isURL(searchTerm)) {
        return;
      }

      setUrl(searchTerm);

      setUri(urlFixer(searchTerm));
    },
    1000,
    { maxWait: 5000 }
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderSearch
        placeholder="enter url"
        onChangeText={(text: string) => debounceSearch(text)}
        autoCapitalize="none"
        onSubmitEditing={handleSearchOnSubmit}
      />

      <WebView uri={uri} />

      <FAB />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
