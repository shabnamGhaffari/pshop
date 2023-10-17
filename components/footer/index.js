import Link from "next/link";
import React from "react";
import {BiLogoFacebook} from "react-icons/bi";
import {SiInstagram} from "react-icons/si";
import {RxTwitterLogo} from "react-icons/rx";

const FooterPage = () => {
  return (
    // ##### Footer Area Start #####
    <footer className="footer_area ">
      <div className="container px-8 lg:px-32 mx-auto">
        {/* Single Widget Area  */}

        {/* Footer Menu */}
        <div className="flex flex-col md:flex-row">
          <div className="footer_menu flex items-center gap-2 md:gap-4 mb-16 flex-[50%]">
            {/* Logo */}
            <div className="footer-logo"></div>
            <Link href="/">
              <img src="img/core-img/logo2.png" alt="" />
              Logo Image
            </Link>
            <Link className="text-gray-light hover:text-white" href="/products">
              فروشگاه
            </Link>
            <Link
              className="text-gray-light hover:text-white"
              href="/contact-us">
              تماس با ما
            </Link>
          </div>
          <div className="flex flex-[50%]">
            <div className="flex flex-col flex-[50%] gap-4">
              <Link href="#" className="text-gray-light hover:text-white">
                Order Status
              </Link>
              <Link href="#" className="text-gray-light hover:text-white">
                Payment Options
              </Link>
              <Link href="#" className="text-gray-light hover:text-white">
                Shipping and Delivery
              </Link>
            </div>
            <div className="flex flex-col flex-[50%] gap-4">
              <Link href="#" className="text-gray-light hover:text-white">
                Guides
              </Link>
              <Link href="#" className="text-gray-light hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-light hover:text-white">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
        <div className="single_widget_area mt-10 md:mt-0">
          <div className="footer_heading mb-30">
            <h6>عضویت</h6>
          </div>
          <div className="subscribtion_form flex-col md:flex-row items-end ">
            <form action="#" method="post" className="flex-[50%]">
              <input
                type="email"
                name="mail"
                className="mail  outline-0 border-0 shadow-none focus:border-0 focus:outline-0 focus:shadow-none focus:ring-offset-0 focus:ring-transparent"
                placeholder="ایمیل خود را وارد کنید"
              />
              <button type="submit" className="submit">
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </button>
            </form>
            <div className="footer_social_area flex justify-center items-center flex-[50%]">
              <Link
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Facebook">
                <BiLogoFacebook />
              </Link>
              <Link
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Instagram">
                <SiInstagram />
              </Link>
              <Link
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Twitter">
                <RxTwitterLogo />
              </Link>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            Copyright &copy;
             All
            rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
