"use client"
import React, { useEffect } from 'react';
useEffect(()=>{
   const getBrandsList=async()=>{
    const response = await shopAxios.get(`/brands`); 
    console.log('rrr',response);
   }
},[])
const BrandsList = () => {
    return (
        <div>
            
        </div>
    );
};

export default BrandsList;