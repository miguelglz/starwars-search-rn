import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Details.style';
import {generateParagraph} from './Details.utils';
import {generateGoToRoute} from '../../helpers/navigation';
import Paragraph from './paragraph';
import ActionButton from '../../components/actionButton';

function Details({data, loading, navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.displayTitle}</Text>
      <Paragraph />
      <ActionButton
        label={'back to search'}
        disabled={false}
        onPress={generateGoToRoute({
          navigation,
          routeName: 'Search',
        })}
      />
    </View>
  );
}

Details.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  navigation: PropTypes.object,
};

export default Details;
