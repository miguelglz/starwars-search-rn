import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Paragraph.style';

function Paragraph({Content, navigation, subTitle}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{subTitle}</Text>
      <Content />
    </View>
  );
}

Paragraph.propTypes = {
  Content: PropTypes.element,
  navigation: PropTypes.object,
  subTitle: PropTypes.string,
};

export default Paragraph;
