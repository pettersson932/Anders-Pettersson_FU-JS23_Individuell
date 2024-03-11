import useProducts from "../globals/Products";
import { useState, useEffect } from "react";

const CartItems = () => {
  const { items, increaseCount, decreaseCount } = useProducts();
  const [totalprice, setTotalPrice] = useState(0);

  // Calculate total price whenever items change
  useEffect(() => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.price * item.count;
    });
    setTotalPrice(totalPrice);
  }, [items]);

  return (
    <div>
      {items
        .filter((item) => item.count > 0)
        .map((item, index) => (
          <article key={index}>
            <button onClick={() => increaseCount(item.title)}>+</button>
            <button onClick={() => decreaseCount(item.title)}>-</button>
            <h3>{item.title}</h3>

            <p>{item.price}</p>

            <p>{item.count}</p>

            <p>Total : {item.price * item.count}</p>
          </article>
        ))}

      <p>TOTAL: {totalprice}</p>
    </div>
  );
};

export default CartItems;
