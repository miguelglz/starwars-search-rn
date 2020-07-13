import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white[900],
    padding: theme.spacing.padding.xl,
  },
  titleContainer: {
    paddingBottom: theme.spacing.padding.md,
    borderBottomColor: theme.colors.grey[400],
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: theme.font.weight.bold,
    fontSize: theme.font.size.title,
  },
  resultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stateLabel: {
    fontFamily: theme.font.weight.bold,
    color: theme.colors.grey[400],
    textAlign: 'center',
  },
  resultList: {
    width: '100%',
  },
  footerButtom: {
    marginTop: theme.spacing.margin.lg,
  },
});
