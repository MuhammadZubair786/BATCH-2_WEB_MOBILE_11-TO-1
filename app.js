var email = document.getElementById("email")//global
var password = document.getElementById("password")//global
var eye = document.getElementById("pchg")
var emailtext = document.getElementById("emailtxt")
var passwordtxt = document.getElementById("passwordtxt")
var passwordctxt = document.getElementById("passwordctxt")
var newtext = document.getElementById("txt")
getpass = "123"
function getdata(){
    event.preventDefault()//form 
     //local variable

     console.log(email.value) 
     if(email.value=="" && password.value =="" ){
        emailtext.className="show red"
        passwordtxt.className="show red"
        // newtext.innerText="enter email and password"
       
     }
     else if(email.value==""){
        emailtext.className="show red" 
        passwordtxt.className="hide red"
        // newtext.innerText="enter email"
     }
     else if(password.value==""){
        emailtext.className="hide"
        passwordtxt.className="show red"
        // newtext.innerText="enter password"
     }
     
    else if(password.value!=getpass){
        passwordtxt.className="hide red"
        passwordctxt.className="show red"
        eye.className="show"
     }
     else{
        passwordctxt.className="hide"
        eye.className="hide"

     }


}

function chgpassword(){
    event.preventDefault()
    if(password.type=="text"){
        password.type="password"

    }
    else{
        password.type="text"
    }
}