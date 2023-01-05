import express from "express"
import { env } from "process";
import http from 'http';
import { Server } from "socket.io";
import { connectDB } from "./Config/db"
import postitem from "./Router/postrouter"
import authRouter from "./Router/auth"
import cors from "cors";
const app =express();


//   const server = http.createServer(app);
// const io = new Server(server);
// io.on('connection', (socket) => {
//  console.log('a user connected');
//   });
// app.use(express.json());
app.use(cors());

connectDB()
app.use('/api/v1/chefpage', postitem);
app.use("/api/v1/auth", authRouter);
  
const PORT =env.PORT || 5000;

app.listen(PORT,()=>{
console.log( PORT  + " is a work")
    
})


