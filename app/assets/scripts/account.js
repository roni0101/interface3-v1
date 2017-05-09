var Account = (function () {
	

	// Email and Password from the register-form
	var email = document.getElementById('email');
	var password = document.getElementById('password');

	// storing input from register-form
	function store() {
	    localStorage.setItem('email', email.value);
	    localStorage.setItem('password', password.value);
	}

	// check if stored data from register-form is equal to entered data in the  login-form
	function check() 
	{

	    // stored data from the register-form
	    var storedEmail = localStorage.getItem('email');
	    var storedPassword = localStorage.getItem('password');

	    // entered data from the login-form
	    var userEmail = document.getElementById('email');
	    var userPassword = document.getElementById('password');

	    // check if stored data from register-form is equal to data from login form
	    if(userEmail.value !== storedEmail || userPassword.value !== storedPassword) 
		{
	        alert('ERROR');
	    }else 
		{
	        alert('You are loged in.');
	    }
	}


})();