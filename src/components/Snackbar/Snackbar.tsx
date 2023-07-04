import { Snackbar as MuiSnackbar } from '@mui/material'
import { useSnackbarStore } from '../../store/general'

export const Snackbar = () => {
  const state = useSnackbarStore()
  return (
    <MuiSnackbar
      open={state.open}
      autoHideDuration={6000}
      onClose={state.onClose}
      message={state.message}
    />
  )
}