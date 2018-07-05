var express = require("express");
var server = express();
var cors = require('cors');
var app = express();
app.use(cors());

server.listen(8080, function(){
    console.log("server started");

})
var players=[];
server.get("/player", function(req, res){
    var n=req.query.name;
    players.push(n);
    console.log(players);
})
server.get("/players", function(req, res){
    res.send(players);
})