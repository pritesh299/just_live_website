'use client';
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Product_card from "@/app/components/product_card";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import Add_category_popup from "../../components/add_category";


export default function CategoryPage({ params }: { params: { category: string } }) {
    const [categoryList, setCategoryList] = useState([...params.category]);
    const [showAddCategoryPopup,setShowAddCategoryPopup]=useState(false)
    const [redirectPath,setRedirectPath] =useState(``)

    useEffect(() => {
        let path = '';
        categoryList.forEach(category => {
            path += `/${category}`;
        });
        console.log(path)
        setRedirectPath(path);
    }, [categoryList]);
    const router = useRouter();
    const [data, setData] = useState([
        {
            productName: "Sample Product",
            imgSrc: "/images/dummy-product.png",
            price: 29.99,
            rating: 4.5,
            subName: "Sample Subcategory"
        },
        {
            productName: "Sample Product",
            imgSrc: "/images/dummy-product.png",
            price: 29.99,
            rating: 4.5,
            subName: "Sample Subcategory"
        },
        {
            productName: "Sample Product",
            imgSrc: "/images/dummy-product.png",
            price: 29.99,
            rating: 4.5,
            subName: "Sample Subcategory"
        }
    ]);

    function removeCategory(category: string) {
        const updatedList = categoryList.filter(element => element !== category);
        setCategoryList(updatedList);
        let redirectPath = '';
        updatedList.forEach(category => {
            redirectPath += `/${category}`;
        });

        console.log(redirectPath);
        router.push(`/category${redirectPath}`);
    }

    return (
        <>
            {showAddCategoryPopup&& <Add_category_popup currentRoute={`/category/${redirectPath}`} setShowAddCategoryPopup={setShowAddCategoryPopup} />}
            <Header />
            <div className="w-full p-2 flex gap-2 font-Tenor_Sans cursor-default">
                <div className="flex gap-2 overflow-x-scroll no-scrollbar w-10/12">
                    {categoryList && categoryList.map((category, index) => (
                        <div key={index} className="flex justify-between gap-6 border border-gray-200 p-2 px-4 rounded-full min-w-50">
                            {category}
                            <div onClick={() => removeCategory(category)} className="mx-2 cursor-pointer">X</div>
                        </div>
                    ))}
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
                {data && data.map((productData, index) => (
                    <Product_card key={index} productData={productData} />
                ))}
            </div>
            <Footer />
        </>
    );
}
