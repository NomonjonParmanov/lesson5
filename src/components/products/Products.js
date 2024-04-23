import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
let API = "https://dummyjson.com/products";
const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data.products))
      .catch((res) => console.log(res));
  }, []);
  let card = data?.map((el) => (
    <div className="card" key={el.id}>
      <Link to={`/product/${el.id}`}>
        <img src={el.images[0]} alt="" />
      </Link>
      <h2>{el.title.substring(0, 20)}</h2>
      <h3>
        ${el.price} <span>50$</span>
      </h3>
      <div className="buttons">
        <button>
          <CiHeart />
        </button>
        <button>
          <CiShoppingCart />
        </button>
      </div>
    </div>
  ));
  return (
    <div className="container product">
      <h1>Explore Our Products</h1>
      <div className="cards">{card}</div>
    </div>
  );
};

export default Products;
