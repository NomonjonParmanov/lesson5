import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Single = () => {
  let API = "https://dummyjson.com/products";

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API}/${id}`)
      .then((res) => setProduct(res.data.products))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id]);
  console.log(product);
  return (
    <div className="container single">
      <div className="left">
        <img src={product?.images[0]} alt="" />
        <div className="img__mini">
          <img src={product?.images[1]} alt="" />
          <img src={product?.images[2]} alt="" />
          <img src={product?.images[3]} alt="" />
          <img src={product?.images[4]} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>Lorem, ipsum dolor.</h2>
        <h3>Price</h3>
        <p>
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>
        <hr />
        <div className="color">
          <h2>Colours:</h2>
          <div className="red"></div>
          <div className="black"></div>
        </div>
        <div className="size">
          <h3>Size:</h3>
          <button>XS</button>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
        </div>
        <div className="cart">
          <div className="add">
            <button className="re">-</button>
            <button className="count">1</button>
            <button className="add1">+</button>
          </div>

          <div className="buy">
            <button className="buy">BUY NOW</button>
          </div>
          <button>heart</button>
        </div>
      </div>
    </div>
  );
};

export default Single;
