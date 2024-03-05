const accountId = 23232
let firstName  = "vinit"
var password = "1234"
accountCity = "Jaipur"

// accountId = 4 not allowed

firstName  = "hello"
const birthYear = "2004"
const birthCity = "Ranchi"
accountCity = "Jaipur"
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(firstName);
console.table([birthYear,birthCity,firstName,accountCity,accountState]);