import useProducts from "../globals/Products";

const Menu = () => {
  const { items, increaseCount } = useProducts();

  const MenuItems = items.map((item) => (
    <>
      <button onClick={() => increaseCount(item.title)}> ADD </button>
      <h4>{item.title}</h4>
      <p>{item.price}</p>
      <p>{item.count}</p>
    </>
  ));

  return (
    <div>
      <h2>Meny</h2>
      {MenuItems}
    </div>
  );
};
export default Menu;
