import MainNav from "../components/nav/MainNav";
import CartItems from "../cart/CartItems";
import Header from "../components/header/Header";
import "./styles/Page.scss";
import "./styles/PageCart.scss";

const Cart = () => {
  return (
    <div className="page pageCart">
      <Header showCartOpen={true} />
      <MainNav />
      <div className="pageCart__content">
        <h1>Din Beställning</h1>
        <CartItems />
      </div>
    </div>
  );
};
export default Cart;
