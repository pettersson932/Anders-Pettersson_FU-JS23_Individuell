import MenuItems from "../menu/MenuItems";
import MainNav from "../components/nav/MainNav";
import Header from "../components/header/Header";
import "./styles/PageStyles.scss";
import "./styles/PageMenu.scss";
import useProducts from "../globals/Products";
import AddIcon from "../assets/icons/add.png";
import Footer from "../components/footer/Footer";
import Fetch from "../hooks/Fetch";

const Menu = () => {
  const { items, increaseCount } = useProducts();
  return (
    <div className="pageMenu">
      <Fetch />
      <Header showCartOpen={true} />
      <MainNav />
      <div className="pageMenu__content">
        <h1>Meny</h1>
        <section className="menu">
          {items
            .filter((item) => item.id.startsWith("coffee"))
            .map((item, index) => (
              <article key={index} className="menuItem">
                <button
                  onClick={() => increaseCount(item.title)}
                  className="menuItem__buttonAdd"
                >
                  <img src={AddIcon} alt="add_icon" />
                </button>
                <div className="menuItem__info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

                <p className="menuItem__price">
                  <span>{item.price}</span> <span>kr</span>
                </p>
              </article>
            ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default Menu;
