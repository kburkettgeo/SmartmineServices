var Q = require('q');
var easyPbkdf2  = require('easy-pbkdf2')();
easyPbkdf2.DEFAULT_HASH_ITERATIONS = 1000;
easyPbkdf2.SALT_SIZE = 32;

var PBKDF2 = function(password, salt) {
    var d = Q.defer();
    easyPbkdf2.secureHash(password, salt, function(err, result, salt){
            d.resolve(result);
        });
    return d.promise;
};

exports.CreateHash = function(options) {
    var d = Q.defer();
    salt = options.salt ? options.salt : easyPbkdf2.generateSalt();
    PBKDF2(options.password, salt)
        .then( function(result) {
            d.resolve(salt + '.' + result);
        });
    return d.promise;
};

exports.ValidatePassword = function(options) {
    var d = Q.defer();

    var goodHash = options.goodHash.toLowerCase();
    var split = goodHash.split('.');
    var salt = split[0] + '.' + split[1];
    console.log('salt: ' + salt);

    exports.CreateHash({
        password: options.password,
        salt: salt
        })
        .then(function(testHash){
            console.log('goodHash: ' + goodHash);
            console.log('testHash: ' + testHash);
            if (testHash === goodHash){
                d.resolve('validated');
            }
            else{
                d.reject('invalid password');
            }
        });


    return d.promise;
};


