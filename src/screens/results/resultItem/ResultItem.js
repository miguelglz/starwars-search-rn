import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './ResultItem.style';
import ActionButton from '../../../components/actionButton';

function ResultItem({data}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.displayTitle}</Text>
      <ActionButton
        label={'see details'}
        disabled={false}
        onPress={() => console.log('pressed', data)}
      />
    </View>
  );
}

ResultItem.propTypes = {
  data: PropTypes.object,
};

ResultItem.defaultProps = {
  disabled: false,
};

export default ResultItem;
