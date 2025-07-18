'use client '
import React, { useState } from "react"
import TextInput from './TextInput';
import Select from "./Select";
import { Card } from "./TransferCard";
export default function AddMoney(){
const banks= [
    {
        name:"HDFC bank server",
        redirectUrl:"http://netbanking.hdfc.com"
    },
    {
        name:"Axis bank server",
        redirectUrl:"http://netbanking.axisbank.com"
    }
]
const [amount,setAmount]= useState<string>("")
const [redirectUrl,setRedirectUrl] = useState(banks[0].?redirectUrl) // ye smj nahi araha pehle baat toh
    return <Card title="Add Money">
<div>
    <TextInput label="Amount "  placeholder="Set Amount" onChange={ ()=>{ }}/>
</div>

<Select onSelect={(value)=>{
      setRedirectUrl(banks.find(x => x.name === value)?.redirectUrl || "")
      }}
key={banks.map(bank =>({
    key:bank.name,
    value:bank.redirectUrl
}))}
/>
    </Card>
}