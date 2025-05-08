// src/theme.js
import { createTheme } from '@mui/material/styles';
import '@fontsource/bodoni-moda';       // loads Bodoni Moda
import '@fontsource/funnel-display';    // loads Funnel Display

const richBlue  = '#1565c0';   // you can tweak to taste
const darkerBlue = '#0d47a1';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper:    '#fdfdfd',
    },
    text: {
      primary: '#000000',
      secondary: '#333333',
    },
    primary: {
      main: richBlue,
      dark: darkerBlue,
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Funnel Display", sans-serif',
    h1: {
      fontFamily: '"Bodoni Moda", serif',
      fontWeight: 700,
      fontSize: '3rem',
    },
    h2: {
      fontFamily: '"Bodoni Moda", serif',
      fontWeight: 600,
      fontSize: '2.25rem',
    },
    h3: {
      fontFamily: '"Bodoni Moda", serif',
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    body1: {
      fontFamily: '"Funnel Display", sans-serif',
      fontSize: '1rem',
    },
    body2: {
      fontFamily: '"Funnel Display", sans-serif',
      fontSize: '0.875rem',
    },
    // custom variant for pixel accents
    pixel: {
      fontFamily: '"Tiny5", monospace',
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: #ffffff;
          color: #000000;
        }
      `,
    },
  },
});

export default theme;
