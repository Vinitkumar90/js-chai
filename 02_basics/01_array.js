// array

const he = [2,3,4,5]
//javascript array can be mx of data type
// no fixed length
//cannot be accessed using arbitary string
//zero based indexing
// it makes shallow copy : pass by reference
// deep copy: pass by value

//console.log(he[0]);
const myArray2 = new Array(1,2,3,4)

const myHeroes = ["iron-man","batman","superman"]

//Array methods

// const myArray = [1,2,3,4]
// myArray.push(6) //ADDS the element at the ending index   
// myArray.pop()  // Removes the last index value

// myArray.unshift(26)  // add element to the first
// myArray.shift() // removes first element

// console.log(myArray);
// console.log(myArray.includes(2));
// console.log(myArray.indexOf(2));

// const newArr = myArray.join()
// console.log(newArr , typeof newArr);

// slice and splice

//console.log("A ", myArr);

// const myArray = [1,2,3,4]

// const myn = myArray.slice(1,3);
// console.log(myArray , myn);

const myArray = [1,2,3,4]

const myn = myArray.splice(1,3)
console.log(myn , myArray);
