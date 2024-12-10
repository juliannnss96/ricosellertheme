$(document).ready(function() {
	$('.listado-tipos-jugador li').click(function() {
		$('.listado-tipos-jugador li').removeClass('selected');
		$(this).addClass('selected');
	});
});