// var d1 = document.getElementsByClassName("class1")
// // console.log(d1[0].innerHTML)
// d1[0].innerText="new user call"
// d1[0].style.color="yellow"
// d1[2].style.fontSize=100+"px"

// var class1 = document.getElementById("class1")
// var par=class1.getElementsByTagName("p")
// par[1].innerText +="SEE MORE"

// var click1 = document.getElementById("click")
// console.log(click1)

// click1.addEventListener("keypress",function(){
//     alert("ok")
// })

// var inp = document.getElementById("bt1")
// inp.addEventListener("click",function(){
//     inp.style.border="1px solid red"
// })

// inp.addEventListener("click",()=>abc())

// function abc(){

// }

// var data = document.getElementById("class1")
// var p = data.getElementsByTagName("a")
// console.log(p[0])

// var mainpar = data.getElementsByTagName("p")
// var maindata1 = mainpar[1].innerHTML
// console.log(maindata1)

// p[0].addEventListener("click", function () {
//   //   alert("ok")  
//   var par = data.getElementsByTagName("p")


//   par[1].innerHTML = `
//   new hgdfhdf ghdhsgd sghdsgd sdghsgdhwfewev wyweywev wfefwefwe v
//   <a href="#" id="close1">close</a>
//   `

//   var a = document.getElementById("close1")
//   console.log(a)
//   a.addEventListener("click", function () {
//     console.log(maindata1)
//     par[1].innerHTML = maindata1

//   })



// })

// var a = document.getElementsByClassName("class1")
// console.log(a[2].innerText)

// .addEventListener("click",()=>function_name())

// var a = document.getElementsByTagName("div")
// // console.log(a[3].innerTex)
// a[3].innerText="data"
// console.log(a[3])

// var ulist = document.getElementById("ulist")
// console.log(ulist)
// var list_item = ulist.getElementsByTagName("li")
// console.log(list_item.length)
// for(var i=0;i<list_item.length;i++){
//   console.log(list_item[i])
//   list_item[i].setAttribute("class","list_item")
// }
// i=0

// var inp = document.getElementById("text")
// var BUTTON_CLICK = document.getElementById("BUTTON_CLICK")

// BUTTON_CLICK.addEventListener("click",function(){
//   if(i>=list_item.length){
//     alert("not enter ")
//   }
//   else{
//     list_item[i].innerText = inp.value
//     list_item[i].removeAttribute("class")
//     i+=1
//     // i=i+1
//     inp.value=""
//   }

// })

// function abc1(){
//   return "hello"
// }

// var b = abc1()
// console.log(b)

// var b = document.getElementsByTagName("b")
// console.log(b[0])
// b[0].setAttribute("style",`
// color:red;
// background-color:yellow;
// font-size:20px`)

// var b_att = b[0].getAttribute("style")
// console.log(b_att)

// setTimeout(()=>{
//   var r_att = b[0].removeAttribute("style")
// },1000)

// b[0].style.backgroundColor

i = 0

var img = document.getElementById("img12")

var pre = document.getElementById("pre")

