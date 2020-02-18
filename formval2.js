function register() {
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;
    var cpass = document.getElementById('cpass').value;
    var gender = document.getElementById('gender').value;
    var email = document.getElementById('email').value;

    if (login == "" || password == "" || cpass == "") {
        document.getElementById("notif1").innerHTML= 'Please Complete Your Data.';
    }
    else if (gender == "none") {
        document.getElementById("notif2").innerHTML= 'Please Select a Gender.';
    }
    else if(email == "")
    {
        document.getElementById("notif2").innerHTML= 'Please Enter Your Email.';
    }
    else if(password != "" && cpass != "" && password == cpass)
    {
        document.getElementById("notif1").innerHTML= 'Password Match';
    }
    else if(password == "" || cpass == "" || password != cpass)
    {
        document.getElementById("notif1").innerHTML= 'Password Dont Match';
    }
    else if(password != "")
    {
    if(password.length < 8)
    {
        document.getElementById("passmeter").innerHTML= 'Weak';
    }
    else if(password.length >= 8)
    {
        document.getElementById("passmeter").innerHTML= 'Strong';
    }
    }
    else {
        document.getElementById("notif2").innerHTML= 'Your Data has been Registered.';
    }
}