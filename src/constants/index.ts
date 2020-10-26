import { Platform } from 'react-native';

export const defaultURL = 'https://kiafuka.dev';

export const boxShadow = {
  ...Platform.select({
    ios: {
      shadowColor: 'rgba(192, 192, 192, 1)',
      shadowOffset: {
        width: 1,
        height: 2
      },
      shadowOpacity: 0.3,
      shadowRadius: 3.84
    },
    android: {
      elevation: 1
    }
  })
};
