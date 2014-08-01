var express = require('express'),
	app = express();
	
app.set('view engine', 'ejs');
app.engine('.html', require('ejs').__express);


app.use('/', express.static(__dirname + '/'));


app.listen( process.env.PORT );