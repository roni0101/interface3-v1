var Account = (function () {
	var isLogedin = false;

    var account = {};

    var $acc = $('#wdw-account');

    var $name = $acc.find('div[data-user=name] span');
    var $phone = $acc.find('div[data-user=phone] span');
    var $address = $acc.find('div[data-user=address] span');
    var $email = $acc.find('div[data-user=email] span');


    

    // Email and Password from the register-form
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    $nav = $('nav ul')

    function auth() {
        if( isLogedin ){
            $('[data-auth=member]').css('display', 'inline-block');
            $('[data-auth=non]').hide();
        }
        if( !isLogedin ){
            $('[data-auth=member]').hide();
            $('[data-auth=non]').css('display', 'inline-block');
        }
    }


    function saveFirstData() {

        var firstName = $('#first-name').val();
        var lastName = $('#first-name').val();
        var email = $('#first-name').val();
        var password = $('#first-name').val();

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

        localStorage.account = "";
        localStorage.account = result;

    }

    // check if stored data from register-form is equal to entered data in the   login-form
    function check() 
    {

        // stored data from the register-form
        if(!localStorage.account){

            alert('Must register first');
            return false;

        }
        var lsAccount = JSON.parse( localStorage.account );

        var storedEmail = lsAccount.email;
        var storedPassword = lsAccount.password;

        // entered data from the login-form
        var userEmail = document.getElementById('email');
        var userPassword = document.getElementById('password');

        // check if stored data from register-form is equal to data from login form
        if(userEmail.value !== storedEmail || userPassword.value !== storedPassword) 
        {
            alert('ERROR');
        }else 
        {
            if(localStorage.account){
                var currentAcc = JSON.parse( localStorage.account );
                $name.text( currentAcc.firstName + " " + currentAcc.lastName );
                $email.text( currentAcc.email );
                $phone.text( currentAcc.phone);
                $address.text( currentAcc.address );
            
            }
            isLogedin = true;
             App.switchWindow('account');
        }
    }


    function logOut(e) {
        e.preventDefault();
        isLogedin = false;
        App.switchWindow('home');
    }


    $(document).on('click', '.btn-logout', logOut);


    return {
        login:check,
        saveFirstData: saveFirstData,
        saveSecondData: saveSecondData,
        auth:auth
    }

})();