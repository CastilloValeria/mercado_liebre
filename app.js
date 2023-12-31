const express= require("express");
const path= require ("path");
const puerto =3030;
const app= express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(puerto, ()=>console.log(`server running in : http://localhost:${puerto}`));


const publicPath= path.join(__dirname, "./public");
app.use(express.static(publicPath));
app.use (express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/view/home.html" );
});

app.get("/registro", (req, res)=>{
    res.sendFile(__dirname+"/view/registro.html" );
});
app.get("/login", (req, res)=>{
    res.sendFile(__dirname+"/view/login.html" );
});

app.post("/login",( req,res)=>{
    console.log(req.body);
    res.redirect("/")
});

app.post("/registro",( req,res)=>{
    console.log(req.body);
    res.redirect("/login")
});

