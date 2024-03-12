import { create } from "zustand";

const useProducts = create((set) => ({
  items: [
    {
      id: "coffee-vxig26my4y",
      title: "Bryggkaffe",
      desc: "Bryggd på månadens bönor",
      price: 39,
      count: 0,
    },
    {
      id: "coffee-220dodpzmg",
      title: "Caffè Doppio",
      desc: "Bryggd på månadens bönor",
      price: 49,
      count: 0,
    },
    {
      id: "coffee-4pdksmrkfa",
      title: "Cappuccino",
      desc: "Bryggd på månadens bönor",
      price: 49,
      count: 0,
    },
    {
      id: "coffee-m2h37k2mnh",
      title: "Latte Macchiato",
      desc: "Bryggd på månadens bönor",
      price: 49,
      count: 0,
    },
    {
      id: "coffee-0lp6ter3bh",
      title: "Kaffe Latte",
      desc: "Bryggd på månadens bönor",
      price: 54,
      count: 0,
    },
    {
      id: "coffee-e8hz0lk7q5",
      title: "Cortado",
      desc: "Bryggd på månadens bönor",
      price: 39,
      count: 0,
    },
  ],
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
}));

export default useProducts;
