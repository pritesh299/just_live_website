'use client'
import Image from "next/image";
import Header from "../../../components/header";
import Link from "next/link";
import AddressCard from "@/app/components/address_card";
import { useState } from "react";
import OrderPopup from "@/app/components/order_popup";

export default function Checkout() {
  const [showPayment, setShowPayment] = useState(false);
  const data = [
    {
      name: "Iris Watson",
      address: "606-3727 Ullamcorper. Street Roseville NH 1152",
      number: "(786) 713-8616"
    }
  ];

  return (
    <>
     {showPayment && <OrderPopup />}
      <Header />
      <div className="h-[92.5vh]">
        <div className="p-1 h-[10%] gap-2 w-full flex-col flex justify-center items-center text-xl">
          CHECKOUT
          <Image 
            src="/images/border.png"
            alt="menu logo"
            width={200}
            height={30}
          />
        </div>
        <div className="h-[90%] relative">
          <div className="p-4 flex flex-col gap-8">
            <div>
              <p className="text-gray-400">CONFIRM DETAILS</p>
              <div className="p-2 flex flex-col gap-2">
                <p className="text-gray-400">ADDRESS</p>
                <div className="w-full items-center hover:bg-gray-100 p-2">
                  <p className="text-xl">Iris Watson</p>
                  <p className="text-sm">606-3727 Ullamcorper. Street Roseville NH 1152</p>
                  <p className="text-sm">(786) 713-8616</p>
                </div>
                <p className="text-gray-400">CARD</p>
                <div className="w-full items-center hover:bg-gray-100 p-2">
                  <p className="text-xl">Iris Watson</p>
                  <p className="text-sm">606-3727 Ullamcorper. Street Roseville NH 1152</p>
                  <p className="text-sm">(786) 713-8616</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0">
            <div className="text-xl flex p-2 px-8 justify-between">
              <p>TOTAL</p>
              <p className="text-[#DD8560]">$240</p>
            </div>
            <div onClick={()=>{setShowPayment(true)}}
            className="h-[10%] w-[100vw] bg-black text-white flex justify-center items-center text-xl gap-4 p-4">
              <Image src='/images/bag-white.png' alt="white shopping bag" width={25} height={25} />
              PAYMENT
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
