"use client";
import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [viewMenu,setViewMenu]=useState(false)

  return (
     <>
     <Header></Header>
     <div className="font-Tenor_Sans">
      <div className="w-full  relative">
        <Image    className="w-full h-auto"
                src="/images/home.png"
                alt="home picture"
                width={40000}
                height={30}
            />
          <div className="w-full absolute bottom-0 p-4 flex justify-center mb-6">
            <button className=" w-[60%] bg-black text-white py-2 px-4 rounded-full opacity-75 hover:opacity-100 ease-in-out  delay-75">Explore collection</button>
          </div>
      </div>
     </div>
     <Footer></Footer>
     </>
  );
}
