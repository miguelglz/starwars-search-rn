import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './ResultItem.style';
import ActionButton from '../../../components/actionButton';
import {generateGoToRoute} from '../../../helpers/navigation';

function ResultItem({data, navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.displayTitle}</Text>
      <ActionButton
        label={'see details'}
        disabled={false}
        onPress={generateGoToRoute({
          navigation,
          params: {data},
          routeName: 'Details',
          stack: true,
        })}
      />
    </View>
  );
}

ResultItem.propTypes = {
  data: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

ResultItem.defaultProps = {
  disabled: false,
};

export default ResultItem;
