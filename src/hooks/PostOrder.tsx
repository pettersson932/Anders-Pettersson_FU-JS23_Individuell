import useProducts from "../globals/Products";
import { useNavigate } from "react-router-dom";
import useResponse from "../globals/Resp";
import "./PostOrder.scss";

function PostOrder(props) {
  const navigate = useNavigate();
  const { setResponse } = useResponse();
  const { items } = useProducts();
  const itemsSorted = items
    .filter((item) => item.count > 0)
    .map((item) => ({
      name: item.title,
      price: item.price,
    }));
  console.log(itemsSorted);

  const postData = async () => {
    try {
      const response = await fetch(
        "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            details: {
              order: itemsSorted,
            },
          }),
        }
      );
      const data = await response.json();
      setResponse(data.eta, data.orderNr);
      navigate("/status");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="postOrder">
      <button
        disabled={!props.cartNotEmpty}
        onClick={postData}
        className="postOrder__button"
      >
        Take my money!
      </button>
    </div>
  );
}

export default PostOrder;