function next() {
 
  if (i == 0) {
    pre.removeAttribute("disabled")
    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABmFBMVEX/Xwv////uq3gmMjiS46mZmZn/WwDxrXn/UgDq7O/KjGHSl2mP6K36/v99zZu0jmLZ3+DtpHPy8/PKlWzWVheN5Ka7vb/W0s7vqHDJ1s7trnuiyq/X2Nn5+fmJjZC+hFPl4+WriXBiU0jBWRZfZmobKTAzSEVxcHNtp4IcIC+5imbJy8wAJTPgonPjpHSofl+um2r2iE2CyJcAGSKRb1cVJSwAIzJlkHN1tofxnGbzll7wXBC/mXA4QkdMVFn4f0KqrICXs4KSu43mWRO9yMOA1JmMw57/QgDVbUh/gYJZfGeN2qPgYiT8bynteUDSXinEb0S+oHWUgWTMVBqGpHmKzp/NmovsSwDXZjqZuab5eDd1x4+DwpettKwPFSeKuZqmqax8Y1BHQ0DHooisnJIAAAq5pZYACx3Vq43VvKyVbU7ad0BTSUKfinzVw7fYknzaf2GakZgZMTA8MjFwanFbcWZXgmhbNi6LPyZlnHeOlnCyYklwmoDLhVgEABpBa1SQX0gyMD20fGx6i5BkJRuBkZXjknmyTSEn29dPAAAMpklEQVR4nO2di3/axh3ALYERCoTKksFGlqjqQWEI4RhChpNCHjZeqOP14aapa6d2lqVe2qTtujVr92j33r+9351O0ulhe8Ruqa/3DREgiGt9P7/73e9OJ3VmhsPhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofDOScyNNP+ZX7k3HuV5h7axeUdQ+ZKnuYKMrR9c/X6GnB99Vdvza/PT/tX/PEAsjoNj07+lZnVNR0hipKo65quL16/xwOMEJF1SwJNGKkpiZImiaKuSas3eHghYrJ8V2JTFEEYstZ+Y+0tHl1Y1lbHJZ1O+7LcuNLcd+hZf3uG60KyCkCnALLynizkCraeORRfbW37J28r8/ZtxJ38Hcw7XjPEtpAmydenr3JbQHZ1rj+3iPBciW3UBKEhAjmJhJp+/SdvC3yt6dK7viYSUSBLarYlwNFwvwj7uC3kSgzT1jSc4NuuuZwDu5qadmJszSNu/JC/9zTIXI+6csPIrbLIexRs6OlYWzt4O7/+A/7iUyBzM+rKtxSSRZ70m4m2dsgzW+GVyUaYEediXAo9hd+L29n4Tw0V+Os78S9cSDLvFc7GHjzAVjYUXzciehixle3k02cgv2TdL24sZNeV9wNbO/Pr0ZbHxlAy2zmLq3RxQ9gcWZcffCAs+I3RDyMquTMiq5A/E8VOPj+Cgc/8A+8nBlFFhRcbsjIffPrpzyheOY53T9jRnnvgxxWVrpiTBaObrC1PhpWwr0RsrVNtj8pc66zUW1lFmAwz8l5VVT9l0SFEZ3lGQitZlmxRMig7hhmTZdq2ISyQH/aTlFXeFUwAb8oKEoReC2ZDdmVZhmLIRFbJtoWFNbd0oMt1ukWy3QxN2UgAB5mKIoz8RW9LJZAlkcmt9XmfneAlK648WaYclmUkKUStEEcWJQuzsKh/GB0kMmOIAsuShYNRGccMcaVGZVnoQ0UNImuWtruwKOo3IrZYlVXe27ifX1rqBMcfjazyaA8+VPzIMoxQ6wVZ4lxE1g4rWZ0CyTooFkd78LfsH70bWWXfyFKxWCaRFS0dXFmSJK2FbbGTqQKQLLu4bwkbxf3AA44sYzTCzmC3vLlkkshSaUtGGfPwDcQlBvWEAVmNUdHA0bO34QWWYiBX6TSyJfe93dZGNLI2iy7uUPEV1ufkQVa/SGQVN4gLq2xgV2BLkTv5EbFlPYzKqn7084CPVtYYXwcBsky7uCmDnH1ZVXb7soKboesqnd66nwdlri0/wfvUU9VqdVBLYXor0mK0T2QLlLOW0sXRPiR4ZXcE7IEO1R6FZq5cW0YswddrtUEVA7JaK9Jxk/KMgGTtjna3ipsHBWNjZFibBzAwNMvFdMzWQUJkgathr+aGFpIl6mvb7LZFXJRakKnLglwubkK9gDYxWenixlLx+MgKZKGziczqIsMd2UITChtF27p/AOWnGpOVhj7PIBW8ZSvuYNGqDqicRWSJuj53c4ZJX6GBNOSsYqGPa/SlBGRBNkxUbylerV/t9hA1zLUV/6S/rl//kME1qCFZprXbNy00RWOqJjzQpmx5r0z1wIZoQkNDMkEjH85WZoHxVYxGr5BwfU378M6X5Mk/aqdFlewPDy2lpKJxNLZlWSjdCWS4I0mh1SRIl7jK1pq3iaaVjZJtCrMC+ifQEpEr/BoPpBPRdaZ0TSSrZJQgqmwcTQp5isiKBpguxma6Li6TnbAoWTLYOsRTy7YclyWJzRXNEcO62FnGFZJlWZac5Ij6hmFCDoMsD20Q94khWdJKC0jVHoV06Wus2KJlmVAYJM4n0yg2bOQSzldyWJakXXMrrlrNkViMrZAsr3c7CeLTVl1bIVnLrRSx9etwS2RkxBiSBVVn6TRZqjthCpUpbCw5JOtRpUtstbRwHcGgLFspnZKz8NjQdq2VDEMpWbSsx/K46419wg2RjXXgp/aGDVtRbPvgoW1Y1sNdLEslbdX2vuPJ+s1ls1J3bdUekRXzEkOhdaosRVChXJdV6AixJe+8IW3LlSXlnkMjtmC4iGwN8DJdR2viwktn4oIMLEstJeAZCc4hYjcqbcmmZS0+LqmWYTyZnQVbtato5byjSZqIrjNgox26kaUmYIaFCCSisCy/wjAMNErEsqSP3V1jQQBb1xxJaoo52GptB2wxUWtlyZR7HJKYZDUsy4yE23hoe5G1gHfAF6q1FNQOEqhyNA10sZK0kpshJYiuJdBYh3xk2iTy6r1ubxZf5bP40HA/HENgNSXR0RxohlJT0rS2qE/7QM+DUxP8AVVMlHepaWXFDb0h9H6tRznI4otk0nW2m2otuxf4oGqrnUPPOgsXD5xh5Z9bnLqFQqt2VVzEWmXBOmpdxZeOOUiW5DhiDmRtT/tIz4GJZVGDRwutQep5w8FU87dPP66jVvuYFFdOrt2U4NFsQ+3ARmSpqgx/8MbEvaBK7aE38IEpq4cWtQfUuAOcWhUa47KWw13nY1KPalBoQd2AryNjRNZLN0OELZPRIHSA0Bif4Dz21JuEaKPrqaHYQrKmfaBnJ5P95RlXKxtPQBQ8BthYBe8rrbijHFSQQtrK4WHihS8dMndlxbITjJwsKygxIKVXerVqrYYCK1WrD2zVtEqDVmu5ia9RFHGdhYswBmQJ4cWhcVR3BRZYkd1XFp5QdcHn84e96sCVlRrUh4PUsDok3SN1zT4D839I1imRte8uwNozhY77qkPLwsVD9ajeq5K5htpgmPImaegJQAbGhpm7inKYtO7xZFluEwy+UxmkiKwQuNryZDFwjodK8KpF45ftSc0wxmxvGPbkrhRJUbIuvqsZqnQoF2k2j09iCfsWPunRqmrE1bVgtpSJSYdAVunL1ymqx8pKXK3cbIVl1SIT8YycscgqlzFCqVutVodoNQw+XOHyMajxXcLCpVZSZLWavqxpH+Y5sf7g0xziE7Dkr3hMPXNyE+DkaFnDQVQWA4UDIeMugVlpgatejSx5XJYmwgFZQ79DrHrN0Jc17WM8N7bxbS9AlhtZKSJLnIhrIMvrEWv1iCwGiixCZtWThXNW6v+RFQ+ta8iR948H4wGd4PWLP9TxyKyJXmRRPDtJltR8LQoKK3cwjW253rwTrdM+xPMj4wl4tkzxSBLja618Wc8rcWA07YfWcNgdDrrdj5AsXWToQoJtPbFp4VvVaZqWZEtqzsYBU0HWwmWaMkYzpGsMLf1LuK0RMYLmOCWx2U7Q5VTisiooa3myhrhW/WxRF9moRgkkvye4Esmdn9pOO9oapXGCLDQxM+7Rsp6u3WRrvXL85mIu7Zx3u6xcOxdtjdLzhHaI64Wxm7YGWNbnWaZU+Z1hNK6kQA+6hWS7GbJFJa2K3yLd9F7HXWINy/qCMVdQvyeocmKZvR1+3/YUjQWbSlr+uPAJHm5/wJysBFeaQ2oGxwn2hUPLS1olQfBeVkhfWOt1U3U8kTPPnKx4ygqiqNkMZIV9vuYZMg7ppAWijqre6sHLD07/z18s4rKkID+1/cgSnXY4+JIqraNUddamTu8n3A7wYhOT1W4GWqhmmHPoL829m1BpjSPniRaYlxVKToGs8P65O6OESmscXuksM9cZvpQs6VY+f5DQDitodbhl2KXDw0r92QPmXMV6Q7yaw6PdDl5Tsub20+n93yXISuELNXtfdo96td9P+8i+BzJzMVvJ0K2wkE6nG2/+oZ5E9avGfv+b19mUFavg6dlih56GCMsCXY3GL4A38YNsXjQK+NanW6//cdpH9j1w3NgwmrNo5u74l5l3+v3+N31MA73a8u4Su/X1tI/se+C4WYeTkN4Jbpy7hW1hXy8a1MX6+TvMFQ4nzGedEFniXKcQ2ILg+gZkNWhVyNbbDPaG25NHFnQChT7lpQC2GluR2zTnb7Mna2bmJWSJknO7HwRXvhNThdIZi+3wuCvnT7a1qL3X3yJW9hNUwV4WZZ3UHR7vCsj9qb9V6ICquClwlb7CYDPMfPgS3eFjQzlcfv7nR1995Sb5/f1Op0NJy/cbBeYmaDATy5JyaMYqNQbqL4IWWEDCCoV8sbD5l607LKx7pyE3qP3rpUl5Da1DHQ/R+f5v+4GtfD6fvn/w3WzJtv9G3QuXqdvgZiYm+7GiCOgmY7Vu79tOPo1vj5huvPgu9ffB4Mi2beUfDCaslyV792npn4Ner1sSjv51q3Dl1bfmby8/Oax3YVcX3fL1LpcVANF17/PDQxC2M5PJoltlZTJfVyvdbq/671Lp6T3uKgwYunH3P3Qe/2/l8LP3v1jPZtk6D31eRKzw/yUwh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HM658z9WieeAdDyXPQAAAABJRU5ErkJggg=="
    i += 1
  }


}

function pre1() {
  if (i == 1) {
    img.src = "data:image/jpeg;base64,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"
    i = i - 1
    pre.setAttribute("disabled", true)
  }


}


