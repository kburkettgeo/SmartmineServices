var Q = require("q");
var geoLoginQueryManager = require("./../queryManager/geoLoginQueryManager.js");

exports.login = function (req, res, next) {
    geoLoginQueryManager.loginUser(req.params)
        .then(function(loginStatusModel){
            // fulfilled
            console.log('success: ' + loginStatusModel.AuthenticatedUser.UserInfo.Email);
            res.send('success: ' + loginStatusModel.AuthenticatedUser.UserInfo.Email);
        },
        function(error){
            // rejected
            console.log('error: ' + error)
            res.send('error: ' + error);
        })

};


