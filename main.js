
$(document).ready(function() {

	// var url = location.pathname;

 //    // EXECUTE IN THE HOME PAGE ONLY

	// if("url:contains('index.html')")
	// {

		var scrollLink = $(".scroll");

		scrollLink.click(function(e){

			e.preventDefault();
			$("body,html").animate({
				scrollTop:$(this.hash).offset().top
			},1000); 
		});

		$("#more-icon").click(function(){

			$("body,html").animate({
				scrollTop:$("#about").offset().top
			},1000);
		});

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

	// OTHER FUNCTIONS

	$(".primary").click(function(){

		window.open('img/portfolio.pdf');
	});

	// $("resume-header").click(function(){

	// 	window.open('img/portfolio.pdf');
	// });

});