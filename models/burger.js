//Import the ORM to create functions that will interact with the database
var orm = require('../config/orm.js');

var burger = {
    SelectAll: function(cb){
        orm.SelectAll('burgers', function(res){
            cb(res);
        });
    },
    //The variables cole and vals are the arrays
    insertOne: function(cols, vals, cb){
        orm.insertOne('burgers', cols,vals, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb){
        orm.updateOne('burgers', objColVals, condition, function(res){
            cb(res);
        });
    }
};

//Export the database functions for the controller 
module.exports = burger;