const orm = require('../config/orm');

// create the code that will call the ORM functions using burger specific input for the ORM
// This is the model

var burger = {
    select: function(cb) {
        orm.selectAll( res => {
            cb(res);
        });
    },
    insert: function(borger, cb) {
        orm.insertOne(borger, function(resp) {
            cb(resp);
        })
    },
    update: function(id, cb) {
        orm.updateOne(id, function(resp) {
            cb(resp);
        })
    }
}

module.exports = burger;