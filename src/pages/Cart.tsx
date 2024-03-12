import MainNav from "../nav/MainNav";
import CartItems from "../cart/CartItems";
import Header from "../header/Header";
import "./styles/PageCart.scss";

const Cart = () => {
  return (
    <div className="pageCart">
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
