import Image from "next/image";
import Header from "../components/header";
import CartProductCard from "../components/cart_product_card";
import Link from "next/link";

export default function Checkout(){
  const data=[
    {
      productName: "Sample Product",
      imgSrc: "/images/dummy-product.png",
      price: 29.99,
      rating: 4.5,
      subName: "Sample Subcategory",
      qunatity:"9"
  }]
    return<>
     <Header />
     <div className="h-[92.5vh]">
        <div className="p-1 h-[10%]  gap-2 w-full flex-col flex justify-center items-center text-xl">CHECKOUT 
        <Image  
                src="/images/border.png"
                alt="menu logo"
                width={200}
                height={30}
            />
        </div>
        <div className="h-[90%]  relative"> 
             <div className="">
                <CartProductCard productData={data[0]} />
             </div>
             <div className="absolute bottom-0">
             <Link href='checkout/details'>
             <div className="h-[10%] w-[100vw] bg-black text-white flex justify-center items-center text-xl gap-4 p-4 ">
          <Image src='/images/bag-white.png' alt="white shopping bag  " width={25} height={25}></Image>
           Proceed to checkout
        </div>
        </Link>
        </div>
        </div>
        
   
     </div>
    </>
}