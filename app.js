// i=0
// while(i<=10){
//     console.log(i)
//     i++
// }

// data =[]
// i="y"
// while(i.toLowerCase()=="y"){
//     inp = prompt("enter data")
//     data.push(inp)
//     i = prompt("if run again enter y or n ")

// }

// console.log(data)

// i=0
// while(i==0){
//     inp1 =parseInt( prompt("enter data 1"))
//     inp2 = parseInt( prompt("enter data 2"))
//     op = prompt("enter operation : +,-,*,%")

//     if(op=="+"){
//         alert("Value of 1: "+inp1+"\nValue of 2 : "+inp2+"\nResult is : "+(inp1+inp2))
//     }
//     else  if(op=="-"){
//         alert("Value of 1: "+inp1+"\nValue of 2 : "+inp2+"\nResult is : "+(inp1-inp2))
//     }
//     else{
//         alert("Encorrect op")
//     }

//     i=prompt("if you want to run again loop enter 0 ")

// }

// country =[]
// i=0
// while(i==0){
//     inp1 = prompt("enter data ")
//     country.push(inp1)
//     i= prompt("if run again enter  0")
// }

// document.write("<select>")
// for(var D1 of country){
//     document.write("<option>"+D1+"</option>")
// }
// document.write("</select>")

// i=0
// while(i==0){
// var gennumb = (Math.random()*3).toFixed()
// alert(gennumb)
// var inp = prompt("enter data ")
// if(gennumb==inp){
//     console.log("win")
//     break
// }
// }

// var arr =[

//     [1,2,3,4],
//     [2,3,4,4],
//     [4,5,6,4]
// ]

// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<arr[i].length;j++){
//         document.write(arr[i][j]+"k,")
//     }
//     document.write("<br>")
// }

// i=0
// do{
// console.log(i)

// }
// while(i==10)

// for(i=0;i==10;i++){
//     console.log("FOR ")
// }

// i=10
// do {
//     inp = prompt("enter data ")
//     if (inp % 2 == 0) {
//         console.log("even number")
//     }
//     else {
//         console.log("odd nummber")
//     }
//     // i = prompt("enter run again enter 0")
// } while (i == 0)

// var a = "Asad"
// a.charAt(0)//A
// a.includes("a")

// var a =["asad","ali","omer","ali","asad","baber","ali"]
// // var a ="Lorem ipsum, dolor sit amet Lorem consectetur adipisicing elit. Saepe enim recusandae eveniet iusto Lorem quidem facere, quam ea culpa! Soluta, ab! Tempore, magnam ullam quas est impedit assumenda sapiente laborum molestias?"
// a=a.join()//arr to str
// console.log(a)
// a=a.replaceAll("ali","smit")
// console.log(a)
// a=a.split(",")//str to array
// console.log(a)

// a="smit"
// var b =10.09
// var a = Math.round(b)
// console.log(a)

// var b =10.0001
// var a = Math.ceil(b)
// console.log(a)

// var b =10.98
// var a = Math.floor(b)
// console.log(a)

// var b =-10.98
// var a = Math.floor(b)
// console.log(a)

// var b =-10.98
// var a = Math.ceil(b)
// console.log(a)

// var a = Math.PI

// // Date
// var today = new Date()
// var year="2000"
// var month="oct"
// var date ="12"
// var d_o_b= new Date(date+" "+month+" "+ year)
// var year = today.getFullYear()- d_o_b.getFullYear()
// var month = today.getMonth()- d_o_b.getMonth()
// var date = today.getDate()- d_o_b.getDate()
// console.log(year+"year "+"Month "+month+" date "+date)

// today = today.toString()
// today = today.substring(0,3)
// console.log(today)

// var year = today.getFullYear()
// console.log(year)

// var year = today.getUTCFullYear()
// console.log(year)

// var month = today.getMonth()
// console.log(month)



// 0 or 11
// var monthdata =["jan","feb","m","a","may","j","july","aug","sep","oct","nov","dec"]
// console.log(monthdata[month])

var a = ((Math.random()*2).toFixed())

if(a==0){
    
    a=eval(a+1)  
}
if(a==1){
    console.log(a)
    console.log("tail")
}
else{
    console.log(a)

    console.log("head")
}












