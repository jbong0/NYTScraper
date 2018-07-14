const express = require('express'),
      router = express.Router(),
      db = require("../models")


// Clear Function
router.get('/clear', function(req, res){
    db.Article
        .remove({})
        .exec()
        .then(function(doc){
        res.send(doc)
    })
})


module.exports = router

