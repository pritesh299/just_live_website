import Image from "next/image"
import Link from "next/link"
import CartProductCard from "../components/cart_product_card"

export default function CartPage(){

  const data=[
    {
      productName: "Sample Product",
      imgSrc: "/images/dummy-product.png",
      price: 29.99,
      rating: 4.5,
      subName: "Sample Subcategory",
      qunatity:"9"
  }
  ]


    return<>
    <div className="w-[100vw] relative bg-white scroll-none overflow-hidden font-Tenor_Sans ">
    <div className="h-[15vh] ">
    <div className="text-3xl px-6  py-4 font-light ">
        <Link href='/'> X</Link>
    </div>
    <div className=" w-full p-4 text-xl ">CART</div>
    </div>
    <div className="h-[77.5vh] flex flex-col  items-center overflow-x-hidden overflow-y-scroll "> 
      <div className="w-full ">
         <CartProductCard  productData={data[0]}/>
     </div>
     <div className="w-full border-t p-4">
        <div className="flex justify-between p-4 text-xl">
          <p >Sub-total</p>
          <p className="text-[#DD8661]">$ 240</p>
        </div>
        <p className="text-xl text-gray-400 p-4">*shipping charges, taxes and discount codes  are calculated at the time of accounting. </p>
     </div>
        {/* <p className="w-full text-center text-xl font-semibold text-gray-400">You have no items in your Shopping Bag.</p> */}
    </div> 
  <div className="bg-black  h-[7.5vh] text-white flex justify-center items-center gap-4">
     <Image
       className="w-[25px]"
       src='/images/bag-white.png'
       alt="white bag"
       width={100}
       height={100}
     />
     <Link href='/checkout'  >
     <p className="text-xl font-thin">CONTINUE SHOPPING</p>
     </Link>
  </div>
    </div>
    </>
}