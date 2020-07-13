import theme from './theme';

export const headerDefaults = {
  title: 'SWStarter',
  headerTitleStyle: {
    fontFamily: 'Poppins-Bold',
    fontSize: theme.font.size.title,
  },
  headerLeftContainerStyle: {
    padding: 20,
  },
  headerBackTitleVisible: false,
};

export const api = {
  baseUrl: 'https://swapi.dev/api/',
};
