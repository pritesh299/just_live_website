import Link from "next/link";
import Image from "next/image"
export default function Footer() {
    return<>
    <footer className=" flex flex-col justify-center items-center font-Tenor_Sans">
        <div className="flex justify-around p-4 w-full m-4">
        <Image
                src="/images/instagram.png"
                alt="menu logo"
                width={30}
                height={30}
            />
        <Image
                src="/images/twitter.png"
                alt="menu logo"
                width={30}
                height={30}
            />
        <Image
                src="/images/youtube.png"
                alt="menu logo"
                width={40}
                height={30}
            />
        </div>    
        <div className="flex flex-col gap-3">
        <Image  
                src="/images/border.png"
                alt="menu logo"
                width={300}
                height={30}
            />
        <div className=" text-center flex flex-col gap-1 text-  ">
            <p>support@justlive.com</p>
            <p>+63596 95936</p>
            <p>10:00 AM - 06:00 PM - Everyday</p>
        </div>
        <Image  
                src="/images/border.png"
                alt="menu logo"
                width={300}
                height={30}
            />
        </div>
        <div className="w-full flex justify-around p-6">
            <a>About</a>
            <a>Contact</a>
            <a>Blog</a>
        </div>
        <div className="text-sm  bg-gray-50 w-full text-center p-4">
            <p>Copyright @ justLive All Rights Reserved.</p>
        </div>
    </footer>    
    </>}
