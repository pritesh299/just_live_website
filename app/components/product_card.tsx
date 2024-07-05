import Image from "next/image";

interface cardType{
  productData:{
  productName: string;
  imgSrc: string;
  price: number;
  rating: number;
  subName: string;
}
}

export default function Product_card({productData}:cardType){
    return<>
      <div className="w-full  flex p-2 gap-2  hover:bg-gray-100 ">
         <img src={productData.imgSrc} alt={productData.productName} className="w-[125px] h-[175px]"/>
         <div className="p-2 text-xl  w-full flex flex-col justify-around relative">
           <p className="">{productData.productName}</p>
           <p className="text-gray-400 text-base">{productData.subName}</p>
           <p className="my-4 text-[#DD8661] ">${productData.price}</p>
            <div className=" flex items-center gap-2 text-base">
            <div><Image  src='/images/gold-star.png' alt="star" width={20}  height={20}/></div>
            {productData.rating} Ratings</div>

            <div className="absolute bottom-5 right-10">
              <Image src='/images/heart.png' alt="Add to Bag" width={30} height={20} />
            </div>
         </div>
      </div>
    </>   
}