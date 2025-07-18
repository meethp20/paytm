// 'use client '
// import React, { useState } from "react"
// import TextInput from './TextInput';
// import Select from "./Select";
// import { Card } from "./TransferCard";
// import { Button } from "./button";
// export default function AddMoney(){
// const banks= [
//     {
//         name:"HDFC bank server",
//         redirectUrl:"http://netbanking.hdfc.com"
//     },
//     {
//         name:"Axis bank server",
//         redirectUrl:"http://netbanking.axisbank.com"
//     }
// ]
// const [redirectUrl,setRedirectUrl] = useState(banks[0]?.redirectUrl) // ye smj nahi araha pehle baat toh
//     return <Card title="Add Money">
// <div>
//     <TextInput label="Amount "  placeholder="Set Amount" onChange={ ()=>{ }}/>
// </div>

// <Select onSelect={(value)=>{
//       setRedirectUrl(banks.find(x => x.name === value)?.redirectUrl || "")
//       }}
// options={banks.map(bank =>({
//     key:bank.name,
//     value:bank.redirectUrl
// }))}
// />
//      <div className="flex justify-center pt-4">
//             <button onClick={() => {
//                 window.location.href = redirectUrl || "";
//             }}>
//             Add Money
//             </button>
//         </div>
//     </Card>
// }

"use client";
import React, { useState } from "react";
import TextInput from './TextInput';
import Select from "./Select";
import { Card } from "./TransferCard";
import { Button } from "./button";

export default function AddMoney() {
    const banks = [
        {
            name: "HDFC Bank",
            redirectUrl: "http://netbanking.hdfc.com"
        },
        {
            name: "Axis Bank", 
            redirectUrl: "http://netbanking.axisbank.com"
        }
    ];

    const [amount, setAmount] = useState<string>("");
    const [redirectUrl, setRedirectUrl] = useState(banks[0]?.redirectUrl); // ✅ Fixed syntax

    return (
        <Card title="Add Money">
            <div>
                <TextInput 
                    label="Amount" 
                    placeholder="Set Amount" 
                    onChange={(value) => setAmount(value)} //  Actually use the state
                />
            </div>

            <div className="py-4 text-left">
                Bank
            </div>

            <Select 
                onSelect={(value) => {
                    // When user selects a bank name, find its URL
                    setRedirectUrl(banks.find(x => x.name === value)?.redirectUrl || "");
                }} 
                options={banks.map(bank => ({ // Use 'options' prop
                    key: bank.name,        //  Unique identifier
                    value: bank.name       //  What user sees (bank name)
                }))}
            />

            <div className="flex justify-center pt-4">
                <button onClick={() => {
                    window.location.href = redirectUrl || "";
                }}>
                    Add Money
                </button>
            </div>
        </Card>
    );
}