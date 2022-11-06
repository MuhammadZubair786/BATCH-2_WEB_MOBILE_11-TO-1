var array=[1,2,3,4,5,6,7]
// console.log(array)
// array.unshift(45)//add in start
// console.log(array)
// array.shift()//remove from start index
// console.log(array)

// delete array[3]

// console.log(array)
// array[3]="smit"
// console.log(array)
// var array=[1,2,3,4,5,6,7]
// var newdata= array.slice(2,6)
// console.log(newdata)
// array.splice(0,0,"asad","smit","hyd",34,56)

// console.log(array)
//1,"asad","smit","hyd",34,56
var arr =[1,2,45,56,78,45,35,45,67,89]

arr.push("smit")
console.log(arr)

arr.unshift("new course")
console.log(arr)

arr.pop()
console.log(arr)

arr.shift()
console.log(arr)


var index1= arr.indexOf(56)

arr.splice( index1 ,1)
console.log(arr)

var index2= arr.indexOf(45,index1+1)

arr.splice(index2 ,2,"data1 ","aple","laptop")
console.log(arr)

console.log(arr.length)

// console.log(arr.sort())
// console.log(arr)

var data = arr.indexOf(45)
console.log(data)

arr.push(45)

var newdata = arr.indexOf(45,data+1)
console.log(newdata)



console.log(arr)

// var data = arr.lastIndexOf(45)
// console.log(data)

// var new1 = arr.includes("laptop")
// console.log(new1)















