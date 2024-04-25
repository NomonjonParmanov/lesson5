import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import mini1 from "../../assets/images/mini1.png";
import mini2 from "../../assets/images/mini2.png";
import mini3 from "../../assets/images/mini3.png";
import mini4 from "../../assets/images/mini4.png";
import { CiHeart } from "react-icons/ci";

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
      .then((res) => setProduct(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id]);
  console.log(product);
  return (
    <div className="container">
      <div className="single">
        <div className="left">
          <div className="mini__img">
            <img src={mini1} alt="" />
            <img src={mini2} alt="" />
            <img src={mini3} alt="" />
            <img src={mini4} alt="" />
          </div>
          <img src={product?.images[0]} alt="" />
        </div>
        <div className="right">
          <h2>{product?.title}</h2>
          <h3>${product?.price}</h3>
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
            <button>
              <CiHeart className="heart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
