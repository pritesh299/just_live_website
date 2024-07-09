import Image from "next/image";
import Header from "../components/header";

export default function search(){
    return<>
     <Header />
     <div className="h-[10vh] w-full p-4 ">
        <div className="border-b h-full flex p-2 justify-around items-center">
            <Image className="w-[25px]" src='/images/search.png' alt="search" width={250} height={1000} />
            <div className="w-[90%]">
                <input className="w-full p-2 outline-none text-xl" type="text" />
            </div>
            <p className="text-2xl font-thin">X</p>
        </div>
     </div>
    </>
}