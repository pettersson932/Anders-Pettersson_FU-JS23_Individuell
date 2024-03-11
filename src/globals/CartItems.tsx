import { create } from "zustand";

const useCartItems = create((set) => ({
  items: [
    { name: "Bryggkaffe", price: 20 },
    { name: "Bryggkaffe2", price: 21 },
    { name: "Bryggkaffe3", price: 22 },
  ],
}));

export default useCartItems;
