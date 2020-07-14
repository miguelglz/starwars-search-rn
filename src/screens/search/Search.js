import React from 'react';
import {Text, View, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Search.style';
import {generateGoToRoute} from '../../helpers/navigation';
import RadioGroup from '../../components/radioGroup';
import ActionButton from '../../components/actionButton';

function Search({
  disableSearchButton,
  navigation,
  options,
  placeholder,
  searchText,
  searchData,
  setSearchText,
  setSearchData,
}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subTitle}>What are you searching for ?</Text>
        <RadioGroup
          data={options}
          onSelect={setSearchData}
          selected={searchData.type}
        />
        <TextInput
          placeholder={placeholder}
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchInput}
        />
      </View>
      <ActionButton
        label={'search'}
        disabled={disableSearchButton}
        onPress={generateGoToRoute({
          navigation,
          params: {searchText},
          routeName: 'Results',
          stack: true,
        })}
      />
    </View>
  );
}

Search.propTypes = {
  disableSearchButton: PropTypes.bool,
  navigation: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.object.isRequired),
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  disableSearchButton: true,
  placeholder: 'e.g. Chewbacca, Yoda',
};

export default Search;
