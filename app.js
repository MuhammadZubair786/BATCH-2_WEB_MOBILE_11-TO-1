var email = document.getElementById("email")
var password = document.getElementById("password")
var name1  = document.getElementById("name")
var signup  = document.getElementById("signup")
var signin  = document.getElementById("signin")

signup.addEventListener("click",function(){
    firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
    .then((user)=>{
        console.log(user.user.uid)
        var obj = {
            name : name1.value,
            password:password.value,
            email:email.value,
            uid:user.user.uid
        }
        //craete db
        // Push,set
        firebase.database().ref("users/").child(user.user.uid).set(obj)
    })
    .catch((e)=>{
        console.log(e)
    })
})

signin.addEventListener("click",function(){
    firebase.auth().signInWithEmailAndPassword(email.value,password.value)
    .then((user1)=>{
        console.log(user1.user.uid)

        // setitem(key,value)

        localStorage.setItem("UID",user1.user.uid)//set current user 

        // window.location.href="home.html" //move one page to other 

        // replace 
        window.location.replace("home.html")




    })
    .catch((e)=>{
        console.log(e)
    })
})