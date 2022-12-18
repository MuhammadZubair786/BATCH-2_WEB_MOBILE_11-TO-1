// var std = {
//     name:"asad",
//     roll_name:123,
//     score:300
// }
// // console.log(std["name"])//object properties get 
// // std.score=400
// // console.log(std)
// var key = Object.values(std)//return array
// console.log(key[1])
var div = document.getElementsByTagName("div")
var std_data = [
    {
        name: "asad",
        roll_name: 123,
        score: 300,
        address:"abc"
    },
    {
        name: "ali",
        roll_name: 546,
        score: 300,
        address:"abc"
    },
    {
        name: "baber",
        roll_name: 123,
        score: 300,
        address:"abc"
    },

]

std_data[0]["score"]=800//update data

// console.log(std_data[0]["name"])

var table = document.createElement("table")
// var key = Object.keys(std_data)
// console.log(key)

//heading
for(var i in std_data){
    var thear_row = document.createElement("tr")
    var key = Object.keys(std_data[i])
    console.log(key)
    for(var j in key){
        var th = document.createElement("th")
        var textnode = document.createTextNode(key[j])
        th.appendChild(textnode)
        console.log(th)
        thear_row.appendChild(th)
    }
    console.log(thear_row)
    table.appendChild(thear_row)
    
    break
   

}

for(var i in std_data){
    var td_row = document.createElement("tr")
    var value = Object.values(std_data[i])
    console.log(value)
    for(var j in value){
        var td = document.createElement("td")
        var textnode = document.createTextNode(value[j])
        td.appendChild(textnode)
        console.log(td)
        td_row.appendChild(td)
    }
    console.log(td_row)
    table.appendChild(td_row)
    

   

}

div[0].appendChild(table)

