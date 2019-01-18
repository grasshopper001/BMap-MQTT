var express=require("express");
var app=express();

app.use(express.static("HelloWorld")).listen(3000);
