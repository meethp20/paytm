import express from "express"

const app = express()

app.post('/hdfcbankserver',(res,req)=>{
    // these are the things to send , kirat asked to add zod here not to forget
    const paymentInformation={
        token:req.body.token,
        userId:req.body.user_identifier,
        amount:req.body.amount
    }

    try{

    }

})