import { create } from "zustand";

type SnackbarStoreType = {
  open: boolean;
  message: string
  onClose: (event: React.SyntheticEvent | Event, reason?: string) => void;
  addMessage: (message: string, open: boolean) => void
}

export const useSnackbarStore = create<SnackbarStoreType>(
  (set, get) => ({
    open: false,
    message: '',
    onClose: () => set((oldValue) => ({ open: !oldValue.open })),
    addMessage: () => set((oldValue) => ({ message: oldValue.message, open: true}))
  })
)