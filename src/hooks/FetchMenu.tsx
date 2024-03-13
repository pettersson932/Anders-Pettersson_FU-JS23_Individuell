import React, { useState, useEffect } from "react";
import useProducts from "../globals/Products";

function FetchMenu() {
  const [apiData, setApiData] = useState([]);
  const { addProduct } = useProducts();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://airbean-api-xjlcn.ondigitalocean.app/api/beans"
        );
        const jsonData = await response.json();
        jsonData.menu.map((item) => {
          addProduct(item.id, item.title, item.desc, item.price);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return null;
}

export default FetchMenu;
