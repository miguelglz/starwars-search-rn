import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  circle: {
    width: 13,
    height: 13,
    borderColor: theme.colors.grey[400],
    borderRadius: 13,
    borderWidth: 1,
    marginRight: theme.spacing.margin.xs,
    alignSelf: 'center',
  },
  selectedCircle: {
    borderColor: theme.colors.blue[600],
    borderWidth: 5,
  },
  label: {
    fontFamily: theme.font.weight.bold,
  },
});
