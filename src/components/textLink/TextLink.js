import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {isNil} from 'lodash';
import styles from './TextLink.style';

function TextLink({label, onPress, style}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.label, !isNil(style) ? style : null]}>{label}</Text>
    </TouchableOpacity>
  );
}

TextLink.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default TextLink;
