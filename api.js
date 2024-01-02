const express =require("express")
const request  = require("request")
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.static(`${__dirname}/public`));


app.post("/", (req, res)=>{
    const name =  req.body.name
    const email=  req.body.email
    const number = req.body.number
   const message =  req.body.message

    res.sendFile(`${__dirname}/index.html`)
})


app.listen(3000, ()=>{
    console.log("port at listning on 3000");
})