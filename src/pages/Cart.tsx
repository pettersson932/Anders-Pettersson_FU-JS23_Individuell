import MainNav from "../nav/MainNav";
import CartItems from "../cart/CartItems";
import PostOrder from "../hooks/PostOrder";

const Cart = () => {
  return (
    <div>
      <MainNav />
      <h2>Cart</h2>
      <CartItems />
      <PostOrder />
    </div>
  );
};
export default Cart;
