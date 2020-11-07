const express = require('express')
const cors = require('cors')
const app = express()
let port = process.env.PORT || 8000;
app.use(cors())

app.get("/",(req,res)=>{
    res.send("deneme")
})

app.listen(port, ()=>{
    console.log("port başladı")
});