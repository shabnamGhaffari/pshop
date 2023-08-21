"use client";
import Pagination from "rc-pagination";
import React, {useEffect, useState} from "react";
import {shopAxios} from "../../axios/shopAxios";
import "./pagination.css";
import {addToBasket} from "../../redux/slices/basketSlice";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import Link from "next/link";
import {useDispatch} from "react-redux";
const ShopArea = () => {
  const [showSubItems, setShowSubItems] = useState(false);
  const [total, setTotal] = useState(null);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(null);
  const [brandsList, setBrandsList] = useState([]);
  const dispatch = useDispatch();

  const onPageChange = page => {
    setCurrentPage(page);
  };
  const getProductList = async () => {
    const response = await shopAxios.get(`/products?page=${currentPage}`);
    setPageSize(response?.data?.limit);
    setTotal(response?.data?.total);
    setItems(response?.data?.data);
  };
  const getBrandsList = async () => {
    const response = await shopAxios.get(`/brands`);
    setBrandsList(response?.data?.data);
  };
  useEffect(() => {
    getBrandsList();
  }, []);
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
  const addToBasketHandler = item => {
    dispatch(addToBasket(item));
  };
  return (
    <section className="shop_grid_area section-padding-80">
      <div className="container flex flex-col md:flex-row mx-auto px-8 lg:px-32">
        {/* <div className="shop_sidebar_area flex-[25%]">
         
          <div className="widget catagory">
          
            <h6 className="widget-title">دسته بندی ها</h6>
           
            <div className="catagories-menu mt-8">
              <ul id="menu-content2" className="menu-content show">
               
                <li data-toggle="collapse" data-target="#clothing">
                  <a href="#" onClick={() => setShowSubItems(!showSubItems)}>
                    clothing
                  </a>
                  <ul
                    className={`sub-menu transition-all duration-700 show ${
                      showSubItems ? "h-auto opacity-1" : "opacity-0 h-0"
                    }`}
                    id="clothing">
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

          <div className="widget brands mb-50 mt-52">
       
            <p className="widget-title2 mb-30">برندها</p>
            <div className="widget-desc">
              <ul>
                {brandsList.map(brand => (
                  <li>
                    <a href="#">{brand?.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}
        <div className="shop_grid_product_area flex-[70%] flex flex-col items-center">
          <div className="product-topbar flex flex-row items-center justify-between w-full">
            {/* Total Products  */}
            <div className="total-products">
              <p>
                تعداد کل محصولات یافت شده <span>{total}</span>
              </p>
            </div>
            {/* Sorting  */}
            {/* <div className="product-sorting flex items-center">
              <div>مرتب سازی:</div>
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
            </div> */}
          </div>
          <div className="flex flex-wrap flex-auto justify-between">
            {/* Single Product  */}
            {items?.length &&
              items.map(item => (
                <div className="single-product-wrapper w-[95%] md:w-[45%] lg:w-[30%]">
                  {/* Product Image  */}
                  <Link href={`/products/${item?.id}`} className="product-img">
                    <img
                      src={item?.images[0]["image_path"]}
                      alt={item?.images[0]["image_name"]}
                    />
                    {/* Hover Thumb  */}
                    <img
                      className="hover-img"
                      src={item?.images[1]["image_path"]}
                      alt={item?.images[1]["image_name"]}
                    />

                    {/* Product Badge  */}
                    {/* <div className="product-badge offer-badge">
                      <span>-30%</span>
                    </div> */}
                    {/* Favourite  */}
                    {/* <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart"></a>
                    </div> */}
                  </Link>

                  {/* Product Description */}
                  <div className="product-description">
                    <span>{item?.manufacturer?.name}</span>
                    <h6>{item?.name}</h6>
                    <div className="flex items-center gap-1">
                      <p className="product-price">
                        {/* <span className="old-price">$75.00</span> */}
                        {item?.price}
                      </p>
                      <div>تومان</div>
                    </div>

                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart  */}
                      <div className="add-to-cart-btn">
                        <button
                          onClick={() => addToBasketHandler(item)}
                          className="btn essence-btn text-center">
                          اضافه به سبد خرید
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <Pagination
            style={{
              display: "flex",
              width: "60%",
              justifyContent: "space-between",
              flexDirection: "row-reverse",
              cursor: "pointer",
              alignItems: "center",
            }}
            pageSize={pageSize}
            total={total}
            current={currentPage}
            onChange={(currentPage, pageSize) => setCurrentPage(currentPage)}
            // prevIcon={
            //   <GrFormPrevious
            //     size={22}
            //     className="cursor-pointer"
            //     onClick={prevPage}
            //   />
            // }
            // nextIcon={
            //   <GrFormNext
            //     size={22}
            //     className="cursor-pointer"
            //     onClick={nextPage}
            //   />
            // }
          />
        </div>
      </div>
    </section>
  );
};

export default ShopArea;
