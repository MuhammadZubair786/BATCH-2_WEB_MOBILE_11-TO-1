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


    //login user data 
     var provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(async (data )=>{
        var data1 = await firebase.firestore().collection("Users").doc(data.user.uid).get()
        console.log(data1.data())
    })

    //all dat 
  
    // data1.forEach(v=>{
    //     console.log(v.data().email)
    // })



    //all data 
    var data1 = await firebase.firestore().collection("Users").get()
    
    data1.forEach(v=>{
        console.log(v.data())
    })


    
    
})