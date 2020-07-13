import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white[900],
    padding: theme.spacing.padding.xl,
    justifyContent: 'space-between',
  },
  subTitle: {
    marginBottom: theme.spacing.margin.md,
  },
  searchInput: {
    borderColor: theme.colors.grey[300],
    borderWidth: 1,
    padding: theme.spacing.padding.md,
  }
});
