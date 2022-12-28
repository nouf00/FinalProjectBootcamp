import express from "express"
import { env } from "process";


const app =express();

const PORT =env.PORT || 5000;

app.listen(PORT,()=>{
console.log( PORT  + " is a work")
    
})