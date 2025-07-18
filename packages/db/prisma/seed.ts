import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


async function main(){

    const gurpreet = await prisma.user.upsert({
        where:{
            number:'9595555665'
        },
        update:{},
        create:{
            number:'9595555665',
            password:'gurpreet',
            name:"Gurpreet Singh",
            onRampTransaction:{
                create:{
                    startTime:new Date(),
                    startus:"success",
                    amount:200000000,
                    token:"202",
                    provider:"HDFC BANK",
                },
            },
        },
    })
    console.log({gurpreet})
}main().then(async()=>{
    await prisma.$disconnect()
})  .catch(async(e)=>{
    console.log(e)
    await prisma.$disconnect()
    process.exit(1); 
})

//update package.json
//run npx prisma db seed
//npx prisma studio