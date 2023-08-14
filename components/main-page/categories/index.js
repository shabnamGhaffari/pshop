"use client";
import React, {useEffect, useState} from "react";
import {shopAxios} from "../../../axios/shopAxios";

const MainCategories = () => {
  const [tags, setTags] = useState([]);
  const getTags = async () => {
    const response = await shopAxios.get("/tags");
    console.log("rrr", response);
    setTags(response?.data?.data);
  };
  useEffect(() => {
    getTags();
  }, []);
  return (
    <div className="top_catagory_area section-padding-80 clearfix">
      <div className="container flex mx-auto px-8 lg:px-32 flex-col md:flex-row justify-between gap-0 md:gap-8">
        {tags?.length > 0 &&
          tags?.map(tag => (
            <div
              className="single_catagory_area flex items-center justify-center bg-img"
              style={{"background-image": `url(${tag?.image_path})`}}>
              <div className="catagory-content">
                <a href="#">{tag?.name}</a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainCategories;
