var express = require("express");

var router = express.Router();
const path = require('path'); 

module.exports = router;

var stocks = [
    { id: 1, sname: "HCL", price: 500
    },
    { id: 2, sname: "Infosys", price: 1000
    },
    { id: 3, sname: "TCS", price: 1500
    },
    { id: 4, sname: "IBM", price: 2000
    }
]

router.get("/createstock",function(req,res){
    res.sendFile(__dirname+'/addstock.html')
})

router.get("/buysell",function(req,res){
    res.sendFile(__dirname+'/index.html')
})

router.get("/getallstocks", function (req, res) {
    res.json(stocks)
    console.log(stocks)
})

router.post("/addnewstock/", function (req, res) {
    // res.sendFile(path.join(__dirname, '/index.html'));
    var newId = stocks[stocks.length - 1].id + 1;
    stocks.push({
        id: newId,
        sname: req.body.sname,
        price: req.body.price
    });
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