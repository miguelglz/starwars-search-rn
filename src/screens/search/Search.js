import React from 'react';
import {Text, View, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Search.style';
import {generateGoToRoute, generateBack} from '../../helpers/navigation';

function Search({placeholder, searchText, setSearchText}) {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <TextInput
        placeholder={placeholder}
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
}

Search.propTypes = {
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  placeholder: 'e.g. Chewbacca, Yoda',
};

export default Search;
