"use client"
import { Card } from "../../../../packages/ui/src/TransferCard"


export default function BalanceCard({amount,locked}:{
    amount:number,
    locked:number
}){

    return <Card title="Balance">

        <div className="flex justify-between border-b border-slate-300 pb-2 ">
               <div>
                Unlocked Balance
               </div>
                    <div>
                        {amount|| 100} INR
                    </div>

                    <div className="flex justify-between border-b border-slate-300 py-2">
                        <div>
                            Total Locked Balance
                        </div>
                        <div>
                            {locked||100} INR
                        </div>

                    </div>
                     <div className="flex justify-between border-b border-slate-300 py-2">
                        <div>
                            total balance 
                        </div>
                        <div>
                            {amount+locked || 100 } INR
                        </div>
                    </div>
        </div>

            


    </Card>
}