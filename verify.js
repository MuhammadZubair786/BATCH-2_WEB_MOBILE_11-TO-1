

var verfiycode = document.getElementById("verfiycode")//btn

verfiycode.addEventListener("click",function(){
    var verification_Id = localStorage.getItem("verfiy_id")
    var code1 = document.getElementById("code").value
    console.log(code1)
    const credential = firebase.auth.PhoneAuthProvider.credential(verification_Id, code1);

    firebase.auth().signInWithCredential(credential)
    .then((res)=>{
        console.log(res)
    })
    .catch((e)=>{
        console.log(e)
    })
})