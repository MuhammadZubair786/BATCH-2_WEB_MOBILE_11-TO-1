var file = document.getElementById("file")
var Upload = document.getElementById("Upload")
var progress1 = document.getElementById("progress")


var file_Data 

file.addEventListener("click",function(){
    file.onchange=e=>{
        console.log(e.target.files[0])
        file_Data  = e.target.files[0]
        Upload.removeAttribute("disabled")
    }

})

Upload.addEventListener("click",function(){
    console.log(file_Data.name)
    //up[load ]
    var uploaddata = firebase.storage().ref(`images/${file_Data.name}`)
    .put(file_Data)

    uploaddata.on('state_changed', 
      (snapshot) => {
      
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;//per
       console.log(progress)
       progress1.style.display="inline"
     

       if(progress==0){
        progress1.innerText="Start upload"
    //   alert("Upload Process Star\n Plz Wait For Upload Image In Data Base")
    }
    if(progress<25){
        progress1.innerText=`Progress : ${progress}`
    }
    if(progress<50){
        progress1.innerText=`Progress : ${progress}`
    }
    if(progress<75){
        progress1.innerText=`Progress : ${progress}`
    }

    if(progress==100){
        progress1.innerText="complete"
  
    }
    
  
       
       
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        //link
        uploaddata.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log(downloadURL)

       })
        
      }
    );




})