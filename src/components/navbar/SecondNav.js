import React from "react";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";

function SecondNav() {
  return (
    <div className="container second">
      <h1>Exclusive</h1>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Sign Up</li>
      </ul>
      <ul>
        <li>
          <input type="text" placeholder="What are you looking for?" />
        </li>
        <li className="search">
          <CiSearch />
        </li>
        <li>
          <CiHeart />
        </li>
        <li>
          <CiShoppingCart />
        </li>
      </ul>
    </div>
  );
}

export default SecondNav;
