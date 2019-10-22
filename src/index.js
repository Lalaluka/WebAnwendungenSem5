const express = require("express");
const mongoose= require("mongoose");
const routes = require("./api/v1/route.js");
const bodyparser = require("body-parser");
const config = require("config");

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
    mongoose.connect('mongodb://'+ dblocation+'/'+dbname, function(err){
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
app.use("/api/v1",routes);

app.listen(config.get('port'),function(){
    console.log("Server started on Port: "+config.get('port'));
});

exports= app;
exports.port= config.get('port');