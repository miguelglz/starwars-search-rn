import React from 'react';
import {Text, View, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {isNil} from 'lodash';
import styles from './Results.style';
import {generateGoToRoute, generateBack} from '../../helpers/navigation';
import ResultItem from './resultItem';
import ActionButton from '../../components/actionButton';

function Results({data, loading, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Results</Text>
      </View>
      <View style={styles.resultsContainer}>
        {loading || isNil(data) ? (
          <Text style={styles.stateLabel}>Searching...</Text>
        ) : data.length === 0 ? (
          <Text style={styles.stateLabel}>
            {`There are zero matches.
Use the form to search for People or Movies.`}
          </Text>
        ) : (
          <FlatList
            data={data}
            style={styles.resultList}
            renderItem={({item}) => <ResultItem data={item} />}
            keyExtractor={({displayTitle}) => displayTitle}
          />
        )}
      </View>
      {!loading && !isNil(data) && (
        <ActionButton
          label={'back to search'}
          disabled={false}
          onPress={generateBack({navigation})}
          style={styles.footerButtom}
        />
      )}
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
