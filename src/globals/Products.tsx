import { create } from "zustand";

const useProducts = create((set) => ({
  items: [
    { title: "Bryggkaffe", price: 10, count: 0 },
    { title: "Bryggkaffe2", price: 22, count: 1 },
    { title: "Bryggkaffe3", price: 23, count: 2 },
  ],
  increaseCount: (title) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.title === title ? { ...item, count: item.count + 1 } : item
      ),
    })),
  decreaseCount: (title) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.title === title ? { ...item, count: item.count - 1 } : item
      ),
    })),
}));

export default useProducts;
