

var app = (function() {
	
	// Cache DOM
	var $doc = $(document);
	var $win = $(window);
	var $wdw = $(".wdw");

	var	$nav = $('.navbar');
	var $navUL = $nav.find('ul');
	var	$navAnchors = $navUL.find('li>a');


    // Initialize
    var datefield = document.createElement("input");
    datefield.setAttribute("type", "date");


    // Private functions
	function _hideShowNav(){	
		if( window.innerWidth < 901){
			$navUL.toggle('blind', 300);
		}
	}
	function _onWinResize() {
		if( window.innerWidth > 900){
			$navUL.show();
		}
	}
	function _stopFormSubmit(e) {
		e.preventDefault();
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

	//if browser doesn't support input type="date"
	// initialize date picker widget
	function addDatePicker(){
		
		if (datefield.type != "date"){ 

			$("#from").datepicker();
	      	$("#to").datepicker();
	
		}
	}
	
	

	// Event listeners
	$doc.on('click', '.btn-switch', switchWindow);
	$doc.on('click', '.navbar ul a', _hideShowNav);
	$doc.on('click', '.navbar .hide-nav i', _hideShowNav);
	$doc.on('click', 'form button', _stopFormSubmit);
	$doc.on('click', '#from', addDatePicker);
	$doc.on('click', '#to', addDatePicker);
	
	
	$win.on('resize', _onWinResize);




	return {
			switchWindow:switchWindow
	}

	

})();



	

