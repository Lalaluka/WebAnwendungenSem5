const express = require("express");
const mongoose= require("mongoose");
const routes = require("./api/v1/route.js");
const bodyparser = require("body-parser");


mongoose.connect("mongodb://localhost/testdb");
const db = mongoose.connection;
if(db){
    console.log("Connected with DB!")
}

const app = express();
app.use(bodyparser.urlencoded({
    extended : true
}));
app.use("/api/v1",routes);

app.listen(8080,function(){
    console.log("Server started");
});
