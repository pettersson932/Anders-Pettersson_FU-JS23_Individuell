import { create } from "zustand";

const useMenuStore = create((set) => ({
  isMenuOpen: false,
  openMenu: (value) => set({ isMenuOpen: true }),
  closeMenu: (value) => set({ isMenuOpen: false }),
}));

export default useMenuStore;
