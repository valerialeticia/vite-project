import { createTheme } from "@mui/material"

export const theme = createTheme({
  typography: {
    fontFamily:[
      'Roboto',
      'Helvetica  Neue',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontWeight: '700'
        }
      }
    }
  }
})