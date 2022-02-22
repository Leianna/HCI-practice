//check email format
function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

//when submit
function submit() {
    //check if condition are all made
    var checkUser=false;
    var checkEmail=false;
    var checkPass=false;

    //username error
    var x = document.forms["accountInfo"]["fuser"].value;
    if (x == "") {
        document.getElementById("usernameError").innerHTML = "**ERROR: Name must be filled out**";
        document.getElementById("usernameError").style.color = "#e54b4b";
        checkUser=false;
    }else if(x.length<5 || x.length>20){
        document.getElementById("usernameError").innerHTML = "**ERROR: Name must  contains 5 to 20 characters**";   
        document.getElementById("usernameError").style.color = "#e54b4b";
        checkUser=false;
    }else{
        document.getElementById("usernameError").innerHTML = "VERIFIED";
        document.getElementById("usernameError").style.color = "#61bfad";
        checkUser=true;
    }

    //email error
    var y = document.forms["accountInfo"]["femail"].value;
    if (y == "") {
        document.getElementById("emailError").innerHTML = "**ERROR: Email must be filled out**";
        document.getElementById("emailError").style.color = "#e54b4b";
        checkEmail=false;
    }else if(emailIsValid(y)==false){
        document.getElementById("emailError").innerHTML = "**ERROR: Invalid email address format**";
        document.getElementById("emailError").style.color = "#e54b4b";
        checkEmail=false;
    }
    else{
        document.getElementById("emailError").innerHTML = "VERIFIED";
        document.getElementById("emailError").style.color = "#61bfad";
        checkEmail=true;
    }

    //password error
    var z = document.forms["accountInfo"]["fpass"].value;
    if (z == "") {
        document.getElementById("passwordError").innerHTML = "**ERROR: Password must be filled out**";
        document.getElementById("passwordError").style.color = "#e54b4b";
        var checkPass=false;
    }else if(z.length<10 || z.length>25){
        document.getElementById("passwordError").innerHTML = "**ERROR: Password must contains 10 to 25 characters**";
        document.getElementById("passwordError").style.color = "#e54b4b";
        var checkPass=false;
    }else{
        document.getElementById("passwordError").innerHTML = "VERIFIED";
        document.getElementById("passwordError").style.color = "#61bfad";var checkPass=true;
    }

    //condition
    if(checkEmail==true && checkPass==true && checkUser==true){
        alert(document.forms["accountInfo"]["fuser"].value+", Congratulation! You've create an account with email: \n" + document.forms["accountInfo"]["femail"].value);
    }

}