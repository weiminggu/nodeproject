var express = require('express');
var app = express();

var port = 5099;
var eventRouter = require('./src/routes/eventRoutes');
var dbRouter = require('./src/routes/dbRoutes');

app.use(express.static('public'));
// app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use('/Events', eventRouter);
app.use('/db', dbRouter);

app.get('/', function(req, res){
    //    res.send('Hello from Weiming on my MacBook!');
    res.render('index', {
	list: ['first val', 'second val', 'third val'],
	nav: [{Link : 'Services', Text : 'Services'},
	      {Link : 'Portfolio', Text : 'Portfolio'},
	      {Link : 'About', Text : 'About'},
	      {Link : 'Team', Text : 'Team'},
	      {Link : 'Contact', Text : 'Contact'},
	      {Link : 'Events', Text : 'Events'}
	     ]
    });
    
});

app.get('/routing', function(req, res) {
    res.send('Hello in Routing!');
});

app.listen(port, function(err){
    console.log('Server is starting at port: ' + port);
});
