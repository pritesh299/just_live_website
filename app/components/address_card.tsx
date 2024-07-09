import Image from "next/image";

interface cardType{
    addressData: {
        name: string;
        address: string;
        number: string;
    }

}

export default function AddressCard({addressData}:cardType){
    return<>
     <div className="flex justify-between w-full items-center hover:bg-gray-100 p-2">
                        <div className="w-[80%]">
                        <p className="text-xl">{addressData.name}</p>
                        <p className="text-sm">{addressData.address}</p>
                        <p className="text-sm">{addressData.number}</p>
                        </div>
                      <Image className=" rotate-90 w-[15px] h-[10px]" src='/images/up_arrow.png'  alt="arrow" width={20} height={100}></Image>

                      </div>
    
    </>
}

