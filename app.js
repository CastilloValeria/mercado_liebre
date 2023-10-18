const express= require("express");
const path= require ("path");

const app= express();

app.listen (3000,() => console.log("servidor corriendo en puerto 3000"));

const publicPath= path.join(__dirname, "./public");
app.use(express.static(publicPath));

app.use (express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/view/home.html" );
})