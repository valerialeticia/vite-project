import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Root from "./routes/root"
import { ThemeProvider } from "@mui/material"
import { theme } from './config/mui'
import { Home } from './pages/Home/Home'


const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
]);

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
