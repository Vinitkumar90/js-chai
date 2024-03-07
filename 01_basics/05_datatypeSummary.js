//datatypes are divided into two types :
// according to how they get 1>stored in memory and how we can 2>access

// 1> Primtive  (7 Types:) all primitive data types are call by value : means when
//ever we call them any where ...we dont get there memory reference ...we get a copy and all the changes reflect to copy and not original data

//---->>>  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const id = Symbol("123")
// const oneMoreId = Symbol("123")
// console.log(id === oneMoreId)

// const bigNumber = 423525252523n;


// 2> refrence type of (non-primitve) data-type
// Array, Objects, Functions

// javascript is dynamically typed or static typed language
// ----> JavaScript is a dynamically typed language


const heroes = ["batman","superman","iron-man"]

let myObj  = {
    name : "vinit",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}

//Return type of variables in JavaScript
/* 
1) Primitive Datatypes
Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

2) Non-primitive Datatypes
Arrays  =>  object
Function  =>  function
Object  =>  object
*/

//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it.

