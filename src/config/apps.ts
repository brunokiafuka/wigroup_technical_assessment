import { Routes } from 'navigation/NavigationService';

export default [
  {
    icon: 'search',
    label: 'Auto-Search App',
    path: Routes.searchMain
  },
  {
    icon: 'wikipedia-w',
    label: 'Wikipedia App',
    path: Routes.wikiMain
  },
  {
    icon: 'key',
    label: 'AsyncStorage App',
    path: Routes.auth
  }
];
