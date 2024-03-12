import useProducts from "../globals/Products";
import { useState, useEffect } from "react";
import "./CartItems.scss";
import PostOrder from "../hooks/PostOrder";
import IconUp from "../assets/icons/up.png";
import IconDown from "../assets/icons/down.png";

const CartItems = () => {
  const { items, increaseCount, decreaseCount } = useProducts();
  const [totalprice, setTotalPrice] = useState(0);
  const [cartNotEmpty, setCartNotEmpty] = useState(false);

  useEffect(() => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.price * item.count;
    });
    setTotalPrice(totalPrice);
  }, [items]);

  useEffect(() => {
    totalprice > 0 ? setCartNotEmpty(true) : setCartNotEmpty(false);
  }, [totalprice]);

  return (
    <>
      <div className="cartItems">
        {totalprice === 0
          ? "No order yet"
          : items
              .filter((item) => item.count > 0)
              .map((item, index) => (
                <article key={index} className="cartItem">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.price * item.count} kr</p>
                  </div>
                  <div className="cartItem__count">
                    <button
                      onClick={() => increaseCount(item.title)}
                      className="cartItem__icon"
                    >
                      <img src={IconUp} alt="icon_up" />
                    </button>
                    <p>{item.count}</p>
                    <button
                      onClick={() => decreaseCount(item.title)}
                      className="cartItem__icon"
                    >
                      <img src={IconDown} alt="icon_down" />
                    </button>
                  </div>
                </article>
              ))}
      </div>
      <div className="cartItems__total">
        <div className="cartItems__total--h3">
          <h3>TOTAL:</h3>
          <h3> {totalprice} kr</h3>
        </div>
        <p>inkl moms + drönarleverans</p>
      </div>

      <PostOrder cartNotEmpty={cartNotEmpty} />
    </>
  );
};

export default CartItems;
