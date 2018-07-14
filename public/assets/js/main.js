// click events

$("#scrape-new").on("click", function(){
    console.log("scrape")
    scrapeNew()
})

$("#clear-scrape").on("click", function(){
    console.log("clear")
    clearArticles()
})

$("").on("click", function(){
    console.log("save")
    saveArticle()
})

$("").on("click", function(){
    console.log("unsave")
    unsaveArticle()
})

$("").on("click", function(){
    console.log("add note")
    addNote()
})

$("").on("click", function(){
    console.log("remove note")
    removeNote()
})


function scrapeNew(){
    $.get("/scrape", function(response){
        console.log(response)
        location.reload()
    })
}

function clearArticles(){
    $.get("/clear", function(response){
        console.log(response)
        location.reload()
    })
}

function saveArticle(){
    $.get("/saved", function(response){
        console.log(response)
        location.reload()
    })
}

function unsaveArticle(){
    $.get("/unsaved", function(response){
        console.log(response)
        location.reload()
    })
}

function addNote(){
    $.get("/note", function(response){
        console.log(response)
        location.reload()
    })
}

function removeNote(){
    $.get("/remove_note", function(response){
        console.log(response)
        location.reload()
    })
}
