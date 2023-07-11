import React from "react";

const MainCategories = () => {
  return (
    <div className="top_catagory_area section-padding-80 clearfix">
      <div className="container flex mx-auto px-8 lg:px-32 flex-col md:flex-row justify-between gap-0 md:gap-8">
        {/* Single Catagory  */}

        <div
          className="single_catagory_area flex items-center justify-center bg-img"
          style={{"background-image": "url(images/bg-img/bg-2.jpg)"}}>
          <div className="catagory-content">
            <a href="#">Clothing</a>
          </div>
        </div>

        {/* Single Catagory  */}

        <div
          className="single_catagory_area flex items-center justify-center bg-img"
          style={{"background-image": "url(images/bg-img/bg-3.jpg)"}}>
          <div className="catagory-content">
            <a href="#">Shoes</a>
          </div>
        </div>

        {/* Single Catagory */}

        <div
          className="single_catagory_area flex items-center justify-center bg-img"
          style={{"background-image": "url(images/bg-img/bg-4.jpg)"}}>
          <div className="catagory-content">
            <a href="#">Accessories</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCategories;
