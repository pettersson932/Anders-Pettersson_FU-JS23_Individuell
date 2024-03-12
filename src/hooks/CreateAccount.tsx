import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you intend to use this later
import "./PostOrder.scss";

function CreateAccount(props) {
  const [response, setResponse] = useState();

  const postData = async () => {
    try {
      const response = await fetch(
        "https://airbean-api-xjlcn.ondigitalocean.app/api/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: props.name,
            password: props.email,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
    postData();
  };

  return null;
}

export default CreateAccount;
