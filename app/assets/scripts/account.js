var Account = (function () {
	

    var account = {};


    // Email and Password from the register-form
    var email = document.getElementById('email');
    var password = document.getElementById('password');




    // storing input from register-form
    function store() {

        account.firstName = firstName;
        account.lastName = lastName;
        account.email = email;
        account.password = email;
        account.companyName = companyName;
        account.address = address;
        account.city = city;
        account.postNumber = postNumber;
        account.phone = phone;
        account.bphone = bphone;

        localStorage.account = account;
    }

    // check if stored data from register-form is equal to entered data in the   login-form
    function check() 
    {

        // stored data from the register-form
        var storedEmail = localStorage.getItem('email');
        var storedPassword = localStorage.getItem('password');

        // entered data from the login-form
        var userEmail = document.getElementById('userEmail');
        var userPassword = document.getElementById('userPassword');

        // check if stored data from register-form is equal to data from login form
        if(userEmail.value !== storedEmail || userPassword.value !== storedPassword) 
    	{
            alert('ERROR');
        }else 
    	{
            alert('You are loged in.');
        }
    }



    return {
        login:check,
        register:store
    }


})();