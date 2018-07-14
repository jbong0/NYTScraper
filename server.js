//dependencies
const express = require('express'),
      mongoose = require('mongoose'),
      exphbs = require('express-handlebars'),
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      path = require('path'),
      PORT = process.env.PORT || 3000,
      $ = require("jquery")

//initializing the app
const app = express()

// installize MongoDB
mongoose
    .connect('mongodb://newuser123:newuser123@ds235411.mlab.com:35411/heroku_h64kslnk', {useNewUrlParser: true})
    .then( result => {
        console.log('Connected to database');
      })
      .catch(err => console.log('There was an error with your connection:', err));

//setting up Morgan middleware
app.use(logger('dev'));

//setting up body parser middlewar
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//setting up handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//setting up the static directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/articles',express.static(path.join(__dirname, 'public')));
app.use('/notes',express.static(path.join(__dirname, 'public')));


//setting up routes
const index = require('./routes/index')
//       articles = require('./routes/articles'),
//       notes = require('./routes/notes'),
    //   scrape = require('./routes/scrape')
//       clear = require('./routes/clear');

app.use('/', index);
// app.use('/articles', articles);
// app.use('/notes', notes);
// app.use('/scrape', scrape);
// app.use('/clear', clear);

app.listen(PORT, function(){
  console.log("Server listening on https://localhost:" + PORT)
});