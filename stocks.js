var express = require("express");

var router = express.Router();
const path = require('path'); 

module.exports = router;

var mysql = require('mysql');
const connect = require("mongodb");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "Stocks"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!!!")
})

var stocks

router.get("/createstock",function(req,res){
    res.sendFile(__dirname+'/addstock.html')

})

function addstock(data){
    var sqlquery = ` insert into stocklist(id, sname, price) values(${data.id}, "${data.sname}", ${data.price}) `
    con.query(sqlquery,function(err,result){
        if (err) throw err;
        console.log("Total Number of Rows inserted||| "+result.affectedRows)
    })
}

function getstocklist(){
    var sqlquery = "select * from stocklist;"
    con.query(sqlquery, function(err, result){
        if(err) throw err;
        stocks = result;
    })
}

getstocklist();

router.get("/buysell",function(req,res){
    res.sendFile(__dirname+'/index.html')
})

router.get("/getallstocks", function (req, res) {
    res.json(stocks)
    console.log(stocks)
})

router.post("/addnewstock/", function (req, res) {
    // res.sendFile(path.join(__dirname, '/index.html'));
    // var newId = stocks[stocks.length - 1].id + 1;
    // stocks.push();
    addstock({
        id: req.body.id,
        sname: req.body.sname,
        price: req.body.price
    });
    getstocklist();
    res.json({ message: " New Stock details uploaded..." })
})

router.get("/:id([0-9]{1,})", function (req, res) {
    console.log("Testing")
    var stockslist = stocks.filter(function (stock) {
        console.log(stocks[0].id)
        if (stocks.id == req.params.id) {
            return true;
        }
    });
    res.json(stocks[req.params.id])
})