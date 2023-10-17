import React from "react";

const Sale = () => {
   
  return (
    <div className="cta-area">
      <div className="container mx-auto px-8 lg:px-32 ">
        <div
          className="cta-content bg-img background-overlay"
          style={{"background-image": "url(images/bg-img/bg-5.jpg)"}}>
          <div className="h-100 flex items-center justify-start">
            <div className="cta--text">
              <a href="/products" className="btn essence-btn text-center">
                خرید
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
