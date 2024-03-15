//void function no return type
function addTwoNumb(numb1,numb2){
    console.log(numb1+numb2)
}

addTwoNumb(4,4)

//sub function w/ return
function sub(num1,num2){
    return num1+num2;   
}

const hello = sub(5,2);
console.log(hello);

//user is logged in

function userLoggedIn(username){
    if(!username){                                       // if stmnt is only executed when it is true
        console.log("please enter your username");       // "" : undefined :false // !false : true 
        return
    }
    return(`${username}, you just logged in`)
}

console.log(userLoggedIn(""))


//
function greet (name = "sam"){
    return (`${name} just logged in`)
}

console.log(greet("vinit"));