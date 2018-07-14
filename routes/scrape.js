//Dependencies
const express = require('express'),
      router = express.Router()


// scrape get route
router.get('/scrape', function(req, res){
    request("https://www.nytimes.com/", function(err, response, html){
        const $ = cheerio.load(html)
        let newArticleArr = []

        $('.story-heading').each(function(){
            let storyUrl= $(this).children("a").attr("href"),
                headline= $(this).children("a").text(),
                summary = $(this).siblings("p").text(),
                imgUrl  = $(this).children("img").attr("src"),
                byLine  = $(this).siblings("p").text()

                if (storyUrl && headline && summary && imgUrl && byLine){
                    array.push({
                            headline: headline, 
                            storyUrl: storyUrl, 
                            summary: summary, 
                            imgUrl: imgUrl, 
                            byLine: byLine })

                    let article = new Article({
                            headline: headline, 
                            storyUrl: storyUrl, 
                            summary: summary, 
                            imgUrl: imgUrl, 
                            byLine: byLine })

                        article.save()
                }
        })
        res.send(newArticleArr)
    })
})

module.exports = router
