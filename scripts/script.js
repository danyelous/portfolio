// Portfolio project by Ponto.


var currentDiv;

var portfolio = {

    onReady: function() {

		$('.home').click(function() {
		
		if($('#framehome').css('opacity') == 0){
		
			currentDiv = giveMeCurrentDiv();
						 
			animateDivOut(currentDiv, $('#framehome'));
			
			$('#framehome').css( 'opacity', '1' );
			$('#framehome').css( 'z-index', '5' );

			setTimeout(function() {
				$('#framehome').css( 'z-index', '15' );
			}, 750);			

		}
					
		});
	
		$('.works').click(function() {
		
		if($('#frameworks').css('opacity') == 0){
		
			currentDiv = giveMeCurrentDiv();
			
			animateDivOut(currentDiv, $('#frameworks'));

			$('#frameworks').css( 'opacity', '1' ); 
			$('#frameworks').css( 'z-index', '5' );

			setTimeout(function() {
				$('#frameworks').css( 'z-index', '15' );
			}, 750);				

		}
					
		});
		
		$('.contact').click(function() {
		
		if($('#framecontact').css('opacity') == 0){
		
			currentDiv = giveMeCurrentDiv();
			
			animateDivOut(currentDiv, $('#framecontact'));

			$('#framecontact').css( 'opacity', '1' );	 
			$('#framecontact').css( 'z-index', '5' );

			setTimeout(function() {
				$('#framecontact').css( 'z-index', '15' );
			}, 750);				

		}
					
		});
		
		$('.about').click(function() {
		
		if($('#frameabout').css('opacity') == 0){
		
			currentDiv = giveMeCurrentDiv();
			
			animateDivOut(currentDiv, $('#frameabout'));

			$('#frameabout').css( 'opacity', '1' );
			$('#frameabout').css( 'z-index', '5' );

			setTimeout(function() {
				$('#frameabout').css( 'z-index', '15' );
			}, 750);				

		}
					
		});

	},
	
	};

	
	
function giveMeCurrentDiv(){

	if($('#framehome').css('opacity') == 1){
		return $('#framehome');
	}
	if($('#frameworks').css('opacity') == 1){
		return $('#frameworks');
	}
	if($('#framecontact').css('opacity') == 1){
		return $('#framecontact');
	}
 	if($('#frameabout').css('opacity') == 1){
		return $('#frameabout');
	}

}
	

function animateDivOut(divname){

	divname.css( 'z-index', '100' );

	divname.animate({  borderSpacing: 75 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('-ms-transform','rotate('+now+'deg)');
      $(this).css('-o-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:250 },'linear');
	
	divname.animate({  borderSpacing: 45 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('-ms-transform','rotate('+now+'deg)');
      $(this).css('-o-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:250 },'linear');
	
	divname.animate({
		top: '500px',
		opacity: 0,
	}, 250 );

	divname.css( 'z-index', '10' );
	
	divname.animate({  borderSpacing: 0 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('-ms-transform','rotate('+now+'deg)');
      $(this).css('-o-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:100 },'linear');
	
	divname.animate({
		top: '10px',
	}, 250 );

} 







$(document).ready(function() {

	portfolio.onReady();
	

});



