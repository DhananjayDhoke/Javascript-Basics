// prototype  child object accsecing property of is parant object but reverse is not possible
"use strict"


let obj={
    name:"dahananajay"
}


const obj1=  Object.create(obj)
//console.log(obj1.name)

// wecan accses the property of obj2 inside obj3
const obj2={
    name:"Ajay",
  
    lastname:"Dhoke",
    getname: function(){
      return   this.name
    }
}


const obj3={
    name:"karan",
    phone:878894543,
    __proto__:obj2
}
const obj4={
    name:"roshan",
    
    __proto__:obj3
}
//console.log(obj2)
//console.log(obj3.getname())  get karan why?? first it check its own if not found then go to the parent 



// create your own function 

 Array.prototype.show=function(){
     return this
 }

  let city=["nagpur","mumbai","dehli"]
  //console.log(city.show())


   // convert array into object
  Array.prototype.convertintoobject=function(){
    let obj={};
    this.forEach((ele)=>{
        obj[ele]=ele
    })
   return obj
}
 //console.log(city.convertintoobject())

 function Myprtotype(name){
     return this.name=name
 }
 
 Myprtotype.prototype=obj2;
 const myproto= new Myprtotype("Dhananajay")

 //console.log(myproto)


 console.log(myproto)

 let myobj={
     name:"dhananajyfggdfgdfg"
 }
 console.log(myobj)