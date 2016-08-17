$(function(){
	var includeDiv = $("#pages");
  var loadPage = function(){
    var href = location.hash.slice(1) +".html";
    if(href.length > 5){
      includeDiv.load('../include/' + href, function(){
        var $grid = $('.grid').packery({
          itemSelector: '.grid-item',
          gutter: 20
        });
        $grid.imagesLoaded().progress(function(){
          $grid.packery()
        })
      });
    }
  }
  loadPage()
  $(window).on('hashchange', function() {
    loadPage()
  });

});

