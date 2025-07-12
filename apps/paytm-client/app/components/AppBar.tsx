import Link from "next/link"

export default function Appbar(){
    return(
    <nav className="flex items-center justify-between ">
         <Link href={"/"} className="text-indigo-500 font-extrabold ">  KlientPay</Link>




    </nav>
    )
}