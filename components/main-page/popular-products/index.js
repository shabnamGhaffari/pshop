"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PopularProducts = () => {
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
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <section className="new_arrivals_area section-padding-80 clearfix">
      <div className="container mx-auto px-8 lg:px-32">
        <div className="section-heading text-center">
          <h2>پرفروش ترین محصولات</h2>
        </div>
      </div>
      <div className="container mx-auto px-8 lg:px-32">
        <Slider {...settings} >
          {/* Single Product  */}
          <div className="single-product-wrapper">
            {/* Product Image  */}
            <div className="product-img">
              <img src="images/product-img/product-1.jpg" alt="" />
              <img
                className="hover-img"
                src="images/product-img/product-2.jpg"
                alt=""
              />
              <div className="product-favourite">
                <a href="#" className="favme fa fa-heart"></a>
              </div>
            </div>
            <div className="product-description">
              <span>topshop</span>
              <a href="single-product-details.html">
                <h6>Knot Front Mini Dress</h6>
              </a>
              <p className="product-price">$80.00</p>

              <div className="hover-content">
                <div className="add-to-cart-btn">
                  <a href="#" className="btn essence-btn">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="single-product-wrapper">
            <div className="product-img">
              <img src="images/product-img/product-2.jpg" alt="" />
              <img
                className="hover-img"
                src="images/product-img/product-3.jpg"
                alt=""
              />
              <div className="product-favourite">
                <a href="#" className="favme fa fa-heart"></a>
              </div>
            </div>
            <div className="product-description">
              <span>topshop</span>
              <a href="single-product-details.html">
                <h6>Poplin Displaced Wrap Dress</h6>
              </a>
              <p className="product-price">$80.00</p>
              <div className="hover-content">
                <div className="add-to-cart-btn">
                  <a href="#" className="btn essence-btn">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="single-product-wrapper">
            <div className="product-img">
              <img src="images/product-img/product-3.jpg" alt="" />
              <img
                className="hover-img"
                src="images/product-img/product-4.jpg"
                alt=""
              />
              <div className="product-badge offer-badge">
                <span>-30%</span>
              </div>
              <div className="product-favourite">
                <a href="#" className="favme fa fa-heart"></a>
              </div>
            </div>
            <div className="product-description">
              <span>mango</span>
              <a href="single-product-details.html">
                <h6>PETITE Crepe Wrap Mini Dress</h6>
              </a>
              <p className="product-price">
                <span className="old-price">$75.00</span> $55.00
              </p>
              <div className="hover-content">
                <div className="add-to-cart-btn">
                  <a href="#" className="btn essence-btn">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="single-product-wrapper">
            <div className="product-img">
              <img src="images/product-img/product-4.jpg" alt="" />
              <img
                className="hover-img"
                src="images/product-img/product-5.jpg"
                alt=""
              />
              <div className="product-badge new-badge">
                <span>New</span>
              </div>
              <div className="product-favourite">
                <a href="#" className="favme fa fa-heart"></a>
              </div>
            </div>
            <div className="product-description">
              <span>mango</span>
              <a href="single-product-details.html">
                <h6>PETITE Belted Jumper Dress</h6>
              </a>
              <p className="product-price">$80.00</p>
              <div className="hover-content">
                <div className="add-to-cart-btn">
                  <a href="#" className="btn essence-btn">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="single-product-wrapper">
            <div className="product-img">
              <img src="images/product-img/product-4.jpg" alt="" />
              <img
                className="hover-img"
                src="images/product-img/product-5.jpg"
                alt=""
              />
              <div className="product-badge new-badge">
                <span>New</span>
              </div>
              <div className="product-favourite">
                <a href="#" className="favme fa fa-heart"></a>
              </div>
            </div>
            <div className="product-description">
              <span>mango</span>
              <a href="single-product-details.html">
                <h6>PETITE Belted Jumper Dress</h6>
              </a>
              <p className="product-price">$80.00</p>
              <div className="hover-content">
                <div className="add-to-cart-btn">
                  <a href="#" className="btn essence-btn">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default PopularProducts;
