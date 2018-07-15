//dependencies
const express = require('express'),
      mongoose = require('mongoose'),
      exphbs = require('express-handlebars'),
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      path = require('path'),
      favicon = require('serve-favicon'),
      PORT = process.env.PORT || 8080;


//initializing the app
const app = express();

//setting up the database
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/heroku_kq5rlk9b'
  mongoose
  .connect(MONGODB_URI)
  .catch((error) => {
    assert.isNotOk(error,'Promise error');
    done();
  });

//setting up favicon middleware
app.use(favicon(path.join(__dirname, 'public', 'assets/img/favicon.ico')));

//setting up Morgan middleware
app.use(logger('dev'));

//setting up body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//setting up handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//setting up the static directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/articles',express.static(path.join(__dirname, 'public')));
app.use('/notes',express.static(path.join(__dirname, 'public')));


//setting up routes
const index = require('./routes/index'),
      articles = require('./routes/articles'),
      notes = require('./routes/notes'),
      scrape = require('./routes/scrape')
      clear = require('./routes/clear');

app.use('/', index);
app.use('/articles', articles);
app.use('/notes', notes);
app.use('/scrape', scrape);
app.use('/clear', clear);

app.listen(PORT, function(){
  console.log("Server listening on https://localhost:" + PORT)
});
