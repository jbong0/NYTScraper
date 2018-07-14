//Dependencies
const express = require('express'),
      router = express.Router(),
      db = require("../models")

//get route 
router.get('/', function(req,res){
  db.Article
    .find({})
    .exec()
    .then(function(data){
      res.render('index', {articles: data})
    })
  })

// get route to all
router.get('/all', function(req, res){
  db.Article
    .find({})
    .exec()
    .then(function(doc){
      res.send(doc)
  })
})
module.exports = router
