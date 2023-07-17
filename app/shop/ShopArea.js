"use client";

import React, {useEffect, useState} from "react";
import {shopAxios} from "../../axios/shopAxios";
import Pagination from "./Pagination";

const ShopArea = () => {
  const [showSubItems, setShowSubItems] = useState(false);
  const [total, setTotal] = useState(null);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(null);

  const onPageChange = page => {
    setCurrentPage(page);
  };
  const getProductList = async () => {
    const response = await shopAxios.get(`/products?page=${currentPage}`);
    const data = response?.data?.total;
    console.log("dd", response?.data);
    setPageSize(response?.data?.limit);
    setTotal(data);
    setItems(response?.data?.data);
  };
  useEffect(() => {
    getProductList();
  }, [currentPage]);
  const nextPage = () => {
    if (currentPage === pageSize) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };
  return (
    <section className="shop_grid_area section-padding-80">
      <div className="container flex flex-col md:flex-row mx-auto px-8 lg:px-32">
        <div className="shop_sidebar_area flex-[25%]">
          {/* ##### Single Widget #####  */}
          <div className="widget catagory">
            {/* Widget Title  */}
            <h6 className="widget-title">دسته بندی ها</h6>
            {/* Catagories   */}
            <div className="catagories-menu mt-8">
              <ul id="menu-content2" className="menu-content show">
                {/* Single Item  */}
                <li data-toggle="collapse" data-target="#clothing">
                  <a href="#" onClick={() => setShowSubItems(!showSubItems)}>
                    clothing
                  </a>
                  <ul className={`sub-menu transition-all duration-700 show ${showSubItems ?"h-auto opacity-1" :"opacity-0 h-0" }`} id="clothing">
                    <li>
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">Bodysuits</a>
                    </li>
                    <li>
                      <a href="#">Dresses</a>
                    </li>
                    <li>
                      <a href="#">Hoodies &amp; Sweats</a>
                    </li>
                    <li>
                      <a href="#">Jackets &amp; Coats</a>
                    </li>
                    <li>
                      <a href="#">Jeans</a>
                    </li>
                    <li>
                      <a href="#">Pants &amp; Leggings</a>
                    </li>
                    <li>
                      <a href="#">Rompers &amp; Jumpsuits</a>
                    </li>
                    <li>
                      <a href="#">Shirts &amp; Blouses</a>
                    </li>
                    <li>
                      <a href="#">Shirts</a>
                    </li>
                    <li>
                      <a href="#">Sweaters &amp; Knits</a>
                    </li>
                  </ul>
                </li>
                {/* Single Item  */}
                <li
                  data-toggle="collapse"
                  data-target="#shoes"
                  className="collapsed">
                  <a href="#">shoes</a>
                  <ul className="sub-menu" id="shoes">
                    <li>
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">Bodysuits</a>
                    </li>
                    <li>
                      <a href="#">Dresses</a>
                    </li>
                    <li>
                      <a href="#">Hoodies &amp; Sweats</a>
                    </li>
                    <li>
                      <a href="#">Jackets &amp; Coats</a>
                    </li>
                    <li>
                      <a href="#">Jeans</a>
                    </li>
                    <li>
                      <a href="#">Pants &amp; Leggings</a>
                    </li>
                    <li>
                      <a href="#">Rompers &amp; Jumpsuits</a>
                    </li>
                    <li>
                      <a href="#">Shirts &amp; Blouses</a>
                    </li>
                    <li>
                      <a href="#">Shirts</a>
                    </li>
                    <li>
                      <a href="#">Sweaters &amp; Knits</a>
                    </li>
                  </ul>
                </li>
                {/* Single Item  */}
                <li
                  data-toggle="collapse"
                  data-target="#accessories"
                  className="collapsed">
                  <a href="#">accessories</a>
                  <ul className="sub-menu" id="accessories">
                    <li>
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">Bodysuits</a>
                    </li>
                    <li>
                      <a href="#">Dresses</a>
                    </li>
                    <li>
                      <a href="#">Hoodies &amp; Sweats</a>
                    </li>
                    <li>
                      <a href="#">Jackets &amp; Coats</a>
                    </li>
                    <li>
                      <a href="#">Jeans</a>
                    </li>
                    <li>
                      <a href="#">Pants &amp; Leggings</a>
                    </li>
                    <li>
                      <a href="#">Rompers &amp; Jumpsuits</a>
                    </li>
                    <li>
                      <a href="#">Shirts &amp; Blouses</a>
                    </li>
                    <li>
                      <a href="#">Shirts</a>
                    </li>
                    <li>
                      <a href="#">Sweaters &amp; Knits</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* ##### Single Widget #####  */}
          <div className="widget price mb-50">
            {/* Widget Title  */}
            <h6 className="widget-title mb-30">Filter by</h6>
            {/* Widget Title 2  */}
            <p className="widget-title2 mb-30">Price</p>

            <div className="widget-desc">
              <div className="slider-range">
                <div
                  data-min="49"
                  data-max="360"
                  data-unit="$"
                  className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                  data-value-min="49"
                  data-value-max="360"
                  data-label-result="Range:">
                  <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                  <span
                    className="ui-slider-handle ui-state-default ui-corner-all"
                    tabindex="0"></span>
                  <span
                    className="ui-slider-handle ui-state-default ui-corner-all"
                    tabindex="0"></span>
                </div>
                <div className="range-price">Range: $49.00 - $360.00</div>
              </div>
            </div>
          </div>

          {/* ##### Single Widget #####  */}
          {/* <div className="widget color mb-50">
      
            <p className="widget-title2 mb-30">Color</p>
            <div className="widget-desc">
              <ul className="flex">
                <li>
                  <a href="#" className="color1"></a>
                </li>
                <li>
                  <a href="#" className="color2"></a>
                </li>
                <li>
                  <a href="#" className="color3"></a>
                </li>
                <li>
                  <a href="#" className="color4"></a>
                </li>
                <li>
                  <a href="#" className="color5"></a>
                </li>
                <li>
                  <a href="#" className="color6"></a>
                </li>
                <li>
                  <a href="#" className="color7"></a>
                </li>
                <li>
                  <a href="#" className="color8"></a>
                </li>
                <li>
                  <a href="#" className="color9"></a>
                </li>
                <li>
                  <a href="#" className="color10"></a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* ##### Single Widget ##### */}
          <div className="widget brands mb-50">
            {/* Widget Title 2  */}
            <p className="widget-title2 mb-30">Brands</p>
            <div className="widget-desc">
              <ul>
                <li>
                  <a href="#">Asos</a>
                </li>
                <li>
                  <a href="#">Mango</a>
                </li>
                <li>
                  <a href="#">River Island</a>
                </li>
                <li>
                  <a href="#">Topshop</a>
                </li>
                <li>
                  <a href="#">Zara</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="shop_grid_product_area flex-[70%] flex flex-col">
          <div className="product-topbar flex items-center justify-between">
            {/* Total Products  */}
            <div className="total-products">
              <p>
                تعداد کل محصولات یافت شده <span>{total}</span>
              </p>
            </div>
            {/* Sorting  */}
            <div className="product-sorting flex items-center">
              <div>Sort by:</div>
              <form action="#" method="get">
                <select
                  name="select"
                  id="sortByselect"
                  className="cursor-pointer">
                  <option value="value">Highest Rated</option>
                  <option value="value">Newest</option>
                  <option value="value">Price: $$ - $</option>
                  <option value="value">Price: $ - $$</option>
                </select>
                <input type="submit" className="hidden" value="" />
              </form>
            </div>
          </div>
          <div className="flex flex-wrap flex-auto justify-between">
            {/* Single Product  */}
            {items?.length &&
              items.map(item => (
                <div className="single-product-wrapper w-[95%] md:w-[45%] lg:w-[30%]">
                  {/* Product Image  */}
                  <div className="product-img">
                    <img src="images/product-img/product-1.jpg" alt="" />
                    {/* Hover Thumb  */}
                    <img
                      className="hover-img"
                      src="images/product-img/product-2.jpg"
                      alt=""
                    />

                    {/* Product Badge  */}
                    <div className="product-badge offer-badge">
                      <span>-30%</span>
                    </div>
                    {/* Favourite  */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart"></a>
                    </div>
                  </div>

                  {/* Product Description */}
                  <div className="product-description">
                    <span>{item?.manufacturer?.name}</span>
                    <a href="single-product-details.html">
                      <h6>{item?.name}</h6>
                    </a>
                    <p className="product-price">
                      <span className="old-price">$75.00</span> $55.00
                    </p>

                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart  */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn text-center">
                          اضافه به سبد خرید
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* Pagination */}
          <Pagination
            items={Number(total)}
            currentPage={currentPage}
            pageSize={Number(pageSize)}
            onPageChange={onPageChange}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      </div>
    </section>
  );
};

export default ShopArea;
