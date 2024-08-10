import express from "express"
import dotenv, { config } from "dotenv"

dotenv,config({
    path: ".env"
})

const CLIENT_ID = process.env.CLIENT_ID_API_KEY
console.log(CLIENT_ID);


const app = express()

// app.listen(3000, () => {
//     console.log("Server started");
// })
import loginRouter from "./routes/login.route.js"
app.use("api/v1/login", loginRouter)