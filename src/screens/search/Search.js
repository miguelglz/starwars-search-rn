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
  searchType,
  setSearchText,
  setSearchType,
}) {
  const searchParams = {searchType, searchText};

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subTitle}>What are you searching for ?</Text>
        <RadioGroup
          data={options}
          onSelect={setSearchType}
          selected={searchType}
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
          params: searchParams,
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
