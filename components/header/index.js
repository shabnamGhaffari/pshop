"use client"
import {CgShoppingCart} from "react-icons/cg";
import {HiOutlineUser} from "react-icons/hi";
import {MdFavoriteBorder} from "react-icons/md";
import {CgSearch} from "react-icons/cg";
import MenuContainer from "./MenuContainer";
import MenuItems from "./MenuItems";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showChildren, setShowChildren] = useState(false);
  const [isHamburgurMenuOpen, setIsHamburgurMenuOpen] = useState(false);

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
              <a href="#">
                <MdFavoriteBorder size={25} />
              </a>
            </div>
            {/* User Login Info */}
            <div className="md:w-20 flex items-center justify-center">
              <a href="#">
                <HiOutlineUser size={25} />
              </a>
            </div>
            {/* Cart Area */}
            <div className="md:w-20 flex items-center justify-center">
              <CgShoppingCart size={25} />{" "}
              <span className="absolute left-[26px] top-[32px]  md:left-[60px] md:top-[20px] text-xs">
                3
              </span>
            </div>
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
