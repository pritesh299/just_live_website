'use client';

import Image from "next/image";
import { use, useEffect, useState } from "react";
import Product_card from "./product_card";

export const Latest_container=()=>{
    const categoryList=['Jeans','T-shirts','Jackets',]
  const [LatestCategory,setLatestCategory ]=useState(categoryList[2])
 
  const [data, setData] = useState([
    {
        productName: "Sample Product",
        imgSrc: "/images/dummy-product.png",
        price: 29.99,
        rating: 4.5,
        subName: "Sample Subcategory"
    },
    {
        productName: "Sample Product",
        imgSrc: "/images/dummy-product.png",
        price: 29.99,
        rating: 4.5,
        subName: "Sample Subcategory"
    },
    {
        productName: "Sample Product",
        imgSrc: "/images/dummy-product.png",
        price: 29.99,
        rating: 4.5,
        subName: "Sample Subcategory"
    }
]);

    return<>
<div className="w-full">
<div className="flex  text-xl p-2 justify-around">{
   categoryList && categoryList.map((category, index) => (
    <p className={`font-Tenor_Sans p-2 w-full flex flex-col  text-center border-b ${LatestCategory===category?'border-red-600 text-black':'text-gray-400'}`} onClick={()=>{setLatestCategory(category)}}>{category}</p>
   ))
    }    
    </div>
  <div>
  {data && data.map((productData, index) => (
                    <Product_card key={index} productData={productData} />
                ))}
  </div>
  <div className="w-full flex justify-center p-4">
  <button className=" w-[60%]  bg-gray-200 text-black hover:text-white hover:bg-black text-xl  py-2 px-4 rounded-full opacity-75 hover:opacity-100 ease-in-out ">Explore More</button>
  </div>
</div>    
    </>
}
2