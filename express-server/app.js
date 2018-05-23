var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

require('./app.cleanup');
var db = require('./app.db');

var indexRouter = require('./routes/index');
var todosRouter = require('./routes/todos');
var port = 3000;

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/todos', todosRouter);

app.listen(port, function() {
	console.log(`Listening on port ${port}...`);
	db.connect().catch((err) => {
		console.log('An error occured while connecting to database:', err);
	});
});

module.exports = app;
