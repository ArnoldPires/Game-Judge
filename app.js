const gameJudge = [

]
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use(express.static('public'));

//Comment section
require( './db' );
let routes = require('./routes')
, user = require('./routes/user')
, http = require('http')
, path = require('path');

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});
app.configure('development', function(){
  app.use(express.errorHandler());
});
app.get('/', routes.index);
app.post( '/create', routes.create );
//mongoose setup
const mongoose = require('mongoose');
const url = 'mongodb+srv://Arnold:action1234@game-judge-3yhpt.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser: true})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
