var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var messages = require('./routes/tasks');
var app = express();

var port = 5000;

// View Engine

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

// static folder

app.use(express.static(path.join(__dirname,'client')));

// Body Parser MW

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Router

app.use('/',index);
app.use('/api',messages);

app.listen(port,function(){
    console.log('server started on port'+ port);
});
