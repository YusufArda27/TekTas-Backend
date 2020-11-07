const express = require('express')
const cors = require('cors')
const app = express()
const data=require('./data.json')
let port = process.env.PORT || 8000;
app.use(cors())

app.get("/",(req,res)=>{
    res.send(data)
})

app.listen(port, ()=>{
    console.log("port başladı")
});