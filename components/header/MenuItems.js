"use-client";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {shopAxios as Axios} from "../../axios/shopAxios";
import axios from "axios";
const MenuItems = ({isMenuOpen, openShopHandler, closeShopHandler}) => {
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await Axios.get(
        `/categories?limit=1000&sub_categories=true`
      );
      const {data} = response.data;
      setMenuList(data);
    };
    getData();
  }, []);

  return (
    <div
      onMouseEnter={openShopHandler}
      onMouseLeave={closeShopHandler}
      className={`absolute z-100000 overflow-y-auto flex w-full right-0 transition-all duration-700 h-fit  bg-white shadow-md ${
        isMenuOpen ? "top-[5.1rem]  opacity-1" : "top-[6rem] opacity-0"
      }`}>
      {/* menu  */}
      <div className="flex flex-col flex-[25%] border-l-[1px] border-gray px-4">
        <div className="border-b-[1px] border-gray p-2 pt-4 text-sm font-thin text-gray-dark hover:text-black hover:font-lg">
          {menuList[0]?.name}
        </div>
        <div className="flex flex-col gap-1">
          {menuList[0]?.sub_categories?.map(item => (
            <Link
              href={`/categories/${item?.id}`}
              className="text-gray-medium hover:text-black font-thin hover:font-thin p-2">
              {item?.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-[25%] border-l-[1px] border-gray px-4">
        <div className="border-b-[1px] border-gray p-2 pt-4 text-sm font-thin text-gray-dark">
          {menuList[1]?.name}
        </div>
        <div className="flex flex-col gap-1">
          {menuList[1]?.sub_categories?.map(item => (
            <Link
              href={`/categories/${item?.id}`}
              className="text-gray-medium hover:text-black font-thin hover:font-thin p-2">
              {item?.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-[25%] px-4">
        <div className="border-b-[1px] border-gray p-2 pt-4 text-sm font-thin text-gray-dark">
          {menuList[2]?.name}
        </div>
        <div className="flex flex-col gap-1">
          {menuList[2]?.sub_categories?.map(item => (
            <Link
              href={`/categories/${item?.id}`}
              className="text-gray-medium hover:text-black font-thin hover:font-thin p-2">
              {item?.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-[25%] items-end px-4 pt-3 pb-7">
        <Image
          src={"/images/bg-img/bg-4.jpg"}
          alt={"menu image"}
          width={350}
          height={60}
        />
      </div>
    </div>
  );
};
export default MenuItems;
