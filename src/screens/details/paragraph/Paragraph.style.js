import {StyleSheet} from 'react-native';
import theme from '../../../config/theme';

export default StyleSheet.create({
  container: {
    marginBottom: theme.spacing.margin.lg,
  },
  title: {
    fontFamily: theme.font.weight.bold,
  },
  titleContainer: {
    paddingBottom: theme.spacing.padding.md,
    borderBottomColor: theme.colors.grey[400],
    borderBottomWidth: 1,
    marginBottom: theme.spacing.padding.md,
  },
});
