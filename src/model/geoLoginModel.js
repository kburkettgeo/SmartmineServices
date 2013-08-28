var Bookshelf = require('bookshelf');
var us = require('underscore');

var UserLogin = Bookshelf.Model.extend({
    tableName : 'geo_login.user_login'
});

var UserLogins = Bookshelf.Collection.extend({
    model: UserLogin
});

exports.UserLogin = UserLogin;
exports.UserLogins = UserLogins;

Bookshelf.Initialize({
    client: 'postgres',
    connection: {
        debug    : 'true',
        host     : 'localhost',
        user     : 'postgres',
        password : 'geopostgres',
        database : 'GeoLogin_Test_local',
        port : '5432',
        charset  : 'utf8'
    }
});
