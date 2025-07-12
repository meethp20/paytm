import Link from "next/link"

export default function SideBar(){

    return(
        <div className="flex ">
            <Link  href={"/setting"}> Settings </Link>
            <br />
            <Link href={"/transaction"}>transaction</Link>
            <br/>
            <Link href={"/history"}>History</Link>
            <br/>
        </div>
    )
}