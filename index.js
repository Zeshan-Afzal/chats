import express from 'express'
import {createServer} from "http"
import { Server } from 'socket.io'
const app =express()
const server=createServer(app)
const io=new Server(server, {cors:{origin: "*",methods:["GET", "POST"] , credentials: true}} )
 
  
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