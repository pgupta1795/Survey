import { createTheme } from '@mui/material/styles';
import Colors from '../helper/Colors';
import X from '../assets/images/blue-x.png';

const primary = {
  light: Colors.THEME_LIGHT,
  main: Colors.THEME_MAIN,
  dark: Colors.THEME_DARK,
  contrastText: '#fff',
};

const typography = {
  fontFamily: [
    '"Helvetica Neue"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  question: {
    fontWeight: '500',
    fontSize: '1.1em',
  },
  answer: {
    fontWeight: '500',
    color: Colors.GREY_TEXT,
  },
  italic: {
    fontWeight: 'italic',
  },
  small: {
    fontSize: '0.5em',
  },
  tableHeader: {
    fontWeight: '900',
    color: Colors.THEME_MAIN,
  },
  smallQuestion: {
    fontSize: '0.75em',
    fontWeight: '700',
  },
};

const getBackground = () => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundImage: `url(${X})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiExpansionPanel: {
    root: {
      '&:before': {
        display: 'none',
      },
    },
  },
});

export const lightTheme = createTheme({
  typography,
  components: getBackground(),
  palette: {
    mode: 'light',
    primary,
  },
});

export const darkTheme = createTheme({
  typography,
  palette: {
    mode: 'dark',
    primary,
  },
});
