import React from 'react';
import {Text, View, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {isNil} from 'lodash';
import styles from './Results.style';
import {generateGoToRoute, generateBack} from '../../helpers/navigation';
import ResultItem from './resultItem';

function Results({data, loading, navigation, searchType}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Results</Text>
      </View>
      <View>
        {loading ? (
          <Text>Searching...</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ResultItem data={item} resultType={searchType} />
            )}
            keyExtractor={({name}) => name}
          />
        )}
      </View>
    </View>
  );
}

Results.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  navigation: PropTypes.object,
  searchType: PropTypes.string,
};

export default Results;
