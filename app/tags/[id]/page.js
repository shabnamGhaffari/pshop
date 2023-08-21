"use client";
import Pagination from "rc-pagination";
import React, {useEffect, useState} from "react";
import {shopAxios} from "../../../axios/shopAxios";
import "../../products/pagination.css";
import {addToBasket} from "../../../redux/slices/basketSlice"
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import Link from "next/link";
import { useDispatch } from "react-redux";
const Tags = ({params}) => {
  const [showSubItems, setShowSubItems] = useState(false);
  const [total, setTotal] = useState(null);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(null);
  const tagId = params?.id;
  const dispatch=useDispatch()
  const onPageChange = page => {
    setCurrentPage(page);
  };
  const getTagsList = async () => {
    try {
      const response = await shopAxios.get(`/tags/${tagId}`);
      console.log("response", response);
      setPageSize(response?.data?.limit);
      setTotal(response?.data?.total);
      setItems(response?.data?.data);
    } catch {}
  };

  useEffect(() => {
    getTagsList();
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
  const addToBasketHandler=(item)=>{
    dispatch(addToBasket(item))
  }
  return (
    <section className="shop_grid_area section-padding-80">
      <div className="container flex flex-col md:flex-row mx-auto px-8 lg:px-32">
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
                <Link
                  href={`/products/${item?.id}`}
                  className="single-product-wrapper w-[95%] md:w-[45%] lg:w-[30%]">
                  {/* Product Image  */}
                  <div className="product-img">
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
                  </div>

                  {/* Product Description */}
                  <div className="product-description">
                    <span>{item?.manufacturer?.name}</span>
                    <a href="single-product-details.html">
                      <h6>{item?.name}</h6>
                    </a>
                    <p className="product-price">
                      {/* <span className="old-price">$75.00</span> */}
                      {item?.price}
                    </p>

                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart  */}
                      <div className="add-to-cart-btn">
                        <button onClick={()=>addToBasketHandler(item)} className="btn essence-btn text-center">
                          اضافه به سبد خرید
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
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

export default Tags;
