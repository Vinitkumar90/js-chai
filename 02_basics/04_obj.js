// const tinderUser = new Object ()   // singleton object --> only 1 instance from the constructor of that class
const tinderUser = {}              //  non-singleton object

tinderUser.id = "44viiniiit"
tinderUser.name = "vinit kumar"
tinderUser.isloggedIn = "false"

const hello = {
    email : "hello.123@gmail.com",
    apple : {
        mango:{
            firstname: "vinit",
            lastname: "kumar"
        }
    }
}

//console.log(hello.apple.mango.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

//const obj3 = {obj1,obj2}
// console.log(obj3);

//const obj3 = Object.assign({}, obj1, obj2, obj4)
//console.log(obj3);

//const obj3 = {...obj1, ...obj2}   //spread
//console.log(obj3);

const user = [
    {
        id: 1,
        email: "hello@gmail.com"
    },
    {
        id: 1,
        email: "hello@gmail.com"
    },
    {
        id: 1,
        email: "hello@gmail.com"
    }
]

//console.log(user[0]);
//console.log(user[2].email);

//console.log(Object.keys(tinderUser));   // this will give all the key of that Object ...all key value in array
//console.log(Object.values(tinderUser));  // all the values of a Objecct
//console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isloggedIn'))