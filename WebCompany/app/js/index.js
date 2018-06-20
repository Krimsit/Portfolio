$(document).ready(function(){
	$(function() {
		$('.toggles button').click(function() {
			var get_id = this.id;
			var get_current = $('.posts .' + get_id);

			$('.post').not(get_current).hide(500);
			get_current.show(500);
		});

		$('#showall').click(function() {
			$('.post').show(500);
		});
	});

	$('.owl-carousel').owlCarousel({
		autoplay: true,
		loop: true,
		smartSpeed: 1000,
		autoplayTimeout: 2000,
		responsive: {
			0:{
				items: 3
			},
			600: {
				items: 8
			}
		}
	});
})