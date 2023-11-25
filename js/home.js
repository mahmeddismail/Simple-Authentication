var inpMail = document.getElementById("inpMail")
var inpPassword = document.getElementById("inpPassword")
var inpUserSignUp = document.getElementById("inpUserSignUp")
var inpMailSignUp = document.getElementById("inpMailSignUp")
var inpPasswordSignUp = document.getElementById("inpPasswordSignUp")
var Req = document.getElementById("Req")
var Reqs = document.getElementById("Reqs")


var userContainer;
if (localStorage.getItem('users') != null) {
    userContainer = JSON.parse(localStorage.getItem('users'))
}
else {
    userContainer = [];
}
function SignUp() {
    if (EmptySignUp(true)) {
        if (RegexValidationUser(true)&&RegexValidationMail(true) &&RegexValidationPassword(true)) {
            var users = {
                name: inpUserSignUp.value,
                mail: inpMailSignUp.value,
                password: inpPasswordSignUp.value,
            }

            // if (EmailExists() == false && userContainer.length != 0) {
            //     validEmailExists();
            // }
            // else {
                userContainer.push(users)
                localStorage.setItem("users", JSON.stringify(userContainer))
                successSignUp();
                openCompiler();
            // }
        }
        else {
            return false;
        }


    }
    else {
        requirementSignUp();
    }
    EmailExists()

}
// if (userContainer.length == 0) {
//     userContainer.push(users)
//     localStorage.setItem('users', JSON.stringify(userContainer))
//     Req.classList.replace('text-danger', 'text-success')
//     document.getElementById("Req").innerHTML = `Success`;
//     // openCompiler();
// }

function EmailExists() {

    for (var i = 0; i < userContainer.length; i++) {
        if (userContainer[i].mail.toLowerCase() == inpMailSignUp.value.toLowerCase()) {
            console.log("Exist");
            return false;
        }
    }
}



function EmptySignUp() {
    if ((inpUserSignUp.value == "" && inpMailSignUp.value == "" && inpPasswordSignUp.value == "")) {

        return false;
    }
    else {
        return true;
    }
}


function RegexValidationUser() {

    if (RegexSignUpUser(true)) {
        successSignUp();
        return true;

    }
    else {
        validDataSignUpUser();
        return false

    }
}

function RegexValidationMail() {

    if (RegexSignUpMail(true)) {
        successSignUp();
        return true;

    }
    else {
        validDataSignUpMail();
        return false

    }
}


function RegexValidationPassword() {

    if (RegexSignUpPassword(true)) {
        successSignUp();
        return true;

    }
    else {
        validDataSignUpPass();
        return false

    }
}


var regexUserName = /^[A-Z][a-z]{3,20}$/
var regexEmail = /^.{0,}(@yahoo|@gmail|@hotmail)\.com$/
var regexPass = /^\w{8,}$/

function RegexSignUpUser() {
    if (regexUserName.test(inpUserSignUp.value) == true) {
        successSignUp();
        return true;

    }
    else {
        return false;
    }

}


function RegexSignUpMail() {
    if (regexEmail.test(inpMailSignUp.value) == true) {
        successSignUp();
        return true;

    }
    else {
        return false;
    }

}


function RegexSignUpPassword() {
    if (regexPass.test(inpPasswordSignUp.value) == true) {
        successSignUp();
        return true;

    }
    else {
        return false;
    }

}


function openCompiler() //ask about this
{
    location.replace("../index.html")

}


// **********Sign IN

function logIn() {
    if (EmptyLogIn(true)) {


        if (existloginUser(true)) {
            if (existloginPassword(true)) {
                location.replace("Html/home.html");
            }

            else {
                vaildDataLogInPassword();
            }
        }

        else {
            vaildDataLogInMail();

        }
    }

    else {
        requirementLogIn();
    }
}


function existloginUser() { //AGAIN
    for (let i = 0; i < userContainer.length; i++) {
        if (userContainer[i].mail.toLowerCase() == inpMail.value.toLowerCase()) {
            var name = userContainer[i].name;
            localStorage.setItem("home", JSON.stringify(name));
            return true;
        }
    }
}


function existloginPassword() { //AGAIN
    for (let i = 0; i < userContainer.length; i++) {
        if (userContainer[i].password == inpPassword.value) {
            return true;
        }
    }
}


function welcome() {

    document.getElementById("welcome").innerHTML = 'Welcome' + '   ' + JSON.parse(localStorage.home)

}



function EmptyLogIn() {
    if ((inpMail.value == "" && inpPassword.value == "")) {

        return false;
    }
    else {
        return true;
    }
}

// ************* MSGS*****************//
function requirementSignUp() {

    Req.innerHTML = `<span class="text-danger">All fields are required</span>`
}

function requirementLogIn() {

    Reqs.innerHTML = `<span class="text-danger">All fields are required</span>`
}

function vaildDataLogInMail() {
    Reqs.innerHTML = `<span class="text-danger">The email that you've entered is incorrect <br> (Please SIgn up if you don't have one)</span>`

}

function vaildDataLogInPassword() {
    Reqs.innerHTML = `<span class="text-danger">The password that you've entered is incorrect</span>`

}


function successSignUp() {

    Req.innerHTML = `<span class="text-success">Success</span>`
}

function validDataSignUpUser() {

    Req.innerHTML = `<span class="text-danger">Please Enter a Valid UserName <br>(That Starts with a Capital Letter and doesn't contain any spaces)</span>`
}
// 
function validDataSignUpMail() {

    Req.innerHTML = `<span class="text-danger">Please Enter a valid Email</span>`
}

function validDataSignUpPass() {

    Req.innerHTML = `<span class="text-danger">Please Enter a valid Password <br> (Your password must be at least 8 characters long). Please try another </span>`
}
// 755

function validEmailExists() {

    Req.innerHTML = `<span class="text-danger">the email already exists</span>`
}



