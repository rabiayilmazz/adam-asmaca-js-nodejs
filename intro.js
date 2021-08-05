var http = require('http');
var fs = require('fs');

var express = require('express');

http.createServer(function(req, res){
    fs.readFile('./index.html', function(err,data){
        if(err){
            throw err;
        }
        res.write(data)


        res.end()

    });

    express.length('?harf=a', function(req,res){
        console.log("okudu")
    })

    /*fs.readFile('./script.js',function(err,data){
        if(err){
            throw err;
        }
        res.write(data);
        res.end();
    });*/
    
}).listen(8080)
