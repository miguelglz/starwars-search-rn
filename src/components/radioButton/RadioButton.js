import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {isNil} from 'lodash';
import styles from './RadioButton.style';

function RadioButton({label, onPressCallback, selected, style}) {
  const [currentlySelected, setCurrentlySelected] = React.useState(
    selected || false,
  );
  const isSelected = !isNil(selected) ? selected : currentlySelected;

  const circleStyle = !isSelected
    ? styles.circle
    : {...styles.circle, ...styles.selectedCircle};

  function handleOnPress() {
    if (!currentlySelected && isNil(selected)) {
      setCurrentlySelected(!currentlySelected);
    }
    onPressCallback();
  }

  return (
    <TouchableOpacity
      style={[styles.container, style ? style : null]}
      onPress={handleOnPress}>
      <View style={circleStyle} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

RadioButton.propTypes = {
  label: PropTypes.string,
  onPressCallback: PropTypes.func,
  selected: PropTypes.bool,
  style: PropTypes.object,
};

export default RadioButton;
