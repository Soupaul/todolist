const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

let port = 3000;

app.get("/",function(req,res){
    // res.send("<h1>Welcome to the Home Page</h1>");
    res.sendFile("index.html");
});

app.get("/about",function(req,res){
    res.send("<p>Welcome to About Page</p>");
});

app.listen(port,function(){

    console.log(`Server started successfully at: http://localhost:${port}`);

});