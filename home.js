var UID = localStorage.getItem("UID")
console.log(UID)
var name1= document.getElementById("name")
var email= document.getElementById("email")
var btn = document.getElementsByTagName("button")
var table = document.getElementsByTagName("table")


//get current user data 
firebase.database().ref("users/").child(UID).once("value",(data)=>{
    console.log(data.toJSON())
    var maindata = data.toJSON()
//    name1.innerText="user name "+ maindata.name
//    email.innerText="user email "+ maindata.email
})


//
firebase.database().ref("users/").child(UID).child("Contacts").once("value",(data)=>{
    // console.log( data.toJSON())
    var maindata =  data.toJSON()
    var data1 = Object.values(maindata)//get values
    console.log(data1)

    data1.map((v,i)=>{
        console.log(v.contact_key)
        table[0].innerHTML+=`
        <tr>
        <td>${i+1}</td>
        <td>${v.Username}</td>
        <td>${v.Address}</td>
        <td>${v.contact}</td>
    <td>
    <button onclick='edit(this)' id=${v.contact_key} >Edit</button>
    <button>Delete</button></td>
    </td>
    </tr>
        `

    })
})

function edit(e){
    console.log(e.id)
    localStorage.setItem("Select_Key",e.id)//get 
    window.location.href="edit_contact.html"
}



btn[0].addEventListener("click",function(){
window.location.href="add_contact.html"
})

btn[1].addEventListener("click",function(){
    window.location.href="add_dish.html"
})
