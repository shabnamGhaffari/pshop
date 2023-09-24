"use client";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {shopAxios} from "../../axios/shopAxios";
import {setAuth, setUserData} from "../../redux/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.authReducer.isAuth);
  console.log(isAuth);
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
    password: "",
    confirmPassword: "",
  });
  const [loginInfo, setLoginInfo] = useState({email: "", password: ""});
  const [pay, setPay] = useState(null);
  const handleChangePay = e => {
    setPay(e.target.value);
  };
  const handleChange = e => {
    if (e.target.name === "policy") {
      setUserInfo({...userInfo, [e.target.name]: e.target.checked});
    } else {
      setUserInfo({...userInfo, [e.target.name]: e.target.value});
    }
  };
  const handleChangeLogin = e => {
    setLoginInfo({...loginInfo, [e.target.name]: e.target.value});
  };
  const handleRegister = async () => {
    const formObj = {
      first_name: userInfo.firstName,
      last_name: userInfo.lastName,
      email: userInfo.email,
      password: userInfo.password,
      phone_number: userInfo.mobile,
      password_confirmation: userInfo.confirmPassword,
    };
    try {
      const response = await shopAxios.post("/register", formObj);
      toast.success("ثبت نام با موفقیت انجام شد", {position: "bottom-right"});
    } catch {}
  };
  const handleLogin = async () => {
    const formObj = {email: loginInfo.email, password: loginInfo.password};
    try {
      const response = await shopAxios.post("/login", formObj);
      const token = response?.data?.token;
      const firstName = response?.data?.user?.first_name;
      const lastName = response?.data?.user?.last_name;
      if (token) {
        localStorage.setItem("access_token", token);
        localStorage.setItem("first_name", firstName);
        localStorage.setItem("last_name", lastName);
        dispatch(setAuth());
        dispatch(setUserData({firstName, lastName, token}));
      }

      toast.success("ورود با موفقیت انجام شد", {position: "bottom-right"});
    } catch {}
  };
  return (
    <div className="flex flex-col gap-12 p-12 lg:flex-row-reverse bg-[#babbf6]">
      <div class="checkout_details_area p-12  sm:mt-50 rounded-lg bg-[#fff] flex flex-col flex-[50%]">
        <div className="mb-12 w-full flex text-lg justify-center font-bold">
          ثبت نام
        </div>
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
                className="border rounded-md p-2"
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
                className="border rounded-md p-2"
              />
            </div>
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
              className="border rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label for="email_address">
              آدرس ایمیل<span>*</span>
            </label>
            <input
              name="email"
              type="email"
              class="form-control"
              id="email_address"
              value={userInfo.email}
              onChange={handleChange}
              className="border rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label for="email_address">
              رمز ورود<span>*</span>
            </label>
            <input
              name="password"
              type="password"
              class="form-control"
              id="password"
              value={userInfo.password}
              onChange={handleChange}
              className="border rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label for="email_address">
              تکرار رمز ورود<span>*</span>
            </label>
            <input
              name="confirmPassword"
              type="password"
              class="form-control"
              id="confirm-password"
              value={userInfo.c}
              onChange={handleChange}
              className="border rounded-md p-2"
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
          </div>
          <button
            disabled={
              !userInfo.firstName ||
              !userInfo.lastName ||
              !userInfo.email ||
              !userInfo.mobile ||
              !userInfo.password ||
              !userInfo.policy
            }
            onClick={handleRegister}
            className="mt-10 w-32 sm:w-52 justify-self-end bg-[#babbf6] disabled:text-[#babbf6]-700 disabled:cursor-not-allowed disabled:bg-[white] disabled:text-[#babbf6]-700  border border-[#babbf6]-700 bg-[#babbf6]-800 focus:ring-4 focus:outline-none focus:ring-[#babbf6]-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-[#babbf6]-500 dark:text-[#babbf6]-500 dark:hover:text-[#babbf6] dark:hover:bg-[#babbf6]-600 dark:focus:ring-[#babbf6]-900">
            ثبت نام
          </button>
        </div>
      </div>
      <div className="flex-[50%]">
        <div class="checkout_details_area p-12 sm:mt-50 rounded-lg bg-[#fff] flex flex-col flex-[50%]">
          <div className="mb-12 w-full flex text-lg justify-center font-bold">
            ورود
          </div>
          <div className="flex flex-col gap-4">
            {/* <div className="flex flex-col">
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
            </div> */}

            <div className="flex flex-col">
              <label for="email_address">
                ایمیل<span>*</span>
              </label>
              <input
                name="email"
                type="email"
                class="form-control"
                id="email_address"
                value={loginInfo.email}
                onChange={handleChangeLogin}
                className="border rounded-md p-2"
              />
            </div>
            <div className="flex flex-col">
              <label for="email_address">
                رمز ورود<span>*</span>
              </label>
              <input
                name="password"
                type="password"
                class="form-control"
                id="password"
                value={loginInfo.password}
                onChange={handleChangeLogin}
                className="border rounded-md p-2"
              />
            </div>

            <button
              disabled={!loginInfo.email || !loginInfo.password}
              onClick={handleLogin}
              className="mt-10 w-32 sm:w-52 justify-self-end bg-[#babbf6] disabled:text-[#babbf6]-700 disabled:cursor-not-allowed disabled:bg-[white] disabled:text-[#babbf6]-700  border border-[#babbf6]-700 bg-[#babbf6]-800 focus:ring-4 focus:outline-none focus:ring-[#babbf6]-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-[#babbf6]-500 dark:text-[#babbf6]-500 dark:hover:text-[#babbf6] dark:hover:bg-[#babbf6]-600 dark:focus:ring-[#babbf6]-900">
              ورود به حساب کاربری
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
