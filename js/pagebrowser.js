$(function(){
	var includeDiv = $("#pages");
		$(window).on('hashchange', function() {
	    var href = location.hash.slice(1) +".html";
	    includeDiv.load('../include/' + href);
		});
});

