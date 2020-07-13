import React, {Component} from 'react';
import AppNavigator from './AppNavigator';
import {setCustomText} from 'react-native-global-props';
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
    return <AppNavigator />;
  }
}
