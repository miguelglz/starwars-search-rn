import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

export default StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.padding.sm,
    borderRadius: 26.5,
  },
  disabled: {
    backgroundColor: theme.colors.grey[400],
  },
  active: {
    backgroundColor: theme.colors.green[600],
  },
  label: {
    fontFamily: theme.font.weight.bold,
    textTransform: 'uppercase',
    color: theme.colors.white[900],
    alignSelf: 'center',
  },
});
