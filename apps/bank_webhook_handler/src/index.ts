import express from "express"
import db from "./db" // Adjust the path as needed to point to your db instance
const app = express()

app.post('/hdfcbankserver', async (req, res) => {
    // these are the things to send , kirat asked to add zod here not to forget
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };

    try {
        await db.$transaction([
            db.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            db.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    status: "success",
                }
            })
        ]);
        res.json({
            message: "Captured"
        });

    } catch (e) {
        console.log(e);
        res.status(441).json({
            message: "error while processing webhook "
        });
    }

});

app.listen(3003)