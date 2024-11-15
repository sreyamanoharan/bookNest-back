import express from "express"
import mongoose from "mongoose"
import bookRouter from "./BookRoutes.js"
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app=express()
app.use(express.json())


app.use(cors({
    origin: ["https://book-nest-front.vercel.app"],
   methods: ["GET", "POST","PATCH","PUT","DELETE" ],
   credentials: true,
 }));
 app.use('/',bookRouter)

app.listen(3000,()=>{
    console.log(`server running on ${3000}`);
    
})

mongoose.connect(process.env.MONGO_URL).then((res)=>{
    console.log("mongo connected");
    
})