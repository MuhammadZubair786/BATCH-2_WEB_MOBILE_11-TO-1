var email = document.getElementById("email")
var password = document.getElementById("password")
var name1  = document.getElementById("name")
var signup  = document.getElementById("signup")
var signin  = document.getElementById("signin")

var gsign = document.getElementById("gsign")
var fsign = document.getElementById("fsign")

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

// var gsignin= document.getElementById("gsignin")

// gsignin.addEventListener("click",function(){
//     var provider = new firebase.auth.GoogleAuthProvider()

//     firebase.auth().signInWithPopup(provider)
//     .then((res)=>{
//         console.log(res.user)
//         console.log(res.user.displayName)
//         console.log(res.user.photoURL)
//         console.log(res.user.uid)

//         firebase.database().ref("Users").child(res.user.uid).once("value",async function(snap){
//             console.log(snap.toJSON())
//             if(snap.toJSON()==null){
//                 await  firebase.database().ref("Users").child(res.user.uid).set({
//                 name:res.user.displayName,
//                 email:res.user.email,
//                 image:res.user.photoURL,
//                 uid  : res.user.uid
//                 })
//             }
//             else{
//                 console.log("already add ")
//             }
//         })

//     })
//     .catch((E)=>{
//         console.log(E)
//     })
// })


// link=>app
// delete => category 

var btn = document.getElementById("btn")

btn.addEventListener("click",async function(){
    // var provider = new firebase.auth.GoogleAuthProvider()
    // firebase.auth().signInWithPopup(provider)
    // .then((res)=>{
        var db = firebase.firestore()
    //     db.collection("Users").doc(res.user.uid).set({
    //         name:res.user.displayName,
    //             email:res.user.email,
    //             image:res.user.photoURL,
    //             uid  : res.user.uid

    //     })
    // })
    // .catch(( e)=>{

    // })
    // var docRef = db.collection("Users").doc("C91MXNWN5sbotYB03aI7ngHfZvt1");
    // docRef.once().then((doc) => {
    //     if (doc.exists) {
    //         console.log("Document data:", doc.data());
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // }).catch((error) => {
    //     console.log("Error getting document:", error);
    // });

    // const snapshot = await firebase.firestore().collection('Users').get()
    // console.log(snapshot)
    // snapshot.forEach(doc => {
    //     // collection[doc.id] = doc.data();
    //     console.log(doc.data())
    // });

    var data1 = await firebase.firestore().collection("Users").get()
    console.log(data1.data())
    data1.forEach(v=>{
        console.log(v.data())
    })

    
    
})


