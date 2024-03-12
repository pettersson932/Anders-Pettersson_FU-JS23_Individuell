import { create } from "zustand";

const useProducts = create((set) => ({
  items: [],
  itemsInCart: 0,
  increaseCount: (title) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.title === title ? { ...item, count: item.count + 1 } : item
      ),
      itemsInCart: state.itemsInCart + 1,
    })),
  decreaseCount: (title) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.title === title ? { ...item, count: item.count - 1 } : item
      ),
      itemsInCart: state.itemsInCart - 1,
    })),
  countItemsInCart: () =>
    set((state) => ({
      itemsInCart: state.items.reduce((total, item) => total + item.count, 0),
    })),
  addProduct: (id, title, desc, price, count = 0) =>
    set((state) => {
      if (!state.items.find((item) => item.id === id)) {
        return {
          items: [...state.items, { id, title, desc, price, count }],
          itemsInCart: state.itemsInCart,
        };
      }
      return state;
    }),
}));

export default useProducts;
