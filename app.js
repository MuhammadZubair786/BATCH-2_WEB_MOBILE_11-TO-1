// class Smit{
//     constructor(center,age,course,batch){
//         this.center=center //variable set value 
//         this.age = age
//         this.course=course//set
//         this.batch=batch 
//     }
//     getdetail(){
//         data.innerHTML+=`
//         <h1>course name : ${this.course}  batch : ${this.batch}
//         `
//         // console.log(`Course name : ${this.course} : batch name : ${this.batch}`)
//     }
// }

// let data = document.getElementById("id1")
// let std1 = new Smit("Saylani mass It Traning",20,"web and mobile","1")
// let std2 = new Smit("FAITH",12,"cco","3")
// let std3 = new Smit("FAITH",12,"ccna","3")

// std1.getdetail()
// std2.getdetail()
// std3.getdetail()

// class Smit{
//     constructor(center,course){
//         this.center=center
//         this.course=course
//     }
//     getdata(){
//         console.log("this is parent function")
//     }

// }

// class Std extends Smit{
//     constructor(center,course,name){
//         super(center,course) //parent property access 
//         this.name=name //child property 
//         super.getdata()
//     }
// }

// let calldata = new Std("smit","w & M","Baber")
// calldata()

// let abc = ()=>{
//     console.log("function ")
// }
// abc()

class Smit{
    constructor(course,newsetval,arr){
        this._course = course,
        this._newsetval=newsetval 
        this.arr =arr

    }

    get show(){
        return this._course
    }

    set course_Set(val){
        this._course = val

    }
    set newval (c) {
        this._newsetval=c
    }
}

let v1 = new Smit("W & MOBILE","Set const",[1,23,4])
// v1.course_Set="New Batch cco" //set value outside of class

// v1.newval="call data"
