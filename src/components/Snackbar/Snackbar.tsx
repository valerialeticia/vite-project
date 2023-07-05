import { Snackbar as MuiSnackbar, IconButton, Alert } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useSnackbarStore } from '@/store/general'

export const Snackbar = () => {
  const state = useSnackbarStore()

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={state.onClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  )

  return (
    <MuiSnackbar
      open={state.open}
      autoHideDuration={6000}
      onClose={state.onClose}
      action={action}
    >
      <Alert onClose={state.onClose} severity={state.severity}>
        {state.message}
      </Alert>
    </MuiSnackbar>
  )
}