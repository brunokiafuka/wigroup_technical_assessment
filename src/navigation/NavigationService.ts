import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: Routes, params?: object) {
  return navigationRef?.current?.navigate(name, params);
}

export enum Routes {
  main = 'main',
  searchMain = 'searchMain',
  wikiMain = 'wikiMain',
  auth = 'auth',
  wikiView = 'wikiView',
  logged = 'logged',
  loggedView = 'loggedView'
}

export type RoutesStackParamList = {
  [Routes.main]: undefined;
  [Routes.searchMain]: undefined;
  [Routes.wikiMain]: undefined;
  [Routes.auth]: undefined;
  [Routes.wikiView]: {
    url: string;
    title: string;
  };
  [Routes.logged]: undefined;
  [Routes.loggedView]: undefined;
};
