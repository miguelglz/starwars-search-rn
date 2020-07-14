import React, {Component} from 'react';
import AppNavigator from './AppNavigator';
import {Provider as ReduxProvider} from 'react-redux';
import {setCustomText} from 'react-native-global-props';
import {store} from './reducers';

const customTextProps = {
  style: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#383838',
  },
};

export default class App extends Component {
  componentDidMount() {
    setCustomText(customTextProps);
  }

  render() {
    return (
      <ReduxProvider store={store}>
        <AppNavigator />
      </ReduxProvider>
    );
  }
}
