import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleToWishes } from "../../context/heartSlice";

let API = "https://dummyjson.com/products";
const Products = () => {
  const dispatch = useDispatch();
  let wishes = useSelector((state) => state.wishlist.value);
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
        <button onClick={() => dispatch(toggleToWishes(el))}>
          {wishes.some((w) => w.id == el.id) ? <FaHeart /> : <FaRegHeart />}
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
