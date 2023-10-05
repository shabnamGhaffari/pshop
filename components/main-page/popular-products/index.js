"use client";
import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import {shopAxios} from "../../../axios/shopAxios";
import {useDispatch} from "react-redux";
import {addToBasket} from "../../../redux/slices/basketSlice";
import Link from "next/link";
const PopularProducts = () => {
  const [productList, setProductList] = useState([]);
  const getProductList = async () => {
    const response = await shopAxios.get(`/products?column=view_count`);
    setProductList(response?.data?.data);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    getProductList();
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <section className="new_arrivals_area section-padding-80 clearfix">
      <div className="container mx-auto px-8 lg:px-32">
        <div className="section-heading text-center">
          <h2>پرفروش ترین محصولات</h2>
        </div>
      </div>
      <div className="container mx-auto px-8 lg:px-32">
        <Slider {...settings}>
          {/* Single Product  */}
          {productList?.map(product => (
            <div className="single-product-wrapper">
              <Link href={`/products/${product?.id}`} className="product-img">
                <img
                  src={product?.images[0]["image_path"]}
                  alt={product?.images[0]["image_name"]}
                />
                <img
                  className="hover-img"
                  src={product?.images[1]?.image_path}
                  alt={product?.images[1]?.image_name}
                />
              </Link>
              <div className="product-description text-right flex flex-col justify-between items-end">
                <span>{product?.name}</span>
                <h6>{product?.description}</h6>
                <div className="flex items-center gap-1">
                  <div>تومان</div>
                  <p className="product-price">{product?.price}</p>
                </div>
                <div className="hover-content">
                  <div className="add-to-cart-btn">
                    <button
                      // onClick={() => addToBasketHandler(product)}
                      className="btn essence-btn">
                      اضافه به سبد خرید
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PopularProducts;
