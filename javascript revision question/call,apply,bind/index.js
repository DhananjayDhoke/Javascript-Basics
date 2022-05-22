//q1 Give an example where call apply bind is. required?

// let user1={
//    firstName:"Dhananjay",
//    lastName:"Dhoke",
   
//    printName:function(){
//        console.log(this.firstName+" "+this.lastName)
//    } 
// }

// user1.printName()

// here is only one  object so if we want user firstname and lastname we simply calling 
//printname function her this is pointing towards the object
// but if their are more than 1 user then we do not repet the writing printname function again and again
// so here we can use call method how lets see.

// let user2={
//     firstName:"Ajay",
//     lastName:"Dhoke",
//  }

 //user1.printName.call(user2)
  
 

 // we can also write printname function outside the object 

//  let user1={
//     firstName:"Dhananjay",
//     lastName:"Dhoke",
    
  
//  }
//  let user2={
//         firstName:"Ajay",
//         lastName:"Dhoke",
//      }
    

//  let printName=function(city,state){
//     console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`)
// } 
 
 //printName.call(user1)


 // we can also pass the argument 

 //printName.call(user2,"Nagpur","Maharashtra")

 // if we want to pass aggument in single array then we used apply method

 //printName.apply(user2,["nagpur","Maharashtra"])

 // if we want to make copy of function then we blind method

 //let userdata=printName.bind(user2,"Nagpur","Maharashtra")

 //userdata()

// q2 What is the difference between readFile and readFileSync?

//readFileSync() is synchronous and blocks execution until finished. 
//These return their results as return values. 
//readFile() are asynchronous and return immediately while they function in the background. 
//You pass a callback function which gets called when they finish

//q3. What does process in node.js mean?

//The process object provides information about, and control over, the current Node.js process.


//q4 Explain what node.js is?

// so node is javascript runtime envoirment or basically a javscript engine
 // using node.js we can write javascript without using browser, so with the help of node js we 
 //can also write backend development.
 //
//q5 What is the difference of JS from browser to JS on node.js
//JavaScript is a simple programming language that runs in any browser JavaScript Engine. 
//Whereas Node JS is an interpreter or running environment for a JavaScript programming language 
//that holds many excesses, it requires libraries that can easily be accessed from JavaScript 
//programming for better use.

// q5 Write three different ways to reverse a string in Javascript?
// a. using inbuilt method, b. iteratively, c. recursively

// using inbuilt
  //let str="MasaiSchool";

//  let res=str.split("").reverse().join("")

//  console.log(res)

// using iteratively
//  let newstr="";
//  for(let i=str.length-1; i>=0; i--){
//     newstr+=str[i]
//  }
//   console.log(newstr)

// using recursively
// function reverseString(str) {
//     if (str === "")
//       return "";
//     else
//       return reverseString(str.substr(1)) + str.charAt(0);
//   }
//  console.log(reverseString("MasaiSchool"));



// Write a program to check two objects are equal ( deep equal )
// const obj1 = {
//     name: 'Ram',
//     age: 21,
//     hobbies: ['Cricket', 'Swimming']
// };

// const obj2 = {
//     name: 'Ram',
//     age: 21,
//     hobbies: ['Cricket', 'Swimming']
// };
// const haveSameData = function(obj1, obj2) {
//     const obj1Length = Object.keys(obj1).length;
//     const obj2Length = Object.keys(obj2).length;

//     if(obj1Length === obj2Length) {
//         return Object.keys(obj1).every(
//             key => obj2.hasOwnProperty(key)
//                && obj2[key] === obj1[key]);
//     }
//     return false;
// }

//What is shallow equal JavaScript?
//shallowCompare performs a shallow equality check on the current props
// and nextProps objects as well as the current state and nextState objects.
// It does this by iterating on the keys of the objects being compared and returning 
//true when the values of a key in each object are not strictly equal.




 

 