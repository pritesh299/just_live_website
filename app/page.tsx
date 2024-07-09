"use client";
import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import { useState } from "react";
import { Latest_container } from "./components/latest_container";
import Link from "next/link";

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
           <Link className=" w-full flex justify-center" href='/collections' ><button className="w-[60%] bg-white text-black hover:text-white hover:bg-black text-xl  py-2 px-4 rounded-full opacity-75 hover:opacity-100 ease-in-out ">Explore collection</button></Link>
          </div>
      </div>
      <div className="w-full ">
        <div className="w-full p-2 text-center text-3xl my-4  "> NEW ARRIVAL</div>
        <div  className="w-full flex justify-center"> <Image  
src="/images/border.png"
alt="menu logo"
width={300}
height={30}
/></div>
        <Latest_container />
      </div>
      <div className="px-4 py-8 text-center font-semibold text-gray-400 bg-gray-100">
        <div className="w-full justify-center flex flex-col items-center" >
        <Link href="/">
        <Image  className="w-[200px] h-auto"
                src="/images/logo.png"
                alt="Site Logo"
                width={200}
                height={100}
            />
        </Link>
        <p className="w-3/4 ">Making a luxurious lifestyle accessible for a generous group of women is our daily drive.</p>
        </div>
       <div className="w-full p-4 flex justify-center">
       <Image  
                src="/images/border.png"
                alt="menu logo"
                width={300}
                height={30}
            />
       </div>
        <div className="grid grid-cols-2 grid-rows-2  px-8 place-items-center py-4">
           <div className="flex justify-center flex-col items-center text-center w-[200px]">
              <Image  className="w-[65px] h-auto"
                src="/images/about1.png"
                alt="Site Logo"
                width={200}
                height={100}
            />
             <p >Fast shipping.<br/> Free on orders over $25.</p>
           </div>
           <div className="flex justify-center flex-col items-center text-center w-[200px]">
              <Image  className="w-[65px] h-auto"
                src="/images/about2.png"
                alt="Site Logo"
                width={200}
                height={100}
            />
             <p >Sustainable process <br/>  from start to finish.</p>
           </div>
           <div className="flex justify-center flex-col items-center text-center w-[200px]">
              <Image  className="w-[65px] h-auto"
                src="/images/about3.png"
                alt="Site Logo"
                width={200}
                height={100}
            />
             <p >Unique designs  and high-quality materials.</p>
           </div>
           <div className="flex justify-center flex-col items-center text-center w-[200px]">
              <Image  className="w-[65px] h-auto"
                src="/images/about4.png"
                alt="Site Logo"
                width={200}
                height={100}
            />
             <p >Fast shipping. <br/>Free on orders over $25.</p>
           </div>
           
       
        </div>
        <div className="w-full p-4 flex justify-center mt-8">
       <Image  
                src="/images/border.png"
                alt="menu logo"
                width={300}
                height={30}
            />
       </div>
      </div>
    
     </div>
     <Footer></Footer>
     </>
  );
}
