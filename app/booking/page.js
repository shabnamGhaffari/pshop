"use client";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AxiosWithToken} from "../../axios/axiosWhithToken";

const Booking = () => {
  const [address, setAddress] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const {items: basketProductList, totalPrice: basketTotalPrice} = useSelector(
    state => state.basketReducer
  );
  const {addressId} = useSelector(state => state.addressReducer);
  console.log(addressId);
  const {isAuth} = useSelector(state => state.authReducer);
  const getUserAddress = async () => {
    try {
      const response = await AxiosWithToken.get("/user-addresses");
      const address = response?.data?.data?.find(item => item?.id == addressId);
      setAddress(address);
    } catch {}
  };
  useEffect(() => {
    getUserAddress();
  }, []);
  if (!isAuth) {
    router.replace("/login");
  } else {
    return (
      <div class="container flex sm:gap-20 px-4 sm:px-12 lg:px-32 py-4 sm:py-20 flex-col lg:flex-row">
        <div class="order-details-confirmation flex flex-col justify-between">
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
                    <div className="w-[25px] text-[14px] text-center">
                      {product.count}
                    </div>
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
              <li>
                <span>
                  آدرس ارسال سفارش: {address?.province} - {address?.county}-
                  {address?.postal_code} - {address?.address}
                </span>{" "}
                <span></span>
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
              پرداخت آنلاین
            </button>
          </>
        </div>
      </div>
    );
  }
};

export default Booking;
