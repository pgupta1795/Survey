import { createTheme } from '@mui/material/styles';
import Colors from '../helper/Colors';
import X from '../assets/images/blue-x.png';

const primary = {
  light: Colors.THEME_LIGHT,
  main: Colors.THEME_MAIN,
  dark: Colors.THEME_DARK,
  contrastText: '#fff',
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
});

export const lightTheme = createTheme({
  components: getBackground(),
  palette: {
    mode: 'light',
    primary,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary,
  },
});
