
$(document).ready(function() {


		// Preventing the normal and starck scrolling and then implementing smooth scrolling

		var scrollLink = $(".scroll");

		scrollLink.click(function(e){

			e.preventDefault();
			$("body,html").animate({
				scrollTop:$(this.hash).offset().top
			},1000); 
		});

		// Scroll to the about section when the downward arrow is clicked on

		$("#more-icon").click(function(){

			$("body,html").animate({
				scrollTop:$("#about").offset().top
			},1000);
		});

		// Changing the active status on the header as you scroll

		$(window).scroll(function() {
		    var scrollbarLocation = $(this).scrollTop();
		    
		    scrollLink.each(function() {
		      
		      var sectionOffset = $(this.hash).offset().top - 20;
		      
		      if ( sectionOffset <= scrollbarLocation ) {
		        $(this).parent().addClass('active');
		        $(this).parent().siblings().removeClass('active');
		      }
		    })
		    
		});
	// }

	// Opens PDF at the click of a button - pdf resume

	$(".primary").click(function(){

		window.open('img/portfolio.pdf');
	});


});