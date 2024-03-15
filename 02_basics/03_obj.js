//object literals 

const mySym = Symbol("key1")

const jsUser = {
    mySym : "key1", 
    [mySym]: "key1", //correct syntax
    name : "vinit",
    "full name": "vinit kumar",
    age:19,
    location: "ranchi",
    email: "vinitkumar93341@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","sunday"]
}
//console.log(jsUser.email)
//console.log(jsUser["email"])
//console.log(jsUser["full name"])
//console.log(typeof jsUser.mySym)
//console.log(typeof jsUser[mySym]) //same type..still correct syntax

jsUser.email = "nure123@gmail.com"
//  Object.freeze(jsUser) // no change will work after this
jsUser.name = "ksi kumar"
//console.log(jsUser.name);
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello Js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello  js user,${this.name}`);
}

console.log(jsUser.greeting());  
console.log(jsUser.greetingTwo()); 