const express = require("express");
const mongoose= require("mongoose");
const apiRoutes = require("./api/v1/route.js");
const bodyparser = require("body-parser");
const config = require("config");
const frontendRoutes= require("./frontend/router.js");

const dblocation = config.get("databaselocation");
const dbname = config.get("databasename");
const username = config.get("databaseUserName");
const password = config.get("databasePassword");
const useauth = config.get("databasePassword");
console.log('---DATABASE PARAMETERS---');
console.log('Host: ' + dblocation);
console.log('Username: ' + username);
console.log('Password: ' + password);
console.log('Database: ' + dbname);

if (useauth === "true"){
    console.log("Using AUTH");
    mongoose.connect('mongodb://'+ username + ':' + password + '@' + dblocation+'/'+dbname,function(err){
        if (err) { console.log(err) }
    });
} else{
    console.log("Connecting without AUTH");
    mongoose.connect('mongodb://'+ dblocation+'/'+dbname,  { useNewUrlParser: true, useUnifiedTopology: true }, function(err){
        if (err) { console.log(err) }
    });
}
const db = mongoose.connection;
if(db){
    console.log("Connected with DB!")
}

const app = express();
app.use(bodyparser.urlencoded({
    extended : true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/api/v1",apiRoutes);

app.use('/',frontendRoutes);

app.listen(config.get('port'),function(){
    console.log("Server started on Port: "+config.get('port'));
});

module.exports= app;
module.exports.port= config.get('port');