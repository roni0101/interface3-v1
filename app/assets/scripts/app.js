

var app = (function() {
	

	

	var windows = $(".wdw");


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
		var  windowToShow = "#wdw-" + wdwName;
		windows.hide();
		$(windowToShow).show();
	}

	return {
			switchWindow:switchWindow
	}

})();




// Event listeners

$(document).on('click', '.btn-switch', function function_name(argument) {
	console.log(argument);
});


