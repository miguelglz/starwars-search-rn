import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './RadioGroup.style';
import RadioButton from '../radioButton';

function RadioGroup({data, onSelect, selected}) {
  return (
    <View style={styles.container}>
      {data.map(({label, value}) => (
        <RadioButton
          label={label}
          selected={selected === value}
          onPressCallback={() => onSelect(value)}
          style={styles.item}
          key={value}
        />
      ))}
    </View>
  );
}

RadioGroup.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

export default RadioGroup;
