import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {IoMdClose} from "react-icons/io";
import {shopAxios as Axios} from "../../axios/shopAxios";
const HamburgerMenu = ({closeHabmurgurMenu}) => {
  const [openShop, setOpenShop] = useState(false);
  const [openPagesMenu, setOpenPagesMenu] = useState(false);
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
  const openShopHandler = () => {
    setOpenShop(!openShop);
  };
  const openPagesMenuHandler = () => {
    setOpenPagesMenu(!openPagesMenu);
  };
  return (
    <div className="fixed lg:hidden w-[300px] z-[10000] overflow-y-auto bg-white top-0 h-screen flex flex-col shadow-lg">
      {/* close icon */}
      <div
        className="self-end mt-2 cursor-pointer py-3"
        onClick={closeHabmurgurMenu}>
        <IoMdClose style={{fontSize: 30}} />
      </div>
      {/* <div className='flex flex-col'> */}
      <div className="flex flex-col gap-[0.5px] font-medium lg:p-0 mt-4  bg-gray-50  md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <button
          onClick={openShopHandler}
          className="flex bg-gray items-center justify-between w-full p-2  text-gray-900  hover:bg-gray-100  md:border-0 md:w-auto dark:text-white  dark:focus:text-white dark:border-gray-700">
          فروشگاه
          <svg
            className="w-5 h-5 ml-1"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        {openShop && (
          <div
            className={`flex  flex-col transition-all duration-1000 bg-white shadow-md
          ${openShop ? "h-fit opacity-1" : "h-0 opacity-0"}`}>
            {/* menu  */}
            <div className="flex flex-col border-l-[1px] border-gray px-4">
              <div className="border-b-[1px] border-gray p-2 pt-4 text-sm font-thin text-gray-dark hover:text-black hover:font-lg">
                {menuList[0]?.name}
              </div>
              <div className="flex flex-col gap-1 border-b-[1px] border-gray">
                {menuList[0]?.sub_categories?.map(item => (
                  <Link
                    href="/"
                    className="text-gray-medium hover:text-black font-thin hover:font-thin p-2">
                    {item?.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col  border-l-[1px] border-gray px-4">
              <div className="border-b-[1px] border-gray p-2 pt-4 text-sm font-thin text-gray-dark">
                {menuList[1]?.name}
              </div>
              <div className="flex flex-col gap-1  border-b-[1px] border-gray">
                {menuList[1]?.sub_categories?.map(item => (
                  <Link
                    href="/"
                    className="text-gray-medium hover:text-black font-thin hover:font-thin p-2">
                    {item?.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col px-4">
              <div className="border-b-[1px] border-gray p-2 pt-4 text-sm font-thin text-gray-dark">
                {menuList[2]?.name}
              </div>
              <div className="flex flex-col gap-1">
                {menuList[2]?.sub_categories?.map(item => (
                  <Link
                    href="/"
                    className="text-gray-medium hover:text-black font-thin hover:font-thin p-2">
                    {item?.name}
                  </Link>
                ))}
              </div>
            </div>
            {/* image of menu */}
            <div className="flex flex-col flex-[25%] items-end px-4 pt-3 pb-7">
              <Image
                src={"/images/bg-img/bg-4.jpg"}
                alt={"menu image"}
                width={350}
                height={60}
              />
            </div>
          </div>
        )}

        <button
          onClick={openPagesMenuHandler}
          className="flex bg-gray items-center justify-between w-full p-2  text-gray-900    md:border-0   md:w-auto dark:text-white   dark:border-gray-700 ">
          صفحات
          <svg
            className="w-5 h-5 ml-1"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        <div
          className={`flex flex-col ${
            openPagesMenu ? "h-fit opacity-1" : "h-0 opacity-0"
          }`}>
          <Link
            href="/"
            className="text-gray-medium hover:text-black font-thin hover:font-thin p-2">
            صفحه اصلی
          </Link>
          <Link
            href="/products"
            className="text-gray-medium hover:text-black font-thin hover:font-thin p-2">
            فروشگاه
          </Link>
          <Link
            href="/contact-us"
            className="text-gray-medium hover:text-black font-thin hover:font-thin p-2">
            تماس با ما
          </Link>
        </div>
        <Link
          href="/contact-us"
          className="block bg-gray p-2 text-gray-medium  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          تماس با ما
        </Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
