import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

export default function Collection(){
    return<>
    <Header />
    <Image className="w-screen h-[77.5vh]" src='/images/home.png' alt="collectio image" width={10000} height={1000} />
    <div className="h-[15vh] w-full text-center p-6 flex flex-col gap-4 " >
        <p className="text-2xl">Collections Commming soon </p>
        <Link href='/' ><button className="px-4 py-2 border border-black "> Go To Home</button></Link>
        
    </div>
     </>
}