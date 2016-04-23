var $nav = $("nav");
var $top = $(".top_info");
$(window).scroll(function() {
	if( $(this).scrollTop() > 800) {
		$nav.addClass("nav_scrolled");
		$top.addClass("disappear");
	} else {
		$nav.removeClass("nav_scrolled");
		$top.removeClass("disappear");
	}
});