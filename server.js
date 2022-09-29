var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');
var http = require('http');
var connection = require('./database')

// ****************** Middle Ware *******************
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('Frontend'));

app.get('/persons',function(req,res){
    let sql = "SELECT * FROM persons";
    connection.query(sql,function(err,results){
        if(err) throw err;
        res.send(results);
    })
})

app.listen(3000, function () {
    
/*     connection.connect(function(err){
        if(err) throw err;
        console.log("Database Connected");
    }) 
     */
    console.log("listening to port 3000");
    app.get("/", function (request, result) { 
        result.sendFile(path.join(__dirname + '/Frontend/index.html'));
        
    });
});
