import React from "react";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
function SecondNav() {
  return (
    <div className="container second">
      <Link to={"/"}>
        <h2>Exclusive</h2>
      </Link>
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
          <Link to={"/like"}>
            <CiHeart />
          </Link>
        </li>
        <li>
          <CiShoppingCart />
        </li>
      </ul>
    </div>
  );
}

export default SecondNav;
