"use client";
import React, {use, useEffect, useState} from "react";
import {AiOutlinePlus} from "react-icons/ai";
import {shopAxios} from "../../axios/shopAxios";
import Select from "react-select";
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
  const getProvinceList = async () => {
    try {
      const response = await shopAxios.get("/provinces");
      console.log(response?.data?.data);
      setProvinceList(response?.data?.data);
    } catch {}
  };
  useEffect(() => {
    getProvinceList();
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
  return (
    <div className="px-32 py-8">
      <h1 className="text-center my-8">آدرس های من</h1>
      <button
        onClick={addAddressHandler}
        className="mt-10 flex items-center justify-between w-32 sm:w-44 justify-self-end bg-[#babbf6] disabled:text-[#babbf6]-700 disabled:cursor-not-allowed disabled:bg-[white] disabled:text-[#babbf6]-700  border border-[#babbf6]-700 bg-[#babbf6]-800 focus:ring-4 focus:outline-none focus:ring-[#babbf6]-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-[#babbf6]-500 dark:text-[#babbf6]-500 dark:hover:text-[#babbf6] dark:hover:bg-[#babbf6]-600 dark:focus:ring-[#babbf6]-900">
        افزودن آدرس جدید
        <AiOutlinePlus />
      </button>
      {addAddress && (
        <div className="my-8 w-[50%] flex flex-col gap-4">
          <div className="flex flex-col">
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
          <div className="flex flex-col">
            <label for="county">
              شهر <span>*</span>
            </label>
            <Select
              name="county"
              id="county"
              placeholder=""
              value={address.county}
              onChange={handleChangeCounty}></Select>
          </div>
          <div className="flex flex-col">
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
          <div className="flex flex-col">
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
            disabled={
              !address.province ||
              !address.county ||
              !address.postalCode ||
              !address.address
            }
            className="mt-10 flex items-center justify-center w-16 justify-self-end bg-[#babbf6] disabled:text-[#babbf6]-700 disabled:cursor-not-allowed disabled:bg-[white] disabled:text-[#babbf6]-700  border border-[#babbf6]-700 bg-[#babbf6]-800 focus:ring-4 focus:outline-none focus:ring-[#babbf6]-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-[#babbf6]-500 dark:text-[#babbf6]-500 dark:hover:text-[#babbf6] dark:hover:bg-[#babbf6]-600 dark:focus:ring-[#babbf6]-900">
            ثبت
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAddresses;
