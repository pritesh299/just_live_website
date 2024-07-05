'use client';
import { useRouter } from 'next/navigation';
import React, { use, useState } from 'react';

interface PopupType {
    currentRoute:string
    setShowAddCategoryPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const categoryData = {
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
        'topWear': ['T-shirts', 'Sweatshirts', 'Jackets', 'Dresses', 'Tops', 'Sweaters'],
        'bottomWear': ['Shorts', 'Pants', 'Jeans', 'Skirts', 'Shorts'],
        'innerWear': ['Underpants', 'Vests', 'Socks']
    }
};

const AddCategoryPopup = ({ currentRoute,setShowAddCategoryPopup }: PopupType) => {
    const [mainCategory, setMainCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [furtherSubCategory, setFurtherSubCategory] = useState('');
    const [showSubmit,setShowSubmit]=useState(false)
    const router = useRouter()

    const handleMainCategoryChange = (e) => {
        setMainCategory(e.target.value);
        setSubCategory('');
        setFurtherSubCategory('');
        setShowSubmit(true)

    };

    const handleSubCategoryChange = (e) => {
        setSubCategory(e.target.value);
        setFurtherSubCategory('');
    };

    const handleFurtherSubCategoryChange = (e) => {
        setFurtherSubCategory(e.target.value);
    };

    const Search=()=>{
        let redirectPath=`${currentRoute}/${mainCategory}`
        subCategory && (redirectPath+=`/${subCategory}`)
        furtherSubCategory && (redirectPath+=`/${furtherSubCategory}`)
        router.push(redirectPath)

    }

    return (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-10 rounded-lg">
              
                <div className="p-4 max-w-md mx-auto">
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm font-bold text-gray-700">Main Category</label>
                            <select
                                value={mainCategory}
                                onChange={handleMainCategoryChange}
                                className="block w-full p-2 border border-gray-300 rounded"
                            >
                                <option value="" disabled>Select main category</option>
                                {Object.keys(categoryData).map((category) => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        {mainCategory && (
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-700">Sub Category</label>
                                <select
                                    value={subCategory}
                                    onChange={handleSubCategoryChange}
                                    className="block w-full p-2 border border-gray-300 rounded"
                                >
                                    <option value="" disabled>Select sub category</option>
                                    {Object.keys(categoryData[mainCategory]).map((sub) => (
                                        <option key={sub} value={sub}>{sub}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {subCategory && (
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-700">Further Sub Category</label>
                                <select
                                    value={furtherSubCategory}
                                    onChange={handleFurtherSubCategoryChange}
                                    className="block w-full p-2 border border-gray-300 rounded"
                                >
                                    <option value="" disabled>Select further sub category</option>
                                    {categoryData[mainCategory][subCategory].map((item) => (
                                        <option key={item} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                <div className='w-full  flex gap-3 p-2'>
                <button
                    className=" border border-gray-200  p-2 mx-auto cursor-pointer w-24 text-center mb-4 rounded-full"
                    onClick={() => {setShowAddCategoryPopup(false);setShowSubmit(false)}}
                >
                    Close
                </button>
                {showSubmit
                && <button 
                    onClick={(e)=>{e.preventDefault();Search()}}
                    className=" border border-gray-200 bg-[#DD8661] text-white p-2 mx-auto cursor-pointer w-24 text-center mb-4 rounded-full"
                >
                  Search
                </button>}
              
                </div>
                    </form>
                </div>
            
            </div>
        </div>
    );
}

export default AddCategoryPopup;
