import { useState } from "react";

function useCreateAccount() {
  const [response, setResponse] = useState({ success: false, message: "" });
  const [error, setError] = useState(null);

  const createAccount = async (name, email) => {
    try {
      const response = await fetch(
        "https://airbean-api-xjlcn.ondigitalocean.app/api/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: name,
            password: email,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      setResponse({ success: data.success, message: data.message });
    } catch (error) {
      console.error("Error:", error);
      setError(error);
    }
  };

  return { createAccount, response, error };
}

export default useCreateAccount;
