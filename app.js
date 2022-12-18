// var arr =[
//     ["asad","ali","smit"],
//     ["asad1","ali","smit"],
//     ["asad2","ali","smit"],
//     ["asad3","ali","smit"],
//     ["asad4","ali","smit"],
//     ["asad5","ali","smit"],
//     ["asad","ali","smit"],
//     ["asad1","ali","smit"],
//     ["asad2","ali","smit"],
//     ["asad3","ali","smit"],
//     ["asad4","ali","smit"],
//     ["asad5","ali","smit"],

// ]

var arr =[]
var user_inp = prompt("enter row")
for(var i=0;i<user_inp;i++){
    arr.push([])
    var col = prompt("Enter Col")
    for(var j=0;j<col;j++){
        var std_name = prompt("enter data")
        arr[i].push(std_name)
    }


}
console.log(arr[0])





// for(var j=0;j<std.length;j++){
//     var user_inp = prompt("enter data")
//     std[j]=user_inp
// }
// console.log(std)

// arr[0][0]=>2d 
// arr[0].length
var div = document.getElementsByTagName("div")

var table = document.createElement("table")

var t_head_row = document.createElement("tr")
for(var i=0;i<3;i++){
    if(i==0){
        var th = document.createElement("th")
        var text =  document.createTextNode("Name")
        th.appendChild(text)
        t_head_row.appendChild(th)
    }
    else if(i==1){
        var th = document.createElement("th")
        var text =  document.createTextNode("Data")
        th.appendChild(text)
        t_head_row.appendChild(th)
    }
    else if(i==2){
        var th = document.createElement("th")
        var text =  document.createTextNode("roll no")
        th.appendChild(text)
        t_head_row.appendChild(th)

    }
  

   

}

table.appendChild(t_head_row)


table.style.border="2px solid black"
table.style.margin="5px"
table.style.padding="5px"

// console.log(table)
for(var i in arr){
    var tr= document.createElement("tr")
    // console.log(tr)
    for(var j in arr[i]){
        // console.log(arr[i][j])
        var td = document.createElement("td")
        var text_node = document.createTextNode(arr[i][j])
        td.appendChild(text_node)
        console.log(td)
        tr.appendChild(td)
        td.style.borderBottom="1px solid red"
        td.style.fontSize="30px"
        td.style.padding="5px"
        
    }
   
    console.log(tr)
    table.appendChild(tr)
}

div[0].appendChild(table)
