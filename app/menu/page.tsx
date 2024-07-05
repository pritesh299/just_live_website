"use client";
import Link from "next/link";
import React ,{ useState } from "react"
import Category_Card from "../components/category_card";
import Footer from "../components/footer";
import Image from "next/image";

export default function Menu(){
const [category,setCategory]=useState('women')
const menu = {
    'men': {
        'topWear': ['T-shirts', 'Shirts', 'Jackets'],
        'bottomWear': ['Jeans', 'Shorts', 'Trousers'],
        'innerWear': ['Boxers', 'Briefs', 'Vests']
    },
    'women': {
        'topWear': ['Blouses', 'Tops', 'Sweaters'],
        'bottomWear': ['Skirts', 'Jeans', 'Leggings'],
        'innerWear': ['Bras', 'Panties', 'Camisoles']
    },
    'kids': {
            'topWear': ['T-shirts', 'Sweatshirts', 'Jackets','Dresses', 'Tops', 'Sweaters'],
            'bottomWear': ['Shorts', 'Pants', 'Jeans','Skirts', 'Shorts'],
            'innerWear': ['Underpants', 'Vests', 'Socks']
    }
};


    return <>
    <div className="w-[100vw] h-[100vh] absolute top-0 bg-white scroll-none overflow-hidden font-Tenor_Sans  ">
    <div className="h-[15%] ">
    <div className="text-3xl px-6  py-4 font-light ">

        <Link href='/'> X</Link>
    </div>
    <div className="flex  text-xl p-2">
    <p className={`font-Tenor_Sans p-2 w-1/3 flex flex-col  text-center border-b ${category==='women'?'border-red-600 text-black':'text-gray-400'}`} onClick={()=>{setCategory('women')}}>WOMEN </p>
    <p className={`font-Tenor_Sans p-2 w-1/3 flex flex-col text-center border-b ${category==='men'?'border-red-600 text-black':'text-gray-400'}`} onClick={()=>{setCategory('men')}}>MEN  </p>
    <p className={`font-Tenor_Sans p-2 w-1/3 flex flex-col text-center border-b ${category==='kids'?'border-red-600 text-black':'text-gray-400'}`} onClick={()=>{setCategory('kids')}}>KIDS </p>
    </div>
    </div>
    <div className="flex flex-col justify-between h-[85%]">
     <div className=" overflow-y-scroll overflow-x-hidden no-scrollbar">
        <Category_Card title='Topwear' subCategoryList={menu[category]['topWear']}/>
        <Category_Card title='Bottomwear' subCategoryList={menu[category]['bottomWear']}/>
        <Category_Card title='Innerwear' subCategoryList={menu[category]['innerWear']}/>
     </div >
     <div className="flex flex-col justify-center items-center border-t">
       <div className="flex justify-around p-4 w-full ">
        <Image
                src="/images/instagram.png"
                alt="menu logo"
                width={30}
                height={30}
            />
        <Image
                src="/images/twitter.png"
                alt="menu logo"
                width={30}
                height={30}
            />
        <Image
                src="/images/youtube.png"
                alt="menu logo"
                width={40}
                height={30}
            />
       </div>  
       <div className="text-sm  bg-gray-50 w-full text-center p-4 border-t">
            <p>Copyright @ justLive All Rights Reserved.</p>
        </div>
     </div>
    
     </div>
    </div>
    </>
}