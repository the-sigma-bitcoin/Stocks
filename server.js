var express = require("express")
var bodyParser = require("body-parser")
var multer = require('multer')
const cookieParser = require("cookie-parser")
var upload = multer()

var app = express()

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(upload.array())

var stocks = require("./stocks");
app.use("/",stocks)

app.listen(3000)
console.log("Server Started.. ")