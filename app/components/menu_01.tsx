'use client';
import Link from "next/link";
import Image from "next/image"
import { useState } from "react";

export default function Menu_01({title,subCatergoryList}:{title:string,subCatergoryList:any}) {
    const [arrowUp,setArrowUp]=useState(false)
    console.log(subCatergoryList)
    return<>
        <div className="flex p-4 justify-between items-center" onClick={()=>{setArrowUp(!arrowUp)}}>
          <p className="text-xl">{title}</p>
          <Image  
                className="w-[18px] h-[15px]"
                src={`/images/${arrowUp?'up_arrow':'down_arrow'}.png`}
                alt="menu logo"
                width={18}
                height={15}
            />
     </div>
    
    </>
}