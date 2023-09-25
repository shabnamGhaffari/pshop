"use client";
import React, {use, useEffect, useState} from "react";
import {AiOutlinePlus} from "react-icons/ai";
import {BsChevronLeft} from "react-icons/bs";
import {shopAxios} from "../../axios/shopAxios";
import Select from "react-select";
import {AxiosWithToken} from "../../axios/axiosWhithToken";
import {useDispatch, useSelector} from "react-redux";
import {setUserAddress} from "../../redux/slices/addressSlice";
import {useRouter} from "next/navigation";
const initialState = {
  province: "",
  county: "",
  postalCode: "",
  address: "",
};
const UserAddresses = () => {
  const [address, setAddress] = useState(initialState);
  const [addAddress, setAddAddress] = useState(false);
  const [provinceList, setProvinceList] = useState([]);
  const [countyList, setCountyList] = useState([]);
  const [addressList, setAddressList] = useState([]);
  const {addressId} = useSelector(state => state.addressReducer);
  const {isAuth} = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const getProvinceList = async () => {
    try {
      const response = await shopAxios.get("/provinces");
      console.log(response?.data?.data);
      setProvinceList(response?.data?.data);
    } catch {}
  };
  const getCountyList = async () => {
    try {
      const response = await shopAxios.get(
        `/provinces/${address.province.value}/counties`
      );
      setCountyList(response?.data?.data);
    } catch {}
  };
  const getUserAddresses = async () => {
    try {
      const response = await AxiosWithToken.get("/user-addresses");
      setAddressList(response?.data?.data);
    } catch {}
  };
  useEffect(() => {
    getProvinceList();
    if (address.province) {
      getCountyList();
    }
  }, [address.province]);
  useEffect(() => {
    getUserAddresses();
  }, []);
  const handleChange = e => {
    setAddress({...address, [e.target.name]: e.target.value});
  };
  const addAddressHandler = () => {
    setAddAddress(true);
  };
  const handleChangeProvince = value => {
    setAddress({...address, province: value});
  };
  const handleChangeCounty = value => {
    setAddress({...address, county: value});
  };
  const submitHandler = async () => {
    const formObj = {
      province_id: address?.province?.value,
      county_id: address.county?.value,
      address: address.address,
      postal_code: String(address.postalCode),
    };
    try {
      const response = await AxiosWithToken.post("/user-addresses", formObj);
      getUserAddresses();
      setAddress(initialState);
    } catch {}
  };
  const selectAddress = e => {
    dispatch(
      setUserAddress({value: e.target.value, checked: e.target.checked})
    );
  };
  const handleSubmit=()=>{
    router.push("/booking")
  }
  if (!isAuth) {
    router.replace("/login");
  } else {
    return (
      <div className="px:2 sm:px-32 py-8 flex flex-col items-center justify-center">
        <h1 className="text-center my-8">انتخاب آدرس</h1>
        <div className="flex flex-col gap-2 w-full">
          {addressList?.map(({province, county, address, postal_code, id}) => (
            <div className="border flex  rounded-xl p-4 w-full gap-1">
              <input
                type="checkbox"
                name=""
                value={id}
                onChange={selectAddress}
                checked={addressId == id}
              />
              <div>
                {province}-{county}-{address}-{postal_code}
              </div>
            </div>
          ))}
        </div>
        <div className="flex-col-reverse flex sm:flex-row justify-between w-full ">
          <button
            onClick={addAddressHandler}
            className="mt-10 flex items-center justify-between w-full sm:w-44 justify-self-end bg-[#babbf6] disabled:text-[#babbf6]-700 disabled:cursor-not-allowed disabled:bg-[white] disabled:text-[#babbf6]-700  border border-[#babbf6]-700 bg-[#babbf6]-800 focus:ring-4 focus:outline-none focus:ring-[#babbf6]-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-[#babbf6]-500 dark:text-[#babbf6]-500 dark:hover:text-[#babbf6] dark:hover:bg-[#babbf6]-600 dark:focus:ring-[#babbf6]-900">
            افزودن آدرس جدید
            <AiOutlinePlus />
          </button>
          <button
            onClick={handleSubmit}
            disabled={!addressId}
            className="mt-10 flex items-center justify-between w-full sm:w-44 justify-self-end bg-[#babbf6] disabled:text-[#babbf6]-700 disabled:cursor-not-allowed disabled:bg-[white] disabled:text-[#babbf6]-700  border border-[#babbf6]-700 bg-[#babbf6]-800 focus:ring-4 focus:outline-none focus:ring-[#babbf6]-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-[#babbf6]-500 dark:text-[#babbf6]-500 dark:hover:text-[#babbf6] dark:hover:bg-[#babbf6]-600 dark:focus:ring-[#babbf6]-900">
            ادامه فرآیند خرید
            <BsChevronLeft />
          </button>
        </div>
        {addAddress && (
          <div className="my-8 w-full flex flex-col gap-4 items-center">
            <div className="flex flex-col w-full lg:w-[50%]">
              <label for="province">
                استان <span>*</span>
              </label>
              <Select
                options={provinceList?.map(province => ({
                  value: province?.id,
                  label: province.name,
                }))}
                placeholder=""
                name="province"
                id="province"
                isSearchable
                value={address.province}
                onChange={handleChangeProvince}
              />
            </div>
            <div className="flex flex-col w-full lg:w-[50%]">
              <label for="county">
                شهر <span>*</span>
              </label>
              <Select
                options={countyList?.map(county => ({
                  label: county.name,
                  value: county.id,
                }))}
                name="county"
                id="county"
                placeholder=""
                value={address.county}
                onChange={handleChangeCounty}></Select>
            </div>
            <div className="flex flex-col w-full lg:w-[50%]">
              <label for="street_address">
                آدرس <span>*</span>
              </label>
              <input
                type="text"
                name="address"
                id="street_address"
                value={address.address}
                onChange={handleChange}
                className="border rounded-md p-2"
              />
            </div>
            <div className="flex flex-col w-full lg:w-[50%]">
              <label for="postcode">
                کد پستی <span>*</span>
              </label>
              <input
                name="postalCode"
                type="text"
                class="form-control"
                id="postcode"
                value={address.postalCode}
                onChange={handleChange}
                className="border rounded-md p-2"
              />
            </div>
            <button
              onClick={submitHandler}
              disabled={
                !address.province ||
                !address.county ||
                !address.postalCode ||
                !address.address
              }
              className="mt-10 flex items-center justify-center w-16 bg-[#babbf6] disabled:text-[#babbf6]-700 disabled:cursor-not-allowed disabled:bg-[white] disabled:text-[#babbf6]-700  border border-[#babbf6]-700 bg-[#babbf6]-800 focus:ring-4 focus:outline-none focus:ring-[#babbf6]-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-[#babbf6]-500 dark:text-[#babbf6]-500 dark:hover:text-[#babbf6] dark:hover:bg-[#babbf6]-600 dark:focus:ring-[#babbf6]-900">
              ثبت
            </button>
          </div>
        )}
      </div>
    );
  }
};

export default UserAddresses;
