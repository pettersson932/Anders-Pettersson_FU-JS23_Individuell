import MenuItems from "../menu/MenuItems";
import MainNav from "../nav/MainNav";
import Header from "../header/Header";

const Menu = () => {
  return (
    <div>
      <Header />
      <MainNav />
      <h2>Meny</h2>
      <MenuItems />
    </div>
  );
};
export default Menu;
