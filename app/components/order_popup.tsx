'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function OrderPopup() {
    const [paymentDone, setPaymentDone] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setPaymentDone(true);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-75 flex items-center justify-center">
                <div className="bg-white p-10 rounded-lg">
                    <div className="p-4 max-w-md mx-auto">
                        {paymentDone 
                        ?<div className="text-center flex flex-col justify-center items-center gap-4">
                            <p className="text-2xl ">Payment success</p>
                             <Image src='/images/check.png' alt='payment sucess png' width={125} height={100} />
                             <p>Your payment was a success </p>
                             <Image className="my-4" src='/images/border.png' alt='dissapointed face' width={200} height={50} />
                             <form  >
                                <div className="flex gap-4 justify-around w-full">
                                <button>
                                    <Image src='/images/satisfied.png' alt='satisfied face' width={45} height={45} />
                                </button>
                                <button>
                                    <Image src='/images/happy.png' alt='happy face' width={50} height={50} />
                                </button>
                                <button>
                                    <Image src='/images/dissapointed.png' alt='dissapointed face' width={50} height={50} />
                                </button>
                                </div>
                                <div className="flex gap-4 p-2 mt-4">
                                <Link href='/' ><button className="px-4 py-2 border border-black bg-black text-white"> Submit</button></Link>
                                <Link href='/' ><button className="px-4 py-2 border border-black "> Go To Home</button></Link>
                                </div>
                             </form>
                        </div>
                        : <Image src='/images/spinner.gif' alt="loading" height={100} width={100} />}
                    </div>
                </div>
            </div>
        </>
    );
}
