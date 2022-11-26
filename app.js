// var inp =10

// function call(){
//     var inp = prompt("enter data ")
//     if(isNaN(inp)){
//         console.log("invalid data")

//     }
//     else{
//         showname(inp)

//     } 

// }

// function showname(na){
//     if(na%2==0){
//         console.log("even")
//     }
//     else{
//         console.log("odd numb")
//     }
// }
// call()


var array = ["data", "smithyd", "ali"]
// USERNAME =>
// user name input =>
// second check =>
// space,number =>invalid
// charcodeAt
// array check =>already use or use  
// a & B
// SMIT hyderabad123

function userdata() {
    var inp = prompt("enter data ")
    if (inp == null) {
        console.log("must enter data ")

    }
    else {
        checkvalidate(inp)
    }
    //
}

function checkvalidate(name) {
    var chk = true
    for (var i = 0; i < name.length; i++) {
        console.log(name[i])
        if (name.charCodeAt(i) == 32 || name.charCodeAt(i) >= 48 && name.charCodeAt(i) <= 57) {
            // console.log("invalid")
            chk = false
            break
        }
    }
    if (chk == true) {
        console.log("valid data ")
        checkusernamedb(name)
    }
    else {
        console.log("invalid data")
    }
}

function checkusernamedb(data) {
    var chk = true
    for (var j = 0; j < array.length; j++) {
        if (array[j] == data) {
            chk = false
            break

        }
    }
    if (chk == true) {
        console.log("you this username")
        array.push(data)
        console.log(array)
    }
    else {
        console.log("already use")

    }

}

userdata()











