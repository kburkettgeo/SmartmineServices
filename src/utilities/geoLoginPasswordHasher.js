var Q = require('q');
var crypto = require('crypto');

var PBKDF2 = function(password, salt) {
    var d = Q.defer();

	console.log(password);
	console.log(salt);
	
	crypto.pbkdf2( password, salt, 1000, 32, function( err, derivedKey ) {
		console.log(derivedKey.length);
		var base64;
		if ( !err ){
			base64 = new Buffer( derivedKey, "binary" ).toString("base64");
		}	   
		d.resolve(base64);
	});

		return d.promise;
};

var decryptAes = function(encodedString){

};


exports.ValidatePassword = function(options) {
    var d = Q.defer();

    var goodHash = options.goodHash;
    var split = goodHash.split('.');
    var encryptedIv = split[0];
    var bufIv = new Buffer(encryptedIv, 'base64');
    var binIv = bufIv.toString('binary')
    var encryptedKey = split[1];
    var bufKey = new Buffer(encryptedKey, 'base64');
    var binKey = bufKey.toString('binary')
    var encryptedPassword = split[0];
    var bufEncryptedPassword = new Buffer(encryptedPassword, 'base64');
    var binEncryptedPassword = bufEncryptedPassword.toString('binary')
    console.log('encryptedIv: ' + encryptedIv);
    console.log('encryptedKey: ' + encryptedKey);
    console.log('encryptedPassword: ' + encryptedPassword);

    var decipher = crypto.createDecipher('aes-128-cbc', binKey, binIv);
    decipher.update(encryptedPassword, 'base64', 'utf8');
    var decryptedPassword = decipher.final('utf8');

    console.log(decryptedPassword);

    return d.promise;
};


