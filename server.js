const exphbs = require("express-handlebars");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const mysql = require('mysql');

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