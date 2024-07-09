'use client'
import Image from "next/image";
import Header from "../../components/header";
import CartProductCard from "../../components/cart_product_card";
import Link from "next/link";
import AddressCard from "@/app/components/address_card";

export default function Checkout(){
  const data=[
    {
        name:"Iris Watson",
        address:" 606-3727 Ullamcorper. Street Roseville NH 1152",
        number:"(786) 713-8616"
     }]
    return<>
     <Header />
     <div className="h-[92.5vh]">
        <div className="p-1 h-[10%]  gap-2 w-full flex-col flex justify-center items-center text-xl">CHECKOUT 
        <Image  
                src="/images/border.png"
                alt="menu logo"
                width={200}
                height={30}
            />
        </div>
        <div className="h-[90%]  relative"> 
             <div className="p-4 flex flex-col gap-8 ">
                    <div>
                    <p className=" text-gray-400">SHIPPING ADDRESS</p>
                     <div className="p-2 flex flex-col gap-2">
                      {data && data.map((addressData,index)=>(<AddressCard  addressData={addressData} />))}
                    
                     </div>
                     <Link href='details/addAddress'>  
                    <button className="w-full bg-gray-200 rounded-full text-left p-2 px-4 font-[400] flex hover:bg-gray-300 justify-between items-center">ADD SHIPPING ADDRESS<Image className="w-[20px]" src='/images/plus.png' alt="Add button" width={200}height={20}></Image></button>
                     </Link>
                     </div>
                     <div>
                    <p className=" text-gray-400">PAYMMENT</p>
                     <div className="p-2 flex flex-col gap-2">
                      {data && data.map((addressData,index)=>(<AddressCard  addressData={addressData} />))}
                    
                     </div>
                     <Link href='details/addCard'>  
                    <button className="w-full bg-gray-200 rounded-full text-left p-2 px-4 font-[400] flex hover:bg-gray-300 justify-between items-center">ADD CARD<Image className="w-[20px]" src='/images/plus.png' alt="Add button" width={200}height={20}></Image></button>
                     </Link>
                     </div>
                   
               </div>
             <div className="absolute bottom-0">
                <div className="text-xl flex   p-2 px-8  justify-between">
                    <p>TOTAL</p>
                    <p className="text-[#DD8560]">$240</p>
                </div>
                <div>
                <Link href='details/confirm'>  
             <div className="h-[10%] w-[100vw] bg-black text-white flex justify-center items-center text-xl gap-4 p-4 ">
          <Image src='/images/bag-white.png' alt="white shopping bag  " width={25} height={25}></Image>
            PLACE ORDER
        </div>
        </Link>
                </div>
               
        </div>
        </div>
        
   
     </div>
    </>
}