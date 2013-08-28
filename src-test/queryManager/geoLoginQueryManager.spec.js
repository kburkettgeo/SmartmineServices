var geoLoginQueryManager = require('./../../src/queryManager/geoLoginQueryManager.js');



geoLoginQueryManager.loginUser({
    userName: 'melvin.walters@pse.com',
    password: 'pwd'
    })
    .then(function(result){
        console.log(result);
    });