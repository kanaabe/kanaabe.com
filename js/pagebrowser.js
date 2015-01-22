$(function(){
	var includeDiv = $("#pages");
		$(window).on('hashchange', function() {
	    var href = location.hash.slice(1) +".html";
	    if(href.length > 5){
	    	includeDiv.load('../include/' + href);
	    }
		});
});

