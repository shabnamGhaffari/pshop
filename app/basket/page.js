"use client";
import Link from "next/link";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlinePlusSquare} from "react-icons/ai";
import {AiOutlineMinusSquare} from "react-icons/ai";
import {RiDeleteBin2Line} from "react-icons/ri";
import {
  addToBasket,
  decrementAmount,
  removeFromBasket,
} from "../../redux/slices/basketSlice";

const Basket = () => {
  const dispatch = useDispatch();
  const {items: basketProductList, totalPrice: basketTotalPrice} = useSelector(
    state => state.basketReducer
  );
  const addToBasketHanlder = product => {
    dispatch(addToBasket(product));
  };
  const decrementAmountHandler = product => {
       dispatch(decrementAmount(product));
  };
  const removeHandler = product => {
    dispatch(removeFromBasket(product));
  };
  return (
    <>
      <div
        class="breadcumb_area bg-img"
        style={{"background-image": "url(/images/bg-img/breadcumb.jpg)"}}>
        <div class="h-full flex justify-center items-center">
          <div class="page-title text-center">
            <h2>Checkout</h2>
          </div>
        </div>
      </div>

      {/* ##### Checkout Area Start #####  */}

      <div class="container flex sm:gap-20 px-4 sm:px-12 lg:px-32 py-4 sm:py-20 flex-col lg:flex-row">
        <div class="order-details-confirmation flex flex-col justify-between">
          {basketProductList?.length > 0 ? (
            <>
              <div class="cart-page-heading flex flex-col gap-4">
                <h5>سفارش شما</h5>
                <p>جزئیات</p>
              </div>
              <ul class="order-details-form flex flex-col justify-between">
                <li className="inline-flex justify-between">
                  <div className="w-[40%]">محصول</div>
                  <div>مبلغ</div>
                </li>
                {basketProductList?.map(product => (
                  <li className="inline-flex justify-between">
                    <div className="w-[40%] flex justify-start">
                      <div className="w-[70%]">{product.name}</div>
                      <div className="flex justify-between w-[30%]">
                        <div>{product.selected_color_name}</div>
                        <div>{product.selected_size_name}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <AiOutlinePlusSquare
                        size={20}
                        cursor="pointer"
                        color="navy"
                        onClick={() => addToBasketHanlder(product)}
                      />
                      <div className="w-[25px] text-[14px] text-center">
                        {product.count}
                      </div>
                      <AiOutlineMinusSquare
                        size={20}
                        cursor="pointer"
                        color="navy"
                        onClick={() => decrementAmountHandler(product)}
                      />
                    </div>
                    <div title="حذف محصول">
                      <RiDeleteBin2Line
                        size={20}
                        cursor="pointer"
                        color="red"
                        onClick={() => removeHandler(product)}
                      />
                    </div>
                    <div>{product.price}</div>
                  </li>
                ))}
                <li>
                  <span>مجموع سفارش</span> <span>{basketTotalPrice}</span>
                </li>
                <li>
                  <span>هزینه ارسال</span> <span>Free</span>
                </li>
                <li>
                  <span>مبلغ کل</span> <span></span>
                </li>
              </ul>
              {/* <div
            className="flex justify-between items-center"
            onChange={handleChangePay}>
            <div className="flex items-center gap-1">
              <input type="radio" name="payment" id="pay-1" value="1" />
              بانک ملت
            </div>
            <div className="flex items-center gap-1">
              <input type="radio" name="payment" id="pay-2" value="2" />
              بانک سامان
            </div>
          </div> */}
              <button
                type="button"
                className="mt-10 w-52 text-red-700 disabled:cursor-not-allowed disabled:bg-white disabled:hover:text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                ادامه فرآیند خرید
              </button>
            </>
          ) : (
            <div className="flex justify-center text-lg">سبد خرید شما خالی است</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Basket;
