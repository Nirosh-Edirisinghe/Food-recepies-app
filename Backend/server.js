const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const conncetDb = require("./config/connectionDb")

const  PORT = process.env.PORT || 3000
conncetDb()

app.use(express.json())

app.use("/recipe",require("./routes/recipe"))

app.listen(PORT,(err)=>{
   console.log(`app is listenin on port ${PORT}`)
})