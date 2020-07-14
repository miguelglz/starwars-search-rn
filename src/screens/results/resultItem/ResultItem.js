import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './ResultItem.style';
import ActionButton from '../../../components/actionButton';

function ResultItem({onPress, title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ActionButton label={'see details'} disabled={false} onPress={onPress} />
    </View>
  );
}

ResultItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ResultItem;
