var express = require('express');
var jqtpl = require('jqtpl');

var app = express.createServer();

app.configure(function(){
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);
    
    app.set('view engine', 'html');
    app.register('.html', require('jqtpl').express);
    //app.set('views', __dirname + '/views');
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

app.get('/', function(req, res){
    res.render('index', { layout: false } );
});


// Only listen on node server.js
if (!module.parent) {
    app.listen(3000);
    console.log("Express server listening on port %d", app.address().port);
}