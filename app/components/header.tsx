"use client";
import Link from "next/link";
import Image from "next/image"
import { useState } from "react";

export default function Header() {

    return<>
  <header  className="flex justify-between p-2">
        <div className="flex  justify-center items-center">
        <Link href="/menu">
        <Image  
                src="/images/menu.png"
                alt="menu logo"
                width={30}
                height={30}
            />
        </Link>
        </div>
        <div >
        <Link href="/">
        <Image  className="w-[100px] h-auto"
                src="/images/logo.png"
                alt="Site Logo"
                width={100}
                height={100}
            />
        </Link>
        </div>
        <div className="flex justify-center  items-center gap-6">
        <Image
                src="/images/search.png"
                alt="search Logo"
                width={30}
                height={30}
            /> 
         <Image
            src="/images/shopping_bag.png"
            alt=" shopping bag logo"
            width={30}
            height={30}
        />
        </div>
    </header>
   
    </>
}
