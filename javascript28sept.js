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

let person = () => {
    let name = "Gareth";
    return {
        getName: function () {
            return name;
        },
        setName: function (newName) {
            name = newName;
        },
    };
}

let personA = person();
console.log(personA.getName());
personA.setName("Dwayne Johnson");
console.log(personA.getName());

let newPara = document.createElement("p");

newPara.innerText = "The quick brown fox jumped over the lazy dog";

document.body.appendChild(newPara);

let firstDiv = document.querySelector('div');
firstDiv.style.color = 'red';

let paras = document.querySelectorAll ('p');
for(let p of paras){
    p.style.color = 'blue';
}
foo.console.log("button works");

let btn = document.querySelector('button');
btn.addEventListener('click', foo);

