//isotope
// store filter for each group
$( function() {
  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.listing--programs'
  });

  // store filter for each group
  var filters = {};

  $('#filters').on( 'click', '.btn', function() {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // combine filters
    var filterValue = '';
    for ( var prop in filters ) {
      filterValue += filters[ prop ];
    }
    // set filter for Isotope
    $container.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
});




jQuery(document).ready(function($){
	// Sticky nav
	(function($, undefined){
		"use strict";

		var $stickyBar = $(".nav--main"),
		y_pos = $stickyBar.offset().top,
		height = $stickyBar.height();

		$(document).scroll(function(){
			var scrollTop = $(this).scrollTop();
			if (scrollTop > y_pos + height){
			$stickyBar.addClass("nav--main--fixed").clearQueue().animate({ top: "0px" }, 0);
			} else if (scrollTop <= y_pos){
			$stickyBar.removeClass("nav--main--fixed").clearQueue().animate({ top: "0px" }, 0);
			}
		});

	})(jQuery, undefined);

	// Sticky nav
	(function($, undefined){
		"use strict";

		var $stickyBar = $(".sidebar"),
		y_pos = $stickyBar.offset().top;
		//height = $stickyBar.height();

		$(document).scroll(function(){
			var scrollTop = $(this).scrollTop();
			if (scrollTop > y_pos - 230 ){
			$stickyBar.addClass("sidebar--fixed");
			} else if (scrollTop <= y_pos){
			$stickyBar.removeClass("sidebar--fixed").clearQueue();
			}
		});

	})(jQuery, undefined);
			
});
