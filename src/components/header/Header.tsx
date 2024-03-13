import OpenNav from "../../assets/icons/nav.png";
import useMenuStore from "../../globals/Menu";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import BackgroundImage from "../../assets/images/header.png";
import OpenCart from "../../assets/icons/cart.png";
import useProducts from "../../globals/Products";

const Header = (props) => {
  const { openMenu } = useMenuStore();
  const navigate = useNavigate();
  const { itemsInCart } = useProducts();

  return (
    <header className="header">
      <img src={BackgroundImage} alt="background__image" />
      <img
        onClick={openMenu}
        src={OpenNav}
        alt="open_nav"
        className="header__openMenu"
      />
      {props.showCartOpen && (
        <>
          <div className="header__openCart" onClick={() => navigate("/cart")}>
            <img src={OpenCart} alt="open_nav" />
            <span
              className="header__cartCount"
              style={{ display: itemsInCart === 0 ? "none" : "block" }}
            >
              {itemsInCart > 9 ? "9+" : itemsInCart}
            </span>
          </div>
        </>
      )}
    </header>
  );
};
export default Header;
