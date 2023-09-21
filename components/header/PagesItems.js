import Link from "next/link";
import React from "react";

const PagesItems = props => {
  const {isPagesOpen, openPagesHandlerChildren, closePagesHandlerChildren} =
    props;
  return (
    <div
        onMouseEnter={openPagesHandlerChildren}
      
      className={`absolute  z-10  h-fit w-[100px] ${
        isPagesOpen ? "top-[50px] opacity-1" : "top-[100px] opacity-0 hidden"
      }`}>
      <div 
      onMouseLeave={closePagesHandlerChildren}
        className={` flex flex-col  left-0 transition-all duration-700 bg-white shadow-md `}>
        {/* menu  */}
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className="text-gray-medium hover:text-black font-thin hover:font-thin p-2">
            خانه
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
      </div>
    </div>
  );
};

export default PagesItems;
