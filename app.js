console.log(firebase.auth())

var email = document.getElementById("email")
var password = document.getElementById("password")
var signup = document.getElementById("signup")
var signin = document.getElementById("signin")

signup.addEventListener("click",function(){
    console.log(email.value)
    console.log(password.value)
    firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
    .then((userdata)=>{
        console.log(userdata.user.uid)
    })
    .catch((err)=>{
        // console.log(err)
        alert(err)
    })
})


signin.addEventListener("click",function(){
    console.log(email.value)
    console.log(password.value)
    firebase.auth().signInWithEmailAndPassword(email.value,password.value)
    .then((userdata)=>{
        console.log(userdata.user.uid)
    })
    .catch((err)=>{
        // console.log(err)
        alert(err)
    })
})

