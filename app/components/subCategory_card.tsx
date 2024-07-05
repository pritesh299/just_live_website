import Link from "next/link";


export default function SubCategory_Card({title}:{title:string}) {
  
    return<>
    <Link href={`/category/${title}`}>
    <div className="w-full p-2 mx-8">
        <p className="">{title}</p> 
    </div>
    </Link>
    </>
}