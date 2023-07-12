import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import { QueryClientProvider } from 'react-query'
import { ThemeProvider } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import { theme } from '@/config/mui'
import { Snackbar } from '@/components/Snackbar'
import { routes } from '@/routes/index'
import { queryClient } from '@/config/react-query'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={routes} />
        <Snackbar />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
