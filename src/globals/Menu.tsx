import { create } from "zustand";

const useMenu = create((set) => ({
  isOpen: false,
  setOpen: (value) => set({ isOpen: value }),
}));

export default useMenu;
