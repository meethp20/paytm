'use client '
import React, { useState } from "react"
import TextInput from './TextInput';
import Select from "./Select";
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
    return (
        <div>
            <TextInput label="Amount" onChange={setAmount} placeholder="add amount"/>
<br/>
             <lable className="bold " >select bank</lable>
            <Select options={banks} onSelect={Option} />

        </div>
    )
}