'use client'
import Image from "next/image";
import { useState } from "react";

interface prductCardType{
    productData:{
        productName: string;
        imgSrc: string;
        price: number;
        rating: number;
        subName: string;
        qunatity:string;

      }

    }
export default function CartProductCard({productData}:prductCardType){
    const [qunatity,setQunatity]=useState(1)
    return<>
         <div className="w-full  flex p-2 gap-2  hover:bg-gray-100 ">
         <img src={productData.imgSrc} alt={productData.productName} className="w-[125px] h-[175px]"/>
         <div className="p-2 text-xl  w-full flex flex-col justify-around relative">
           <p className="">{productData.productName}</p>
           <p className="text-gray-400 text-base">{productData.subName}</p>
           <div className=" flex items-center gap-2 text-base">
            <button 
            onClick={()=>{if(qunatity>0){setQunatity(qunatity-1)}}}
            className="border border-slate-400 rounded-full h-[30px] w-[30px] hover:bg-slate-400 hover:text-white font-bold">-</button>
            <div className="w-[25px] text-center ">{qunatity}</div>
            <button 
            onClick={()=>{if(qunatity<10){setQunatity(qunatity+1)}}}
            className="border border-slate-400 rounded-full h-[30px] w-[30px] hover:bg-slate-400 hover:text-white ">+</button>

           </div>
           <p className="my-4 text-[#DD8661] ">${productData.price}</p>
         </div>
      </div>
    
    </>
}