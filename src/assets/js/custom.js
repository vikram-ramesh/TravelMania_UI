/**	
	* Template Name: Outing
	* Version: 1.0	
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS
	
	1. SCROLL DOWN
	2. TRAVELERS TESTIMONIALS (SLICK SLIDER)
	3. SCROLL TOP BUTTON
	4. CLIENTS SLIDEER ( SLICK SLIDER )
	
	
**/



(function( $ ){




	/* ----------------------------------------------------------- */
	/*  1. SCROLL DOWN
	/* ----------------------------------------------------------- */


	$(".mu-scrolldown").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
     });
	    


   	/* ----------------------------------------------------------- */
	/*  2. TRAVELERS TESTIMONIALS (SLICK SLIDER)
	/* ----------------------------------------------------------- */

		$('.mu-testimonial-slide').slick({
			arrows: false,
			dots: true,
			infinite: true,
			speed: 500,
			autoplay: true,
			cssEase: 'linear'
		});



	
	/* ----------------------------------------------------------- */
  	/*  3. SCROLL TOP BUTTON
  	/* ----------------------------------------------------------- */

	  //Check to see if the window is top if not then display button

	    jQuery(window).scroll(function(){
	      if (jQuery(this).scrollTop() > 300) {
	        jQuery('.scrollToTop').fadeIn();
	      } else {
	        jQuery('.scrollToTop').fadeOut();
	      }
	    });
	     
	    //Click event to scroll to top

	    jQuery('.scrollToTop').click(function(){
	      jQuery('html, body').animate({scrollTop : 0},800);
	      return false;
	    });
	  

		
	/* ----------------------------------------------------------- */
	/*  4. CLIENTS SLIDEER ( SLICK SLIDER )
	/* ----------------------------------------------------------- */

		$('.mu-clients-slider').slick({
		  slidesToShow: 5,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: true,
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: true,
		        slidesToShow: 2
		      }
		    }
		  ]
		});

	
	
})( jQuery );



  
	