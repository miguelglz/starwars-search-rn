const colors = {
  white: {
    900: '#FFFFFF',
  },
  black: {
    900: '#383838',
  },
  grey: {
    300: '#dadada',
    400: '#c4c4c4',
  },
  green: {
    600: '#0ab463',
  },
  blue: {
    600: '#0094ff',
  },
};

const spacing = {
  padding: {
    sm: 8,
    md: 10,
    lg: 16,
    xl: 30,
  },
  margin: {
    xs: 10,
    sm: 15,
    md: 20,
    lg: 30,
  },
};

const font = {
  size: {
    regular: 14,
    title: 18,
  },
  weight: {
    bold: 'Montserrat-Bold',
  },
};

const navigator = {
  dark: false,
  colors: {
    primary: colors.green[600],
    background: colors.white[900],
    text: colors.green[600],
    border: colors.green[600],
  },
};

export default {
  colors,
  font,
  navigator,
  spacing,
};
