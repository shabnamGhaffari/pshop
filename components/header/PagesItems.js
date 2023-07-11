import Link from "next/link";
import React from "react";

const PagesItems = props => {
  const {isPagesOpen, openPagesHandlerChildren, closePagesHandlerChildren} =
    props;
  return (
    <div
        onMouseEnter={openPagesHandlerChildren}
      
      className={`absolute  z-10  h-fit w-[100px] ${
        isPagesOpen ? "top-[50px] opacity-1" : "top-[100px] opacity-0"
      }`}>
      <div 
      onMouseLeave={closePagesHandlerChildren}
        className={` flex flex-col  left-0 transition-all duration-700 bg-white shadow-md `}>
        {/* menu  */}
        <div className="flex flex-col">
          <Link
            href="/"
            className="text-gray-medium hover:text-black font-thin hover:font-thin p-2">
            1
          </Link>
          <Link
            href="/"
            className="text-gray-medium hover:text-black font-thin hover:font-thin p-2">
            2
          </Link>
          <Link
            href="/"
            className="text-gray-medium hover:text-black font-thin hover:font-thin p-2">
            3
          </Link>
          <Link
            href="/"
            className="text-gray-medium hover:text-black font-thin hover:font-thin p-2">
            4
          </Link>
          <Link
            href="/"
            className="text-gray-medium hover:text-black font-thin hover:font-thin p-2">
            5
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PagesItems;
