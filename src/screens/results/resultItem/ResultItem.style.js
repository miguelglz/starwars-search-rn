import {StyleSheet} from 'react-native';
import theme from '../../../config/theme';

export default StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.padding.lg2,
    borderBottomColor: theme.colors.grey[400],
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: theme.font.weight.bold,
    marginBottom: theme.spacing.margin.sm,
  },
});
