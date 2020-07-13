import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {generateStackScreen} from './helpers/navigation';
import theme from './config/theme';
import {headerDefaults} from './config/settings';

import Search from './screens/search';

const Stack = createStackNavigator();
const routes = [
  {
    component: Search,
    name: 'Search',
  },
];

function AppNavigator() {
  return (
    <NavigationContainer theme={theme.navigator}>
      <Stack.Navigator
        initialRouteName={'Search'}
        screenOptions={headerDefaults}>
        {routes.map((screen, index) =>
          generateStackScreen({index, ...screen, Stack}),
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
