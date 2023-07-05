import { AlertColor } from "@mui/material";
import { create } from "zustand";

type SnackbarStoreType = {
  open: boolean;
  message: string;
  severity: AlertColor;
  onClose: (event: React.SyntheticEvent | Event, reason?: string) => void;
  handleAddMessage: (message: string, severity?: AlertColor) => void
}

export const useSnackbarStore = create<SnackbarStoreType>(
  (set, get) => ({
    open: false,
    message: '',
    severity: 'info',
    onClose: () => set((oldValue) => ({ open: !oldValue.open })),
    handleAddMessage: (message, severity) => set(() => ({message, severity, open: true}))
  })
)