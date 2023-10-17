"use client";

import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {shopAxios} from "../../../axios/shopAxios";
import {useDispatch} from "react-redux";
import {addToBasket} from "../../../redux/slices/basketSlice";
const product = ({params}) => {
  const productId = params?.id;
  const [productDetail, setProductDetail] = useState(null);
  const [color, setColor] = useState(null);
  const [colorObj, setColorObj] = useState(null);
  const [sizeList, setSizeList] = useState([]);
  const [size, setSize] = useState(null);
  const [sizeObj, setSizeObj] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [selectedSubProduct, setSelectedSubProduct] = useState(null);
  const [subproductPrice, setSubproductPrice] = useState(null);
  const dispatch = useDispatch();
  const getProductData = async () => {
    const response = await shopAxios.get(`/products/${productId}`);
    setProductDetail(response?.data?.data);
    console.log(response);
    setSizeList(response?.data?.data?.sub_products_details[0]?.sizes);
  };
  useEffect(() => {
    getProductData();
  }, []);

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    padding: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const addToBasketHandler = item => {
    dispatch(addToBasket(item));
  };
  const handleChangeColor = e => {
    const selectedColorId = e.target.value;
    setColor(selectedColorId);
    const subProduct = productDetail?.sub_products_details?.find(
      item => item.color_id == selectedColorId
    );
    setColorObj({
      selected_color_id: subProduct.color_id,
      selected_color_name: subProduct.color_name,
    });
    const sizes = subProduct?.sizes;
    setSizeList(sizes);
  };
  const handleChangeSize = e => {
    const sizeId = e.target.value;
    setSize(sizeId);
    const subProduct = productDetail?.sub_products_details
      ?.find(item => item.color_id == color)
      ?.sizes?.find(item => item?.size_id == sizeId);
    setSizeObj({
      selected_size_id: subProduct.size_id,
      selected_size_name: subProduct.size_name,
    });
  };
  const getProductQty = () => {
    if (!color || !size) return;
    const selectedSubProduct = productDetail?.sub_products_details
      ?.find(item => item.color_id == color)
      ?.sizes?.find(item => item.size_id == size)?.sub_products[0];
    const qty = selectedSubProduct?.quantity;
    const price = selectedSubProduct?.price;
    const selectedSubProductId = selectedSubProduct?.id;
    setSubproductPrice(price);
    setQuantity(qty);
    setSelectedSubProduct(selectedSubProductId);
  };
  useEffect(() => {
    getProductQty();
  }, [color, size]);
  return (
    <>
      <div className="right-side-cart-area">
        <div className="cart-content flex">
        </div>
      </div>
      <section className="single_product_details_area mt-[-4px] flex items-center">
        {/* Single Product Thumb  */}
        <div className="single_product_thumb mt-[-10px] sm:mt-[-20px] lg:mt-0 clearfix">
          <Slider {...settings}>
            {productDetail?.images?.map(img => (
              <img src={img["image_path"]} alt={img.image_name} />
            ))}
          </Slider>
        </div>
        {/* Single Product Description  */}
        <div className="single_product_desc clearfix">
          <span>{productDetail?.brand?.name}</span>
          <h2>{productDetail?.name}</h2>
          <div className="flex items-center gap-1">
            <p className="product-price">
              {/* <span className="old-price">$65.00</span> */}
              {!color || !size ? productDetail?.price : subproductPrice}
            </p>
            <div>تومان</div>
          </div>

          <p className="product-desc">{productDetail?.description}</p>

          {/* Form  */}

          {/* Select Box  */}
          <div className="select-box flex mt-50 mb-30 gap-12">
            <div className="flex items-center gap-1">
              <label for="productColor">رنگ</label>
              <select
                name="select"
                id="productColor"
                value={color}
                className="p-2 rounded-lg"
                onChange={handleChangeColor}>
                <option
                  className="p-2 rounded-lg"
                  defaultValue
                  value={null}
                  style={{display: "none"}}></option>
                {productDetail?.sub_products_details?.map(subProduct => (
                  <option
                    key={subProduct?.color_id}
                    value={subProduct?.color_id}>
                    {subProduct?.color_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1">
              <label for="productSize">سایز</label>
              <select
                name="select"
                id="productSize"
                className="mr-5 p-2 rounded-md"
                value={size}
                onChange={handleChangeSize}>
                <option
                  defaultValue
                  value={null}
                  style={{display: "none"}}></option>
                {sizeList?.map(size => (
                  <option key={size.size_id} value={size.size_id}>
                    {size.size_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {quantity &&
            (quantity === 0 ? (
              <div className="flex gap-2 my-4">ناموجود</div>
            ) : (
              <div className="flex gap-2 my-4">
                <div>موجودی انبار</div>
                {quantity}
              </div>
            ))}
          <div className="cart-fav-box flex gap-4 items-center">
            {/* Cart  */}
            <button
              disabled={!color || !size || quantity === 0}
              onClick={() =>
                addToBasketHandler({
                  ...productDetail,
                  ...colorObj,
                  ...sizeObj,
                  selectedSubProduct,
                })
              }
              name="addtocart"
              className="btn essence-btn">
              اضافه به سبد خرید
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default product;
