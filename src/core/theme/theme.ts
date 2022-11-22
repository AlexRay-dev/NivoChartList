import {createTheme} from '@mui/material/styles';

const theme= createTheme({
  palette: {
    primary: {
      main: '#4285f4',
    },
    secondary: {
      main: '#c92724',
      dark: '#a81a17'
    },
    text: {
      primary: "#333333",
    },
  }
});

export default theme;