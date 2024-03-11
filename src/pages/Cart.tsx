import MainNav from "../nav/MainNav";
import CartItems from "../cart/CartItems";
import PostOrder from "../hooks/PostOrder";
import Header from "../header/Header";

const Cart = () => {
  return (
    <div>
      <Header />
      <MainNav />
      <h2>Cart</h2>
      <CartItems />
      <PostOrder />
    </div>
  );
};
export default Cart;
