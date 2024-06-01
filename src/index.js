import mongoose from "mongoose";
import DB_NAME from "./contstant"
import express from "express"
const app = express()

    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("error:",error)
                throw error
            })
            app.listen(process.env.PORT, () => {
                console.log(`your app is listening on https://localhost:${process.env.PORT}`)
            })
        } catch (error) {
            console.error("something wrong error", error)
            throw error
        }
    })()