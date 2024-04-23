import React from "react";

import Header from "../header/Header";
import Month from "../month/Month";
import Categories from "../categories/Categories";
import Products from "../products/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <Month />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
