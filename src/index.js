// require('dotenv').config({path:'./env'});
// code ki consistency ko kaharab krta hai dusri approach hai
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running at port :${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("mongodb connection is failes !!! ",err)
})










/*

import mongoose from "mongoose";
import { DB_NAME } from "./constants";
// there are two methods in to db connevtion 
// 1 dirctly in index.js 
// 2 or using other diifrent fiile 
// always rap db conntion in try catch or use promise 
// db is always in other contienn
// so use always async await
// 1. approach 
// koi burai nhi hai is approach me pr aur good approavh hai 
// function connectDB(){}
// connectDB();
import { express } from "express";
const app=express()
;(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERR:",error);
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
       })
    } catch (error) {
        console.error("ERROR:",error)
        throw error
    }
})() */
