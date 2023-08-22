"use client";

import React, {useEffect, useState} from "react";
import {MdFavoriteBorder} from "react-icons/md";
import {GrLinkNext, GrLinkPrevious} from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {shopAxios} from "../../../axios/shopAxios";
import {useDispatch} from "react-redux";
import {addToBasket} from "../../../redux/slices/basketSlice";
const product = ({params}) => {
  const productId = params?.id;
  const [productDetail, setProductDetail] = useState(null);
  const dispatch = useDispatch();
  const getProductData = async () => {
    const response = await shopAxios.get(`/products/${productId}`);
    setProductDetail(response?.data?.data);
console.log(response?.data?.data);
  };
  useEffect(() => {
    getProductData();
  }, []);

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    padding: 0,
    // nextArrow:<GrLinkNext/>,
    // prevArrow:<GrLinkPrevious/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const addToBasketHandler = item => {
    dispatch(addToBasket(item));
  };
  return (
    <>
      {/* <div className="cart-bg-overlay"></div> */}

      <div className="right-side-cart-area">
        {/* Cart Button  */}
        {/* <div className="cart-button">
          <a href="#" id="rightSideCart">
            <img src="images/core-img/bag.svg" alt="" /> <span>3</span>
          </a>
        </div> */}

        <div className="cart-content flex">
          {/* Cart List Area  */}

          {/* Cart Summary  */}
          <div className="cart-amount-summary">
            <h2>Summary</h2>
            <ul className="summary-table">
              <li>
                <span>subtotal:</span> <span>$274.00</span>
              </li>
              <li>
                <span>delivery:</span> <span>Free</span>
              </li>
              <li>
                <span>discount:</span> <span>-15%</span>
              </li>
              <li>
                <span>total:</span> <span>$232.00</span>
              </li>
            </ul>
            <div className="checkout-btn mt-100">
              <a href="checkout.html" className="btn essence-btn">
                check out
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="single_product_details_area mt-[-4px] flex items-center">
        {/* Single Product Thumb  */}
        <div className="single_product_thumb mt-[-10px] sm:mt-[-20px] lg:mt-0 clearfix">
          <Slider {...settings}>
            {productDetail?.images?.map(img => (
              <img src={img["image_path"]} alt={img.image_name} />
            ))}
          </Slider>
        </div>
        {/* Single Product Description  */}
        <div className="single_product_desc clearfix">
          <span>{productDetail?.brand?.name}</span>
          <h2>{productDetail?.name}</h2>
          <div className="flex items-center gap-1">
            <p className="product-price">
              {/* <span className="old-price">$65.00</span> */}
              {productDetail?.price}
            </p>
            <div>تومان</div>
          </div>

          <p className="product-desc">{productDetail?.description}</p>

          {/* Form  */}

          {/* Select Box  */}
          <div className="select-box d-flex mt-50 mb-30">
            <select name="select" id="productSize" className="mr-5">
              <option value="value">سایز: XL</option>
              <option value="value">سایز: X</option>
              <option value="value">سایز M</option>
              <option value="value">سایز: S</option>
            </select>
            <select name="select" id="productColor">
              <option value="value">رنگ: Black</option>
              <option value="value">رنگ: White</option>
              <option value="value">رنگ: Red</option>
              <option value="value">رنگ: Purple</option>
            </select>
          </div>
          {/* Cart & Favourite Box  */}
          <div className="cart-fav-box flex gap-4 items-center">
            {/* Cart  */}
            <button
              onClick={() => addToBasketHandler(productDetail)}
              name="addtocart"
              className="btn essence-btn">
              اضافه به سبد خرید
            </button>
            {/* Favourite  */}
            {/* <div className="product-favourite ml-4"> */}
            {/* <MdFavoriteBorder size={25} /> */}
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default product;
