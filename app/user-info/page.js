"use client";
import Link from "next/link";
import React, {useState} from "react";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    province: "",
    city: "",
    address: "",
    postalCode: "",
    mobile: "",
    email: "",
    policy: false,
  });
  const handleChange = e => {
    if (e.target.name === "policy") {
      setUserInfo({...userInfo, [e.target.name]: e.target.checked});
    } else {
      setUserInfo({...userInfo, [e.target.name]: e.target.value});
    }
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
        <div class="checkout_details_area mt-2 sm:mt-50 clearfix flex-[100%]">
          <div class="cart-page-heading mb-30 ">
            <h5>آدرس صورتحساب</h5>
          </div>

          <form action="#" method="post">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label for="first_name">
                    نام<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    class="form-control"
                    id="first_name"
                    value={userInfo.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label for="last_name">
                    نام خانوادگی <span>*</span>
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    class="form-control"
                    id="last_name"
                    value={userInfo.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label for="state">
                  استان <span>*</span>
                </label>
                <input
                  type="text"
                  name="province"
                  class="form-control"
                  id="state"
                  value={userInfo.province}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label for="city">
                  شهر <span>*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  class="form-control"
                  id="city"
                  value={userInfo.city}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label for="street_address">
                  آدرس <span>*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  className="form-control w-full"
                  id="street_address"
                  value={userInfo.address}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label for="postcode">
                  کد پستی <span>*</span>
                </label>
                <input
                  name="postalCode"
                  type="text"
                  class="form-control"
                  id="postcode"
                  value={userInfo.postalCode}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label for="phone_number">
                  شماره تماس <span>*</span>
                </label>
                <input
                  type="number"
                  name="mobile"
                  class="form-control"
                  id="phone_number"
                  min="0"
                  value={userInfo.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label for="email_address">آدرس ایمیل</label>
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  id="email_address"
                  value={userInfo.email}
                  onChange={handleChange}
                />
              </div>

              <div class="col-12">
                <div className="custom-control custom-checkbox gap-1 items-center flex">
                  <input
                    name="policy"
                    type="checkbox"
                    class="custom-control-input"
                    checked={userInfo.policy}
                    onChange={handleChange}
                    id="customCheck1"
                  />
                  <label class="custom-control-label" for="customCheck1">
                    قوانین و مقررات
                  </label>
                </div>
                {/* <div class="custom-control custom-checkbox d-block mb-2">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck2"
                  />
                  <label class="custom-control-label" for="customCheck2">
                    Create an accout
                  </label>
                </div>
                <div class="custom-control custom-checkbox d-block">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck3"
                  />
                  <label class="custom-control-label" for="customCheck3">
                    Subscribe to our newsletter
                  </label>
                </div> */}
              </div>
            </div>
          </form>
        </div>
        <div class="order-details-confirmation flex flex-col justify-between">
          <div class="cart-page-heading flex flex-col gap-4">
            <h5>سفارش شما</h5>
            <p>جزئیات</p>
          </div>
          <ul class="order-details-form flex flex-col justify-between">
            <li>
              <span>محصول</span> <span>مبلغ</span>
            </li>
            <li>
              <span>Cocktail Yellow dress</span> <span>$59.90</span>
            </li>
            <li>
              <span>مبلغ خرید</span> <span>$59.90</span>
            </li>
            <li>
              <span>هزینه ارسال</span> <span>Free</span>
            </li>
            <li>
              <span>مبلغ کل</span> <span>$59.90</span>
            </li>
          </ul>

          {/* <div id="accordion" role="tablist" class="mb-4">
            <div class="card">
              <div class="card-header" role="tab" id="headingOne">
                <h6 class="mb-0">
                  <a
                    data-toggle="collapse"
                    href="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne">
                    <i class="fa fa-circle-o mr-3"></i>Paypal
                  </a>
                </h6>
              </div>

              <div
                id="collapseOne"
                class="collapse"
                role="tabpanel"
                aria-labelledby="headingOne"
                data-parent="#accordion">
                <div class="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin pharetra tempor so dales. Phasellus sagittis auctor
                    gravida. Integ er bibendum sodales arcu id te mpus. Ut
                    consectetur lacus.
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" role="tab" id="headingTwo">
                <h6 class="mb-0">
                  <a
                    class="collapsed"
                    data-toggle="collapse"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo">
                    <i class="fa fa-circle-o mr-3"></i>cash on delievery
                  </a>
                </h6>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
                data-parent="#accordion">
                <div class="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Explicabo quis in veritatis officia inventore, tempore
                    provident dignissimos.
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" role="tab" id="headingThree">
                <h6 class="mb-0">
                  <a
                    class="collapsed"
                    data-toggle="collapse"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree">
                    <i class="fa fa-circle-o mr-3"></i>credit card
                  </a>
                </h6>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
                data-parent="#accordion">
                <div class="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse quo sint repudiandae suscipit ab soluta delectus
                    voluptate, vero vitae
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" role="tab" id="headingFour">
                <h6 class="mb-0">
                  <a
                    class="collapsed"
                    data-toggle="collapse"
                    href="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour">
                    <i class="fa fa-circle-o mr-3"></i>direct bank transfer
                  </a>
                </h6>
              </div>
              <div
                id="collapseFour"
                class="collapse show"
                role="tabpanel"
                aria-labelledby="headingThree"
                data-parent="#accordion">
                <div class="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Est cum autem eveniet saepe fugit, impedit magni.
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          {/* <Link
            href="#"
            className={`btn essence-btn w-32 ${
              !userInfo.firstName ||
              !userInfo.lastName ||
              !userInfo.province ||
              !userInfo.city ||
              !userInfo.address ||
              !userInfo.postalCode ||
              !userInfo.mobile ||
              !userInfo.policy
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}>
            پرداخت آنلاین
          </Link> */}
          <button
            type="button"
            className="mt-10 lg:mt-0 text-red-700 disabled:cursor-not-allowed disabled:bg-white disabled:hover:text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            disabled={
              !userInfo.firstName ||
              !userInfo.lastName ||
              !userInfo.province ||
              !userInfo.city ||
              !userInfo.address ||
              !userInfo.postalCode ||
              !userInfo.mobile ||
              !userInfo.policy
            }>
            {" "}
            پرداخت آنلاین
          </button>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
