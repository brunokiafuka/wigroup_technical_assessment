import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  RoutesStackParamList,
  Routes,
  navigate
} from 'navigation/NavigationService';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderSearch from 'components/HeaderSearch';
import wikiBaseUrl from 'config/axios';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import ListItem from 'components/ListItem';
import EmptyListItem from 'components/EmptyListItem';
import FAB from 'components/FAB';

type WikiScreen = StackScreenProps<RoutesStackParamList, Routes.wikiMain>;

const Wiki: React.FC<WikiScreen> = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [results, setResults] = React.useState([]);

  navigation.setOptions({
    headerShown: false
  });

  const handleDataFetch = async () => {
    const { data } = await wikiBaseUrl.get('/', {
      params: {
        action: 'opensearch',
        format: 'json',
        search: searchTerm
      }
    });

    setResults([data[1], data[3]]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderSearch
        placeholder="enter a topic"
        onSearchPress={handleDataFetch}
        onChangeText={(text: string) => setSearchTerm(text)}
        autoCapitalize="none"
        onSubmitEditing={handleDataFetch}
      />

      <FlatList
        data={results[0]}
        contentContainerStyle={{ flex: 1 }}
        ListEmptyComponent={<EmptyListItem />}
        keyExtractor={(item: string) => item}
        renderItem={({ item: title, index }) => (
          <ListItem
            title={title}
            subTitle={results[1][index]}
            onPress={() =>
              navigate(Routes.wikiView, {
                title,
                url: results[1][index]
              })
            }
          />
        )}
      />

      <FAB />
    </SafeAreaView>
  );
};

export default Wiki;

const styles = StyleSheet.create({});
