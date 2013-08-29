var hasher = require('./../../src/utilities/geoLoginPasswordHasher.js');
var Q = require('q');
var crypto = require('crypto');

//hasher.CreateHash({password: 'pwd'})
//    .then(function(result){
//        var d = Q.defer();
//        hasher.ValidatePassword({
//            password: 'pwd',
//            goodHash: result})
//            .then(function(result) {
//                d.resolve(result);
//            }, function(err){
//                d.reject(err);
//            });
//        return d.promise;
//    })
//    .then(function(result){
//        console.log(result);
//    }, function(err){
//        console.log(err);
//    })
//    .done();


hasher.ValidatePassword({
        password: 'pwd',
        //goodHash: '3e8.cYsGOrf9fSL6/lJJxlgx7iDZHWC5VEjggVC+qz2Bf38=.Rv38N3lDIu/9O2Rvr9Bi7S3oJNblEg2w'})
		goodHash: 'kFA3yJQnbmfsKQjUn3TxZA==.OUkHk1uEq6SUKAEhAbl7Cw==.hpIcnIYa81WQcSwW/shmYQ=='})
    .then(function(result) {
        console.log(result);
    }, function(err){
        console.log(err);
    })
    .done();

//hasher.CreateHash({password: 'pwd', salt: '3e8.QrpeVvJscm5gAIyg+QeQSM6o2Fr5Zf9M'})
//    .then(function(result){
//        var d = Q.defer();
//        hasher.ValidatePassword({
//            password: 'pwd',
//            goodHash: result})
//            .then(function(result) {
//                d.resolve(result);
//            }, function(err){
//                d.reject(err);
//            });
//        return d.promise;
//    })
//    .then(function(result){
//        console.log(result);
//    }, function(err){
//        console.log(err);
//    })
//    .done();

//var password = 'pwd';
//var salt = 'QrpeVvJscm5gAIyg+QeQSM6o2Fr5Zf9M';
//var iterations = 1000;
//var hashBytes = 24;
//
//crypto.pbkdf2( password, salt, iterations, hashBytes, function( err, derivedKey ) {
//    var base64;
//    if ( !err ){
//        base64 = binaryToBase64( derivedKey );
//    }
//    console.log('password: ' + password);
//    console.log('salt: ' + salt);
//    console.log('iterations: ' + iterations);
//    console.log('hashBytes: ' + hashBytes);
//
//    console.log('hashResult: ' + base64);
//    console.log('derivedKey: ' + derivedKey);
//});
//
