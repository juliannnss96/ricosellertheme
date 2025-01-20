$(document).ready(function() {
	/*Responsive video home, rompe a 678px*/
	var videoSrcMobile = $('#video-home').attr('data-mobile');
	var videoSrcDesktop = $('#video-home').attr('data-desktop');

	if (window.innerWidth > 678){
       $("#video-home").attr("src",videoSrcDesktop);
    }else{
       $("#video-home").attr("src",videoSrcMobile);
    }

	/*Tipos de jugador Home*/
	$('.listado-tipos-jugador li').click(function() {
		var selected = $(this).attr('data-filter');

		$('.listado-tipos-jugador li').removeClass('selected');
		$(this).addClass('selected');

		$('#tipos-jugador .cont-figure .cont-zapa').removeClass('selected');
		$('#tipos-jugador .cont-figure .figure-'+selected).addClass('selected');

		$('#tipos-jugador .button').attr('href', 'collections/'+selected);
	});

	/*FACETS, filtros*/
	$('.facet-checkbox').click(function() {
		var inputID = $(this).children('.swatch-input-wrapper').children('.swatch-input__label').attr("for");
		$('#' + inputID).click();
	});

	/*LOAD MORE en Collections*/
	$('#product-grid').bind('DOMNodeInserted DOMNodeRemoved', function() {
	  var total = $(this).children().length;

	  //cambio texto
	  $('.hasvisto-text > span').html(total);
	  $('.hasvisto progress').val(total);
	});
});