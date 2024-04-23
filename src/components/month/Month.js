import React from "react";
import { CARDS } from "../../static";
const Month = () => {
  let card = CARDS?.map((el) => (
    <div className="card" key={el.id}>
      <img src={el.img} alt="" />
      <h2>{el.title}</h2>
      <h3>
        {el.price} <span>{el.pri}</span>
      </h3>
    </div>
  ));
  return (
    <div className="container month">
      <div className="title">
        <h1>Best Selling Products</h1>
        <button>View All</button>
      </div>
      <div className="cards">{card}</div>
    </div>
  );
};

export default Month;
