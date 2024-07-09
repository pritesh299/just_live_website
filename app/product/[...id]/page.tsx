'use client'
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Image from "next/image";
import { useState } from "react";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

export default function Productpage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const data = {
    productName: "Sample Product",
    imgSrc: [
      "/images/dummy-product.png",
      "/images/dummy-product.png",
      "/images/dummy-product.png",
      "/images/dummy-product.png"
    ],
    price: 29.99,
    rating: 4.5,
    subName: "Sample Subcategory"
  };

  return (
    <>
      <Header />
      <div className="w-full ">
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="w-full keen-slider">
            {data.imgSrc.map((src, index) => (
              <div key={index} className="keen-slider__slide p-4">
                <Image
                  className=" h-[60vh]"
                  src={src}
                  alt={`product image ${index + 1}`}
                  width={1000}
                  height={1000}
                />
              </div>
            ))}
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="flex justify-center py-2">
            {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={`w-2 h-2 mx-1 rotate-45  border border-gray-400 ${currentSlide === idx ? 'bg-gray-400' : 'bg-white'}`}
              >
              </button>
            ))}
          </div>
        )}

      </div>
      <div className="w-full   text-xl p-4 flex  flex-col gap-1">
        <div>{data.productName}</div>
        <div className="text-gray-400 text-base">{data.subName}</div>
        <div className="text-[#DD8560]">$ {data.price}</div>
      </div>
      <div className="w-full bg-black text-xl items-center text-white text-center flex justify-center gap-4 p-4">
        <Image src='/images/bag-white.png' alt="white shopping bag " width={25} height={25}></Image>
        Add To the cart </div>
      <div className="bg-gray-100">
        <div className="w-full text-gray-400 font-semibold p-6 text-xl">
            <p className="text-black my-2">Materials</p>
            <p className="text-base">
            We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. 
            </p>
        </div>
        <div className="w-full text-gray-400 font-semibold p-6 text-xl">
            <p className="text-black my-2">Care</p>
            <p className="text-base"> To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment. </p>
            <div className="w-full flex text-base gap-4 py-2">
              <Image src='/images/bleach.png' alt="" width={30} height={30}></Image>
              <p>Do not Bleach
              </p>
            </div>
            <div className="w-full flex text-base gap-4 py-2">
              <Image src='/images/wash.png' alt="" width={30} height={30}></Image>
              <p>Do not tumble dry
              </p>
            </div>  <div className="w-full flex text-base gap-4 py-2">
              <Image src='/images/machine.png' alt="" width={30} height={30}></Image>
              <p>Dry clean with tetrachloroethylene
              </p>
            </div>  <div className="w-full flex text-base gap-4 py-2">
              <Image src='/images/iron.png' alt="" width={30} height={30}></Image>
              <p>Iron at a maximum of 110ºC/230ºF
              </p>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
