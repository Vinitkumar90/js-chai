// array part 2
const myarr = ["hello", "hi", "how are"]
const anotherArr = ["whatsapp", "snapchat", "instagram"];

// anotherArr.push(myarr);  
// console.log(anotherArr); // it takes any type of element and any element and push it as a whole : assigned single index
// console.log(anotherArr[3][1]);  

// const newArr = anotherArr.concat(myarr) //Combines two or more arrays. This method returns a new array without modifying any existing arrays
// console.log(newArr);  //or
// const Arr = [...myarr , ...anotherArr]  //spread
// console.log(Arr);

const tomato = [2,3,4,[5,6],12,41,[12,13,14,[23,24,25]],45,67]
const apple  =  tomato.flat(2);  // (level of deepness)
//console.log(apple);

console.log(Array.isArray("vinit"));
console.log(Array.from("vinit kumar"));
console.log(Array.from({hello: "vinit"}))  // it will return empty string in case of object

let h = 400
let j = 900
console.log(Array.of(h,j))