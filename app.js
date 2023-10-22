const express= require("express");
const path= require ("path");
const port =3000;
const app= express();

app.listen (port,() => console.log(`server running in port http//www.localhost:${port} ` ));

const publicPath= path.join(__dirname, "./public");
app.use(express.static(publicPath));

app.use (express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/view/home.html" );
})