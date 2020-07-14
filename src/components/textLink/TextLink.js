import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {isNil} from 'lodash';
import styles from './ActionButton.style';

function ActionButton({disabled, label, onPress, style}) {
  function handleOnPress() {
    if (!disabled) {
      onPress();
    }
  }

  return (
    <TouchableOpacity
      style={[
        styles.container,
        disabled ? styles.disabled : styles.active,
        !isNil(style) ? style : null,
      ]}
      onPress={handleOnPress}>
      <Text
        style={[
          styles.label,
          disabled ? styles.disabledText : styles.activeText,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

ActionButton.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

ActionButton.defaultProps = {
  disabled: false,
};

export default ActionButton;
