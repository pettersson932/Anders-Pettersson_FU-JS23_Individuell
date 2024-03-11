import useProducts from "../globals/Products";

const MenuItems = () => {
  const { items, increaseCount } = useProducts();
  return (
    <section className="menu">
      {items.map((item, index) => (
        <article key={index}>
          <button onClick={() => increaseCount(item.title)}>
            ADD {item.title}
          </button>
          <h3>{item.title}</h3>

          <p>{item.price}</p>
        </article>
      ))}
    </section>
  );
};

export default MenuItems;
