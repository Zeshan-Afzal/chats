import express from 'express'
import {createServer} from "http"
import { Server } from 'socket.io'
import cors from "cors"
const app =express()
const server=createServer(app)


const io = new Server(server);

app.use(cors({
  origin: 'https://chatb-omega.vercel.app', // Your frontend URL
  methods: ['GET', 'POST']
}));

io.origins(['https://chatb-omega.vercel.app']); // For Socket.io v4 and below

io.on("connection",(socket)=>{
  socket.emit("hello", socket.id)
  console.log(`new user joined with the id ${socket.id}`)
  socket.on("send", (message)=>{
    
    
    io.emit("recieve", {message, id:socket.id})
  })
  
})


app.get("/",(req, res)=>{
 res.send("heldfdfow")

})


server.listen(3000, ()=>{
 console.log("app is listi n on threr")

})