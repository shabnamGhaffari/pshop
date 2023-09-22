"use client";
import {CgShoppingCart} from "react-icons/cg";
import {HiOutlineUser} from "react-icons/hi";
import {MdFavoriteBorder} from "react-icons/md";
import {CgSearch} from "react-icons/cg";
import MenuContainer from "./MenuContainer";
import MenuItems from "./MenuItems";
import HamburgerMenu from "./HamburgerMenu";
import {useState} from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/slices/authSlice";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showChildren, setShowChildren] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isHamburgurMenuOpen, setIsHamburgurMenuOpen] = useState(false);
  const {firstName, lastName} = useSelector(state => state.authReducer);
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const openShopHandler = () => {
    setIsMenuOpen(true);
    setShowChildren(true);
  };
  const closeShopHandler = () => {
    setIsMenuOpen(false);
  };
  const openShopHandlerChildren = () => {
    if (showChildren) {
      setIsMenuOpen(true);
    } else {
      return;
    }
  };
  const closeShopHandlerChildren = () => {
    setIsMenuOpen(false);
    setShowChildren(false);
  };
  const openHamburgerMenu = () => {
    setIsHamburgurMenuOpen(true);
  };
  const closeHabmurgurMenu = () => {
    setIsHamburgurMenuOpen(false);
  };
  const count = useSelector(state => state.basketReducer.count);
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logout());
  };
  const openUserMenu = () => {
    if (!isAuth) {
      return;
    }
    setShowUserMenu(!showUserMenu);
  };
  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full shadow md:h-20 px-2 z-[10000] bg-white">
        {/* right side of navbar */}
        <section className="flex flex-col md:flex-row md:justify-between h-full items-center">
          <MenuContainer
            openShopHandler={openShopHandler}
            closeShopHandler={closeShopHandler}
            openHamburgerMenu={openHamburgerMenu}
          />
          <div className="flex justify-end w-full md:w-[600px]">
            {/* Search Area */}
            <div className="flex w-full md:w-[20%] items-center justify-start md:justify-center md:focus-within:w-[60%] transition-all duration-700">
              <form
                action="#"
                method="post"
                className="flex items-center w-[100px]">
                <button type="submit">
                  <CgSearch />
                </button>
                <input
                  style={{direction: "rtl"}}
                  className="rtl outline-0 border-0 shadow-none focus:border-0 focus:outline-0 focus:shadow-none focus:ring-offset-0 focus:ring-white placeholder:text-xs"
                  type="search"
                  name="search"
                  id="headerSearch"
                  placeholder="جستجو کن..."
                />
              </form>
            </div>
            {/* Favourite Area */}
            <div className="md:w-20 flex items-center justify-center">
              <Link href="/">
                <MdFavoriteBorder size={25} />
              </Link>
            </div>
            {/* User Login Info */}
            {/* <div className="md:w-20 flex items-center justify-center">
              <Link href="/login">
                <HiOutlineUser size={25} />
              </Link>
            </div> */}

            <button
              data-ripple-light="true"
              data-popover-target="menu"
              onClick={openUserMenu}
              class="middle none center rounded-lg text-xs font-bold uppercase active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              <HiOutlineUser size={25} />
            </button>
            {showUserMenu && (
              <ul
                role="menu"
                data-popover="menu"
                data-popover-placement="right"
                class="absolute z-10 left-[5px] sm:left-[84px] top-[65px] sm:top-[52px] min-w-[150px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                <li
                  role="menuitem"
                  class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                  {firstName} {lastName}
                </li>
                <li
                  onclick={logOutHandler}
                  role="menuitem"
                  class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                  خروج
                </li>
              </ul>
            )}

            {/* Cart Area */}
            <Link
              href="/basket"
              className="md:w-20 flex items-center justify-center">
              <CgShoppingCart size={25} />{" "}
              <span className="absolute left-[26px] top-[32px]  md:left-[60px] md:top-[20px] text-xs">
                {count}
              </span>
            </Link>
          </div>
        </section>
        {showChildren && (
          <MenuItems
            isMenuOpen={isMenuOpen}
            openShopHandler={openShopHandlerChildren}
            closeShopHandler={closeShopHandlerChildren}
          />
        )}
      </header>

      {isHamburgurMenuOpen && (
        <HamburgerMenu closeHabmurgurMenu={closeHabmurgurMenu} />
      )}
    </>
  );
}
