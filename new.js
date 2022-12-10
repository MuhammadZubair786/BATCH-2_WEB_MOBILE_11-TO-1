// var a = 10
// // output of a+ 10 is : 
// // document.write("output of a + " + a + "is : "+ 20)

// // document.write(`
// // <h1>hello world ${a}</h1>
// // <h1>hello world</h1>
// // `)

// var country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
// var province_list = ["Sindh", "Punjab", "Kpk", "Balochistan", "Gilgat"]
// var sindh_city = ["Karachi",
//     "Hyderabad City",
//     "Sukkur",
//     "Larkana",
// ]

// var ind=["ind1","ind2","ind3"]
// var punjab_city = ["Lahore",
//     "Faisalabad",
//     "Rawalpindi",
//     "Gujranwala",
//     "Peshawar",
//     "Multan",
// ]
// var countrydata = document.getElementById("country")
// var provincedata = document.getElementById("province")
// var city = document.getElementById("city")



// console.log(countrydata.innerHTML)
// for (var i of country_list) {
//     countrydata.innerHTML += `
//     <option value=${i} >
//     ${i}
//     </option>`

// }

// function getres() {
//     console.log(countrydata.value)
//     provincedata.style.display = "inline"
//     provincedata.innerHTML = ""
//     if (countrydata.value == "Pakistan"){
//         for (var j of province_list) {
//             provincedata.innerHTML += `
//         <option value=${j} >
//         ${j}
//         </option>`

//         }

//     }
//     else if (countrydata.value == "India"){
//         for (var j of ind) {
//             provincedata.innerHTML += `
//         <option value=${j} >
//         ${j}
//         </option>`

//         }

//     }
// }
// function chgcity(){
//     console.log(provincedata.value)
//     city.innerHTML=""
//     if(provincedata.value==province_list[0]){
//         for(var j of sindh_city){
//             city.innerHTML+=`
//             <option value=${j} >
//             ${j}
//             </option>`
//         }
//     }
//     else if(provincedata.value==province_list[1]){
//         for(var j of punjab_city){
//             city.innerHTML+=`
//             <option value=${j} >
//             ${j}
//             </option>`
//         }
//     }

// }
var chk = document.getElementById("text1")
var frm = document.getElementById("frm")
var chl2= document.getElementById("text2")

function data123(){
    console.log(chk)
    var data = document.createElement(chk.value)
    // var text = document.createTextNode(chl2.value)
    // var data2 = document.createAttribute("class")
    // data2.value=chl2.value
    // data.appendChild(data2)
    // data.appendChild(text)
    frm.appendChild(data)

    console.log(data)
}