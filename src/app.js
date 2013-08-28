var port = process.env.PORT || 1337;

var restify = require('restify');
var geoLoginController = require('./controller/geoLoginController.js');

var server = restify.createServer();
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.jsonp());
server.use(restify.CORS());
server.use(restify.fullResponse());

server.post('/login', geoLoginController.login);

server.listen(port, function() {
    console.log('%s listening at %s', server.name, server.url);
    console.log('Version: ' + process.version);
});
