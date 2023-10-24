const express= require("express");
const path= require ("path");
const puerto =3030;
const app= express();

app.listen(puerto, ()=>console.log(`server running in : http://localhost:${puerto}`));


const publicPath= path.join(__dirname, "./public");
app.use(express.static(publicPath));

app.use (express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/view/home.html" );
})