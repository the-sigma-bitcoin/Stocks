var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "Stocks"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!!!")
    
    // con.query("Create Database Stocks", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database Created!!!")
    // })

    // var sqlQuery="create table stocklist(id int(10), sname varchar(20), price int(10))";
    // con.query(sqlQuery, function(err,result){
    //     if(err) throw err;
    //     console.log("Table Created..!!!")
    // })

    var values = [
        [1, "TCS", 500],
        [2, "HCL", 2000]
    ]
    
    var squery = "insert into stocklist(id, sname, price) values ?"

    con.query(squery,[values],function(err,result){
        if (err) throw err;
        console.log("Total Number of Rows inserted||| "+result.affectedRows)
    })
})