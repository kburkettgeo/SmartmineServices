var Q = require('q');
var geoLoginModel = require('./../model/geoLoginModel.js');
var geoLoginFactory = require('./../factory/geoLoginFactory.js');
var geoLoginPasswordHasher = require('./../utilities/geoLoginPasswordHasher.js');

exports.loginUser = function(options){
    var d = Q.defer();

    var userLogins = new geoLoginModel.UserLogins();

    var blah = function(userLogins){
        if (userLogins.models.length === 1) {
            var userLogin = userLogins.models[0];
            var retval = geoLoginFactory.buildNewLoginStatusModel(userLogin.get('login'))
            console.log('found user: ' + userLogin.get('login'));
            geoLoginPasswordHasher.ValidatePassword({
                password: options.password,
                goodHash: userLogin.get('hashed_password')
            })
                .then(function(result) {
                    d.resolve(result);
                }, function(err){
                    d.reject(err);
                });
        } else {
            console.log('no dice');
        }

    };

    Q.allSettled(userLogins.query('where', 'login', '=', options.userName).fetch())
        .then();

//    new geoLoginModel.UserLogins({'login': userName})
//        .fetch({require: true,
//        error: function(model, response, options){
//            console.log(response);
//        }})
//        .then(function(dbUserLogin) {
//            console.log('got it');
//            d.resolve(dbUserLogin.get('login'));
//        });


    //var markers = new bookshelfQuery.Markers();
//
//Q.allSettled(
//        markers.query('where', 'id', '<', 8165)
//            .fetch())
//    .then(convertAllMarkers)
//    .then(allDone)
//    .done();

    return d.promise;
};

