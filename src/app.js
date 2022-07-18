const express = require("express")
const app = express()
const port = process.env.PORT || (3000);
const start = () => console.log("Starting Server...");

app.listen(port,start());

const {join}= require("path");
const public = join(__dirname,"../public")
const statics = express.static(public)
app.use(statics);

app.get("/",function(req,res,){
    let root = join(__dirname, "views","hola.html")
    res.sendFile(root)
})
app.get("/register.html",function(req,res,){
    let root = join(__dirname, "views","register.html")
    res.sendFile(root)
})
app.get("/login.html",function(req,res,){
    let root = join(__dirname, "views","login.html")
    res.sendFile(root)
})