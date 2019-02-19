const con = require('./connection');


// This is the database

const orm = {
    selectAll: (cb) => {
        con.query('SELECT * FROM burgers', (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: (burger, cb) => {
        let insert = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)';
        con.query(insert, [burger, false], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne: (id, cb) => {
        let update = 'UPDATE burgers SET devoured = ? WHERE id = ?';
        con.query(update, [true, id], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    }
}

module.exports = orm;