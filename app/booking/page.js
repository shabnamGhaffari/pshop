"use client";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AxiosWithToken} from "../../axios/axiosWhithToken";

const Booking = () => {
  const [address, setAddress] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [orderItems, setOrderItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);
  const [shipping, setShipping] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const {items: basketProductList, totalPrice: basketTotalPrice} = useSelector(
    state => state.basketReducer
  );
  const {addressId} = useSelector(state => state.addressReducer);
  const {isAuth} = useSelector(state => state.authReducer);

  const getUserAddress = async () => {
    try {
      const response = await AxiosWithToken.get("/user-addresses");
      const address = response?.data?.data?.find(item => item?.id == addressId);
      // setAddress(address);
    } catch {}
  };
  useEffect(() => {
    getUserAddress();
    getShopInfo();
  }, []);
  const getShopInfo = async () => {
    const products = basketProductList.map(item => ({
      id: item.selectedSubProduct,
      quantity: item.count,
    }));
    const formObJ = {address_id: addressId, products};
    try {
      const response = await AxiosWithToken.post("/booking", formObJ);
      setOrderId(response?.data?.data?.id);
      console.log(response);
      setOrderItems(response?.data?.data?.order_items);
      setAddress(response?.data?.data?.address);
      setTotalPrice(response?.data?.data?.paid_price);
      setShipping(response?.data?.data?.shipping_fee);
    } catch {}
  };
  const handleSubmit = async () => {
    try {
      const response = await AxiosWithToken.post("/pay", {order_id: orderId});
      console.log(response);
    } catch {}
  };
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
              {orderItems?.map(order => (
                <li className="inline-flex justify-between">
                  <div className="flex w-[50%] sm:w-[60%] flex-col sm:flex-row justify-start">
                    <div className="w-[50%]">{order?.product?.name}</div>
                    <div className="flex flex-col sm:flex-row justify-between w-[50%]">
                      <div className="w-[60%]">{order?.product?.color}</div>
                      <div className="w-[40%]">{order?.product?.size}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[25%] sm:w-[10%]">
                    <div className="text-[14px] text-center">
                      {order?.quantity}
                    </div>
                  </div>
                  <div className="flex w-[35%] sm:w-[20%] justify-end">
                    {order.product.price} ریال
                  </div>
                </li>
              ))}
              <li>
                <span>مجموع سفارش</span> <span>{totalPrice} ریال</span>
              </li>
              <li>
                <span>هزینه ارسال</span> <span>{shipping} ریال</span>
              </li>
              <li>
                <span>مبلغ کل</span> <span>{totalPrice + shipping} ریال</span>
              </li>
              <li>
                <span>
                  آدرس ارسال سفارش: {address?.province} - {address?.county} -{" "}
                  {address?.address} - {address?.postal_code}
                </span>
                <span></span>
              </li>
            </ul>
            <button
              onClick={handleSubmit}
              type="button"
              className="mt-10 w-52 text-red-700 disabled:cursor-not-allowed disabled:bg-white disabled:hover:text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
              ورود به درگاه پرداخت
            </button>
          </>
        </div>
      </div>
    );
  }
};

export default Booking;
