"use client";
import Pagination from "rc-pagination";
import React, {useEffect, useState} from "react";
import {shopAxios} from "../../axios/shopAxios";
import "./pagination.css";
import {addToBasket} from "../../redux/slices/basketSlice";
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
        <div className="shop_grid_product_area flex-[70%] flex flex-col items-center">
          <div className="product-topbar flex flex-row items-center justify-between w-full">
            {/* Total Products  */}
            <div className="total-products">
              <p>
                تعداد کل محصولات یافت شده <span>{total}</span>
              </p>
            </div>
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
                      src={item?.images[1]?.image_path}
                      alt={item?.images[1]?.image_name}
                    />
                  </Link>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>{item?.manufacturer?.name}</span>
                    <h6>{item?.name}</h6>
                    <div className="flex items-center gap-1">
                      <p className="product-price">{item?.price}</p>
                      <div>تومان</div>
                    </div>

                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart  */}
                      <div className="add-to-cart-btn">
                        <button className="btn essence-btn text-center">
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
          />
        </div>
      </div>
    </section>
  );
};

export default ShopArea;
