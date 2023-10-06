import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import SoraRegularTTF from './fonts/Sora-Regular.ttf';
import SoraSemiBoldTTF from './fonts/Sora-SemiBold.ttf';
import SoraBoldTTF from './fonts/Sora-Bold.ttf';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#52b4bd',
    },
    secondary: {
      main: '#2185d0',
    },
    error: {
      main: '#f94040',
    },
    warning: {
      main: '#ff754c',
    },
    info: {
      main: '#2185d0',
    },
    success: {
      main: '#21ba45',
    },
  },
  typography: {
    fontFamily: 'Sora, Lato, "Helvetica Neue", Arial, Helvetica, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Sora';
          src: local('Sora'), url(${SoraRegularTTF}) format('truetype');
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: 'Sora';
          src: local('Sora'), url(${SoraSemiBoldTTF}) format('truetype');
          font-weight: 600;
          font-style: normal;
        }

        @font-face {
          font-family: 'Sora';
          src: local('Sora'), url(${SoraBoldTTF}) format('truetype');
          font-weight: 700;
          font-style: normal;
        }
      `,
    },
  },
});
