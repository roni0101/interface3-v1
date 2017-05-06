

var app = (function() {
	
	var $doc = $(document),
		$win = $(window),

		$wdw = $(".wdw"),

		$nav = $('.navbar'),
		$navUL = $nav.find('ul'),
		$navAnchors = $navUL.find('a');



	function _hideShowNav(){	
		if( window.innerWidth < 901){
			$navUL.toggle('blind', 300);
		}
	}


	// To use this function
	// add class btn-switch to an anchor 
	// add attr data-wdw="name_of_window"
	// Or just call the function width the wdw name as a string
	// switchWindow(window_to_switch)

	function switchWindow(argument) {

		var wdwName = "";

		if( typeof argument === 'string' ){
			wdwName = argument;
		}else{
			argument.preventDefault();
			wdwName = $(argument.target).attr('data-wdw');
		}

		var $activeNavAnchor = $navUL.find('.active');

		$activeNavAnchor.removeClass('active');

		$newActiveAnchor = $navUL.find('a[data-wdw= ' + wdwName + ']');
		$newActiveAnchor.addClass('active');

		var  windowToShow = "#wdw-" + wdwName;
		$wdw.hide();
		$(windowToShow).show();
	}


	// Event listeners
	$doc.on('click', '.btn-switch', switchWindow);
	$doc.on('click', $navAnchors, _hideShowNav);
	$win.on('resize', function () {
		if( window.innerWidth > 900){
			$navUL.show();
		}
	})




	return {
			switchWindow:switchWindow
	}



})();







