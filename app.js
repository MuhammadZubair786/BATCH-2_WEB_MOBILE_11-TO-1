var getdocode = document.getElementById("getcode")
var verifycode = document.getElementById("verifycode")

var verification_Id=""

if(getdocode!=null){

getdocode.addEventListener("click",function(){
    // window.open(heigh)
    var phone_no = document.getElementById("number1").value
    console.log(phone_no)
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'callback': function () {
           
         
        },
        'expired-callback': function () {
           
        }
    });

    var cverify = window.recaptchaVerifier;//store result 
    firebase.auth().signInWithPhoneNumber(phone_no, cverify)
        .then((confirmationResult) => {
            console.log(confirmationResult)//return vef_id=>code 
            
            //set
            verification_Id= confirmationResult.verificationId
            localStorage.setItem("verfiy_id",verification_Id)//next page =>code,v_id
          window.location.replace("new.html")
         
        })
        .catch((error) => {
            console.error(error);
        });
})
}