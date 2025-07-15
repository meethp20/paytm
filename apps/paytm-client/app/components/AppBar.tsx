'use client'

import Link from "next/link"
import Balance from "./Balance"


export default function Appbar(){
    return(
    <nav className="flex items-center justify-between ">
         <Link href={"/"} className="text-indigo-500 font-extrabold ">  KlientPay</Link>

    
    <div className="">
     <button className="rounded text-indigo-500 px-6 py-8">Sign Out</button>
     <div>
      balance : <Balance />
      </div>
     </div>
     
      
    </nav>
    )
}