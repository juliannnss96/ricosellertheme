$(document).ready(function() {
	/*Responsive video home, rompe a 678px*/
	var videoSrcMobile = $('#video-home').attr('data-mobile');
	var videoSrcDesktop = $('#video-home').attr('data-desktop');
	var imgSrcMobile = $('#img-home').attr('data-mobile');
	var imgSrcDesktop = $('#img-home').attr('data-desktop');

	if (window.innerWidth > 678){
       $("#video-home").attr("src",videoSrcDesktop);
       $("#img-home").attr("src",imgSrcDesktop);
    }else{
       $("#img-home").attr("src",imgSrcMobile);
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

	/* Bloque flash home */
	$("#flash-home").on("change", "input[name='categoria_flash']", function () {
		$('#flash-home .flash-home-cont').removeClass('visible');
		$('#flash-home .'+$(this).val()).addClass('visible');
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

	/*img métodos de pago product*/
	var link_img = $('.product .product__title').attr('data-img-met');
	$('#ProductAccordion-collapsible-row-3-template--18978849489140__main').html('<img src="'+link_img+'">').children('img').css('border', '0');
	$('#ProductAccordion-collapsible-row-3-template--18638285603068__main').html('<img src="'+link_img+'">').children('img').css('border', '0');	

	/*Modal guia de talles single product*/
	$(document).on('click', '.open-guia-talles-variantes', function() {
		$('.modal-guia-de-talles').addClass('abierto');
	});

	$('.modal-guia-de-talles .modal .cerrar').click(function() {
		$('.modal-guia-de-talles').removeClass('abierto');
	});

	$('.modal-guia-de-talles').on('click', function(e) {
	  if (e.target !== this)
	    return;
	 	$('.modal-guia-de-talles').removeClass('abierto');
	});

	/*Menu mobile*/
	$('.hamburger-mobile').click(function() {
		$('.menu-mobile').addClass('active');
	});

	$('.menu-mobile .contenedor .cerrar').click(function() {
		$('.menu-mobile').removeClass('active');
	});

	$('.menu-mobile').on('click', function(e) {
	  if (e.target !== this)
	    return;
	 	$('.menu-mobile').removeClass('active');
	});

	/*Modal redes home*/
	$(document).on('click', '.open-iframe-redes', function(e) {
		e.preventDefault();
		var iframe = $(this).attr('data-iframe');
		$('.modal-iframe-redes .modal .content').html('<iframe src="https://www.instagram.com/p/'+iframe+'/embed/" scrolling="no" allowtransparency="true" allowfullscreen="true" frameborder="0">Iframe incompatible</iframe>');
		$('.modal-iframe-redes').addClass('abierto');
	});

	$('.modal-iframe-redes .modal .cerrar').click(function() {
		$('.modal-iframe-redes .modal .content').html('');
		$('.modal-iframe-redes').removeClass('abierto');
	});

	$('.modal-iframe-redes').on('click', function(e) {
	  if (e.target !== this)
	    return;
	 	$('.modal-iframe-redes .modal .content').html('');
	 	$('.modal-iframe-redes').removeClass('abierto');
	});

	/*Modal default*/
	$(document).on('click', '.open-modal', function() {
		var modal_class = $(this).attr('data-modal');
		$('.'+modal_class).addClass('abierto');
	});

	$('.modal-default .modal .cerrar').click(function() {
		var modal_class = $(this).attr('data-modal');
		$('.'+modal_class).removeClass('abierto');
	});

	$('.modal-default').on('click', function(e) {
	  if (e.target !== this)
	    return;
	 	$('.modal-default').removeClass('abierto');
	});
});