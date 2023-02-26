
let baseurl = "https://fakestoreapi.com"
let product_url= "products"

let cat= document.getElementById("cat")

let promise = new Promise((res,rej)=>{
    let a=10
    if(a!=undefined){
        res(a)
    }
    else{
        rej()
    }
})

promise.then((data)=>console.log(data))
.catch((e)=>{
    console.log(e)
})

var loader = document.getElementById("loader")
var product_data = document.getElementById("product_data")

let get_product_promise = new Promise((res, rej) => {
    fetch(`${baseurl}/${product_url}`)
        .then((data1) => {
            if (data1) {
                res(data1.json())
            }
            else {
                rej()
            }
        })
})

get_product_promise.then((get_product1) => {
    console.log(get_product1)
    loader.style.display = "none"
    get_product1.map((v, i) => {
        console.log(v)
        product_data.innerHTML += `
        <div class="col col-lg-3 mt-5 col-md-4 col-sm-6 col-12 style="height:400px;overflow: hidden;"">
        <div class="card" style="overflow:hidden;height:400px" >
  <img src=${v.image} style="object-fit: cover;height:200px" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${v.title}</h5>
    <p class="card-text">${v.description}</p>
  
  </div>
</div>
</div>
        `

    })


})
    .catch((E) => {
        console.log(E)
    })


let category_promise = new Promise((res,rej)=>{
    fetch(`${baseurl}/${product_url}/categories`)
    .then((data)=>{
        if(data){
            res(data.json())
        }
        else{
            rej()
        }
    })
})

category_promise.then((data)=>{
    console.log(data)
    data.map((v,i)=>{
        cat.innerHTML+=`
        <button type="button" class="btn btn-danger" onclick="get_cat(this)">${v}</button>
        `
    })

})
.catch((e)=>{
    console.log(e)
})

let get_cat=(p)=>{
    // console.log(p.innerText)
    product_data.innerHTML=""
    loader.style.display="inline"

    let product_cat_promise = new Promise((res,rej)=>{

        fetch(`${baseurl}/${product_url}/category/${p.innerText}`)
        .then((data)=>{
            if(data){
                res(data.json())
            }
            else{
                rej()
            }
        })
    })

    product_cat_promise.then((data)=>{
        loader.style.display="none"
        data.map((v, i) => {
            console.log(v)
            product_data.innerHTML += `
            <div class="col col-lg-3 mt-5 col-md-4 col-sm-6 col-12 style="height:400px;overflow: hidden;"">
            <div class="card" style="overflow:hidden;height:400px" >
      <img src=${v.image} style="object-fit: cover;height:200px" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${v.title}</h5>
        <p class="card-text">${v.description}</p>
      
      </div>
    </div>
    </div>
            `
    })
})}




