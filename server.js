const exphbs = require("express-handlebars");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    });
};

connection.connect();
module.exports = connection;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");
app.use(routes);

// Virtual path to serve static files
app.use('/assets', express.static(__dirname + '/assets'));

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});