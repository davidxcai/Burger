const express = require('express');
var app = express();
const burger = require('../models/burger');

app.get('/', (req, res) => {
    burger.select(data => {
        res.render('index', { burgers: data });
    })
})

app.post('/api/new/', (req, res) => {
    console.log(req.body.burger);
    burger.insert(req.body.burger, resp => {
        if (!resp) {
            res.status(400).end();
        }
        else {
            res.status(200).end();
        }
    })
});

app.put('/api/update/:id', (req, res) => {
    burger.update(req.params.id, resp => {
        if (!resp) {
            res.status(400).end();
        }
        else {
            res.status(200).end();
        }
    });
});

module.exports = app;