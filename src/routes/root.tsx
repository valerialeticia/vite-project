import { Outlet } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material'

export default function Root() {
  return (
    <>
      <CssBaseline />
      <Box>
        <Outlet />
      </Box>
    </>
  )
}
