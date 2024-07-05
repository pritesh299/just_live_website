'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SubCategory_Card from "./subCategory_card";

export default function Category_Card({ title, subCategoryList }: { title: string, subCategoryList: string[] }) {
    const [arrowUp, setArrowUp] = useState(false);
    return (
        <>
            <div className="flex flex-col">
                <div className="flex p-4 justify-between items-center" onClick={() => { setArrowUp(!arrowUp) }}>
                    <p className="text-xl">{title}</p>
                    <Image
                        className="w-[18px] h-[15px]"
                        src={`/images/${arrowUp ? 'up_arrow' : 'down_arrow'}.png`}
                        alt="menu logo"
                        width={18}
                        height={15}
                    />
                </div>
                {arrowUp?<div>
                    {subCategoryList.map((element: string, index: number) => (
                        <SubCategory_Card key={index} title={element} />
                    ))}
                </div>:<></>}
                
            </div>
        </>
    );
}
