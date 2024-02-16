document.getElementById("inscrire").addEventListener('submit', (fct) => {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var birthdate = document.getElementById("bday").value;
    var username = document.getElementById("username").value;
    var userpwd = document.getElementById("password").value;
    var useremail = document.getElementById("email").value;
    passwordRegexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    emailRegexp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    var error =  false;
    

    if (birthdate) {
        datePattern = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
        if (datePattern.test(birthdate)){
            var parts = birthdatey.split("/");
            var dt = new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));
            if(Object.prototype.toString.call(dt) === "[object Date]") {
                if (isNaN(dt.getTime())) { 
                    error=true;
                    alert("Birthday-date is not correct");
                }
            }
        }
        else {
            error=true;
            alert("Birthday-date is not correct");
        }        
    }
    else if (username.length < 6 ) {
        error=true;
        alert("Username should contain at least 6 characters!");
    }
    else if ( !passwordRegexp.test(userpwd)) {
        error=true;
        alert("Please check your password, choose a strong one!");
    }
    
    else if ( !useremail.match(emailRegexp)) {
        error=true;
        alert("Email format is not correct!");
    }
    if( error ) {
        fct.preventDefault();
    }

});