import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { toggleToWishes } from "../../context/heartSlice";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart, FaHeart } from "react-icons/fa";
const Like = () => {
  let dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);
  console.log(wishes);
  let card = wishes?.map((el) => (
    <div className="card" key={el.id}>
      <img src={el.images[0]} alt="" />
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
    <div className="container like">
      <div className="cards">{card}</div>
    </div>
  );
};

export default Like;
