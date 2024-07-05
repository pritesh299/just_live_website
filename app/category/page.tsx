'use client';
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { useState } from "react";
import Add_category_popup from "../components/add_category";
import Image from "next/image";

export default function CategoryPage({ params }: { params: { category: string } }) {
    const [categoryList, setCategoryList] = useState([params.category]);
    const [showAddCategoryPopup,setShowAddCategoryPopup]=useState(false)
    const [data, setData] = useState([    ]);

    return (
        <>  
            {showAddCategoryPopup&& <Add_category_popup currentRoute='category' setShowAddCategoryPopup={setShowAddCategoryPopup} />}
            <Header />
            <div className="w-full p-2 flex gap-2 font-Tenor_Sans cursor-default ">
                <div className="flex gap-2 overflow-x-scroll no-scrollbar w-11/12 justify-center">
                <div  className="flex gap-6 border border-gray-200 p-2 px-4 rounded-full min-w-50">
                    NO CATEGORY CHOOSEN
                   </div>
                </div>
                <div onClick={()=>{setShowAddCategoryPopup(true)}} className="bg-gray-100 p-[0.75rem] rounded-full flex justify-center">
                    <Image 
                      className="w-[22px] h-[22px]"
                      src='/images/filter.png'
                      alt="filter"
                      width={50}
                      height={30}
                    />
                </div>
            </div>
            <div className="min-h-[55vh]">
            </div>
            <Footer />
        </>
    );
}
