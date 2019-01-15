$('#projectModal').on('show.bs.modal', function (event) {
  var clickedDiv = $(event.relatedTarget) //div that triggered the modal
  var projectNumber = clickedDiv.data('project-number')
  var title = projectsJson[projectNumber-1].title
  var modal = $(this)
  var carousel = $('#projectCarousel')
  modal.find('.modal-title').text(title)
  var imgSrc = "img/projects/p" + projectNumber + "_1.jpg"
  carousel.find('.active').children('img').attr("src", imgSrc);
  $.get("carouselTemplate.htm", function(template){
    $("#projectCarousel").html(Mustache.render(template, projectsJson[projectNumber-1]))
    $(".carousel-item").first().addClass("active")
    $("li").first().addClass("active")
  })
})