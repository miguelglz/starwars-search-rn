import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Paragraph.style';

function Paragraph({subTitle, content}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{subTitle}</Text>
      </View>
      <Text>{content}</Text>
    </View>
  );
}

Paragraph.propTypes = {
  subTitle: PropTypes.string,
  content: PropTypes.string,
};

export default Paragraph;
