var text = document.getElementById("textdata")
function showdata(e){
    console.log(e.innerText)
    text.value  += e.innerText
    // text.value = text.value+e.innerText
    }

function result(){
var res = eval(text.value)
console.log(res)
text.value = res

}

function clear1(){
    text.value=""

}

function backlsp(){
    text.value = text.value.substring(0,text.value.length-1)
}

function sqrta(){
    text.value = Math.sqrt(text.value)
}

function  sqr(){
    text.value = text.value*text.value
}
