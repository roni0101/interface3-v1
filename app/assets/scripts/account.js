var Account = (function () {
	
    var account = {};


    // Email and Password from the register-form
    var email = document.getElementById('email');
    var password = document.getElementById('password');


    function saveFirstData() {

        var firstName = $('#first-name').val();
        var lastName = $('#first-name').val();
        var email = $('#first-name').val();
        var password = $('#first-name').val();


        console.log(firstName, lastName, email, password);

        account.firstName = firstName;
        account.lastName = lastName;
        account.email = email;
        account.password = password;

        App.switchWindow('register2');
    }

    function saveSecondData() {

        var companyName = $('#company-name').val();
        var address = $('#address').val();
        var city = $('#city').val();
        var postNumber = $('#post-number').val();
        var phone = $('#phone').val();
        var bphone = $('#bussines-phone').val();

        account.companyName = companyName;
        account.address = address;
        account.city = city;
        account.postNumber = postNumber;
        account.phone = phone;
        account.bphone = bphone;

        _store();
        App.switchWindow('login');
    }

    // storing input from register-form
    function _store() {

        var result = JSON.stringify(account);
        localStorage.account = result;
    }

    // check if stored data from register-form is equal to entered data in the   login-form
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



    return {
        login:check,
        saveFirstData: saveFirstData,
        saveSecondData: saveSecondData
    }

})();