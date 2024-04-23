import React from "react";
import radio from "../../assets/images/radip.png";
const Categories = () => {
  return (
    <div className="container category">
      <div className="left">
        <h4>Categories</h4>
        <h1>Enhance Your Music Experience</h1>
        <div className="times">
          <div className="time">
            <p>
              23 <span>Hours</span>
            </p>
          </div>
          <div className="time">
            <p>
              05 <span>Days</span>
            </p>
          </div>
          <div className="time">
            <p>
              59 <span>Minutes</span>
            </p>
          </div>
          <div className="time">
            <p>
              35 <span>Seconds</span>
            </p>
          </div>
        </div>
        <button>Buy Now!</button>
      </div>
      <div className="riht">
        <img src={radio} alt="" />
      </div>
    </div>
  );
};

export default Categories;
