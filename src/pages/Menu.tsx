import MenuItems from "../menu/MenuItems";
import MainNav from "../nav/MainNav";
import Header from "../header/Header";

const Menu = () => {
  return (
    <div>
      <Header showCartIcon={true} />
      <MainNav />
      <h2>Meny</h2>
      <MenuItems />
    </div>
  );
};
export default Menu;
