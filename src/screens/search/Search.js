import React from 'react';
import {Text, View, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {isNil} from 'lodash';
import styles from './Search.style';
import {generateGoToRoute, generateBack} from '../../helpers/navigation';
import RadioGroup from '../../components/radioGroup';
import ActionButton from '../../components/actionButton';

function Search({options, placeholder, searchText, setSearchText}) {
  const [currentValue, setCurrentValue] = React.useState();
  const shouldBeDisable = searchText === '' || isNil(currentValue);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subTitle}>What are you searching for ?</Text>
        <RadioGroup
          data={options}
          onSelect={setCurrentValue}
          selected={currentValue}
        />
        <TextInput
          placeholder={placeholder}
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchInput}
        />
      </View>
      <ActionButton label={'search'} disabled={shouldBeDisable} />
    </View>
  );
}

Search.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  placeholder: 'e.g. Chewbacca, Yoda',
};

export default Search;
