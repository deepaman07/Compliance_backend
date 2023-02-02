
var mysql=require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "T0day@1234",
    database: 'PbmcApi'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
module.exports=con;