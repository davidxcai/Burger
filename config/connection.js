var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: 'root',
    database: "burgers_db"
});

con.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + con.threadId);
});

module.exports = con;