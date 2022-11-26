// for(var i=0;i<10;i++){
//     for(var j=0;j<10;j++){
//      document.write("i :"+ i + " j :"+ j+"<br>")
//     }
    
//     document.write(" <br>")
// }

// var dept =[
//     ["ALi","Owais","Ayesha","Danish","Ali","SMIT","ALI"],
//     ["DAnIsH","danish","Ali","Bilal","Danish","Danish"],
//     ["Saqib","BABER","alI"]
// ]

// // 00
// for(var i=0;i<dept.length;i++){
//     // document.write("array "+dept[i]+"<br>")
//     for(j=0;j<dept[i].length;j++){
//         // document.write(dept[i][j]+"<br>")
//         if(dept[i][j].toUpperCase()=="ALI" || dept[i][j].toUpperCase()=="DANISH" ){
            
       
//         if(dept[i][j].toUpperCase()=="ALI"){
//             dept[i].splice(j,1,"Asad")
//         }
//         if(dept[i][j].toUpperCase()=="DANISH"){
//             dept[i].splice(j,1,"OMER")
//         }
        
//         j=j-1
//         //   document.write(dept[i]+"<br>")
     
//         }
//         // document.write(dept[i][j]+"<br>")

//     }
// }

// document.write(dept)


var row = parseInt(prompt("Enter row"))
var dept =[]
 for(i=0;i<row;i++){
    dept.push([])
 }
 console.log(dept)
for(var i=0;i<row;i++){
    var col = parseInt(prompt("Enter Col"))
    for(var j=0;j<col;j++){
        var inp = prompt("Enter data ")
        dept[i].push(inp)
    }
    document.write(dept[i]+"<br>")
}

