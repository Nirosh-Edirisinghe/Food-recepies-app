const mongoos = require("mongoose")

const conncetDb = async()=>{
   await mongoos.connect(process.env.CONNECTION_STRING)
   .then(()=>console.log("connected..."))
}

module.exports = conncetDb