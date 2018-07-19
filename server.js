//dependencies
const express = require('express'),
      mongoose = require('mongoose'),
      exphbs = require('express-handlebars'),
      bodyParser = require('body-parser'),
      path = require('path'),
      PORT = process.env.PORT || 3000


//initializing the app
const app = express()

//setting up the database
// mongoose.connect('mongodb://newuser123:newuser123@ds117701.mlab.com:17701/nyt_scraper')

//setting up body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//setting up handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//setting up the static directory
app.use(express.static(path.join(__dirname, 'public')))
app.use('/articles',express.static(path.join(__dirname, 'public')))
app.use('/notes',express.static(path.join(__dirname, 'public')))


//setting up routes
const index = require('./routes/index'),
      articles = require('./routes/articles'),
      notes = require('./routes/notes'),
      scrape = require('./routes/scrape')
      clear = require('./routes/clear')

app.use('/', index)
app.use('/articles', articles)
app.use('/notes', notes)
app.use('/scrape', scrape)
app.use('/clear', clear)

app.listen(PORT, function(){
  console.log("Server listening on https://localhost:" + PORT)
})
