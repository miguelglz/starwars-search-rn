import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {generateStackScreen} from './helpers/navigation';

import Search from './screens/search';

const Stack = createStackNavigator();
const routes = [
  {
    component: Search,
    name: 'Search',
    options: {
      title: 'SWStarter',
    },
  },
];

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Search'}>
        {routes.map((screen, index) =>
          generateStackScreen({index, ...screen, Stack}),
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
