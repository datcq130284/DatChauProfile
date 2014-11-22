$(document).bind('ready', function(){

	$('.panel-heading .accordion-toggle').on("click", function (e) {
		var _this = $(this);
		$('.panel-heading .accordion-toggle').each(function(){
			if($(this).attr('href')!=$(_this).attr('href')){
				$(this).find('span').removeClass('collapsed');
				$(this).find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-rigth');
			}
		});
	
		if ($(this).find('span').hasClass('collapsed')) {
			$(this).find('span').removeClass('collapsed');
			$(this).find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-rigth');
		}
		else {
			$(this).find('span').addClass('collapsed');
			$(this).find('i').removeClass('glyphicon-chevron-rigth').addClass('glyphicon-chevron-down');
		}
	});
	
	$('.navbar-nav li').on("click", function (e) {
		var _this = $(this);
		
		$('.navbar-nav li').removeClass('active');
		$(this).addClass('active');
	});	
	
	$('.navbar-nav li').on('activate.bs.scrollspy', function () {
		console.log($(this));
	})
	/*$('#work').on('activate.bs.scrollspy', function () {
		alert("WORK");
	})
	$('#resume').on('activate.bs.scrollspy', function () {
		alert("RESUME");
	})*/
});