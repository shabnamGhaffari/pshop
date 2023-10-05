"use client"
import {useEffect} from "react";
import {useSelector} from "react-redux";
import Banner from "../components/main-page/banner";
import MainCategories from "../components/main-page/categories";
import PopularProducts from "../components/main-page/popular-products";
import Sale from "../components/main-page/sale";

export default function Home() {
 
  return (
    <>
      <Banner />
      <MainCategories />
      <Sale />
      <PopularProducts />
    </>
  );
}
