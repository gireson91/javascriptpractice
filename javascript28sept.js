'USE STRICT'

let user = {
    name: "John",
    years: 30,
    admin: false,
};

let {name: personName, years: age, admin: isAdmin} = user;

console.log(personName);
console.log(age);
console.log(isAdmin);

console.log("Hello");

//let x = mySum(12,5) + 2;


function mySum(a,b){
    return a - b;
}

console.log(mySum(12,7));

let welcome = function(firstName,lastName,gender){
    return 
}

let myName = (firstName) => {
    let nameIntro = "My name is ";
    let lastName = (surname) => {
        return `${nameIntro} ${firstName} ${surname}`
    }
    return lastName;
}

let thisName = myName("Gareth");

console.log(thisName);

let thisFullName = thisName("Ireson");

console.log(thisFullName);


let firstNum = (num1) => {
    let secNum = (num2) => {
        return num1*num2
    }
    return secNum;
}

let thisNum = firstNum();

let thatNum = thisNum();

console.log(thisNum);
console.log(firstNum);
console.log(thatNum);