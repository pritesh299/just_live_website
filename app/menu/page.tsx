"use client";
import Image from "next/image";
import Link from "next/link";
import React ,{ useState } from "react"
import Menu_01 from "../components/menu_01";
import Footer from "../components/footer";

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
    <div className="text-4xl font-base px-6  py-4 font-thin ">
        <Link href='/'> X</Link>
    </div>
    <div className="flex  text-xl p-2">
    <p className={`font-Tenor_Sans p-2 w-1/3 flex flex-col  text-center border-b ${category==='women'?'border-red-600 text-black':'text-gray-400'}`} onClick={()=>{setCategory('women')}}>WOMEN </p>
    <p className={`font-Tenor_Sans p-2 w-1/3 flex flex-col text-center border-b ${category==='men'?'border-red-600 text-black':'text-gray-400'}`} onClick={()=>{setCategory('men')}}>MEN  </p>
    <p className={`font-Tenor_Sans p-2 w-1/3 flex flex-col text-center border-b ${category==='kids'?'border-red-600 text-black':'text-gray-400'}`} onClick={()=>{setCategory('kids')}}>KIDS </p>
    </div>
    </div>
    <div className="flex flex-col justify-between h-[85%]">
     <div className=" ">
        <Menu_01 title='Topwear' subCatergoryList={menu[category]['topWear']}/>
        <Menu_01 title='Bottomwear' subCatergoryList={menu[category]['bottomWear']}/>
        <Menu_01 title='Innerwear' subCatergoryList={menu[category]['innerWear']}/>
     </div >
     <div className="">
     <Footer />
     </div>
    
     </div>
    </div>
    </>
}