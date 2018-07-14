//Dependencies
const express = require('express'),
      router = express.Router(),
      db = require("../models")


router.get('/saved', function(req, res){
    db.Article
        .find({})
        .exec().then(function(data){
        res.render('saved', {articles: data})
    })
})