// var h1 = document.getElementsByTagName("h1")
// console.log(h1[0].innerHTML)

// var btn = document.getElementsByTagName("button")
// var get = h1[1].getAttribute("data")
// console.log(get)

// btn[0].addEventListener("click",function(){
//     console.log(h1[1].style.display)
//     if(h1[1].hasAttribute("style")){
//         if(h1[1].style.display=="none"){
//             h1[1].setAttribute("style","display:block;color:green")

//         }
//         else{
//             h1[1].setAttribute("style","display:none;color:green")

//         }
//     }
//     else{
//         console.log("not present")
//     }


//     // if(h1[1].style.display)
//     // h1[1].setAttribute("style",'display:none')
// })

// has Attrbuite =>present

// btn[0].addEventListener("click", function () {
//     btn[1].setAttribute("disabled", true)

//     i = 3

//     btn[1].innerText = `wait ${i}  second`
//     data = setInterval(() => {
//         i -= 1
//         // btn[1].removeAttribute("disabled")
//         btn[1].innerText = `wait ${i}  second`
//         if (i == 0) {
//             clearInterval(data)
//         }
//     }, 1000)

//     setTimeout(() => {
//         btn[1].removeAttribute("disabled")
//         btn[1].innerText = `click`


//     }, 3000)
//     // btn[1].inner("hello user")
// })

// btn[1].addEventListener("click", function () {
//     btn[0].setAttribute("disabled", true)
//     setTimeout(() => {
//         btn[0].removeAttribute("disabled")
//     }, 3000)
// })

var btn = document.getElementsByTagName("button")
var ul = document.getElementsByTagName("ul")
var inp = document.getElementsByTagName("input")

btn[0].addEventListener("click",function(){
    var tagname  = document.createElement("li")
    console.log(tagname)
    console.log(inp[0].value)
    var textnode = document.createTextNode(inp[0].value)
    tagname.appendChild(textnode)
    ul[0].appendChild(tagname)

    var edit_button = document.createElement("button")
    var edit_text = document.createTextNode("Edit")
    edit_button.appendChild(edit_text)
    edit_button.setAttribute("onclick","edit(this)")

    console.log(edit_button)
    edit_button.style.margin="5px"
   tagname.appendChild(edit_button)
   tagname.style.margin="10px"

   var edit_button1 = document.createElement("button")
    var edit_text1 = document.createTextNode("Delete")
    edit_button1.appendChild(edit_text1)

    edit_button1.setAttribute("onclick",'del(this)')

    

    console.log(edit_button1)
    edit_button1.style.margin="5px"
   tagname.appendChild(edit_button1)
   tagname.style.margin="10px"


})

function edit(e){
    console.log(e.parentNode.childNodes[0])

    var p = prompt("enter data ",e.parentNode.childNodes[0].nodeValue)

    e.parentNode.childNodes[0].nodeValue=p
}

function del(e){
    e.parentNode.remove()
}