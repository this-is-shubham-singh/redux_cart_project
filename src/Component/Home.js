import React, { useEffect, useState } from "react";
import Product from "./Product";

const Home = () => {
  let [data, setData] = useState([]);

  let url = "https://fakestoreapi.com/products";

  async function apicall() {
    let response = await fetch(url);
    let ans = await response.json();

    setData(ans);
  }

  useEffect(() => {
    apicall();
  }, []);

  return (
    <div>
      {data.map((api_data, index) => (
        <Product key={index} value={api_data} />
      ))}
    </div>
  );
};

export default Home;
