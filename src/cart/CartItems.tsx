import useProducts from "../globals/Products";

const CartItems = () => {
  const { items, increaseCount, decreaseCount } = useProducts();
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
          </article>
        ))}
    </div>
  );
};

export default CartItems;
