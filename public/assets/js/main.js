// click events
$("#scrape-new").on("click", () => {
  console.log("scrape")
  scrapeNew()
})

$("#clear-scrape").on("click", () => {
  console.log("clear")
  clearArticles()
})

$("").on("click", () => {
  console.log("save")
  saveArticle()
})

$("").on("click", () => {
  console.log("unsave")
  unsaveArticle()
})

$("").on("click", () => {
  console.log("add note")
  addNote()
})

$("").on("click", () => {
  console.log("remove note")
  removeNote()
})


scrapeNew = () => {
  $.get("/scrape", (response) => {
      console.log(response)
      location.reload()
  })
}

clearArticles = () => {
  $.get("/clear", (response) => {
      console.log(response)
      location.reload()
  })
}

saveArticle = (e) => {
  let articleId = $(this).data('id')
    $.ajax({
      url: '/articles/save/'+articleId,
      type: 'GET',
      success: function (response) {
        window.location.href = '/'
      },
      error: function (error) {
        showErrorModal(error)
      }
  })
}

unsaveArticle = () => {
  $.get("/unsaved", (response) => {
      console.log(response)
      location.reload()
  })
}

addNote = () => {
  $.get("/note", (response) => {
      console.log(response)
      location.reload()
  })
}

removeNote = () => {
  $.get("/remove_note", (response) => {
    e.preventDefault()
    let id = $(this).data('id')
    $.ajax({
      url: '/articles/deleteArticle/'+id,
      type: 'DELETE',
      success: function (response) {
        window.location.href = '/articles/viewSaved'
      },
      error: function (error) {
        showErrorModal(error)
      }
    })
  })
}






 

  //click event to delete an article from savedArticles
  $('.deleteArticle').on('click', function (e){

  })//end of .deleteArticle click event




