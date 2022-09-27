// 'use strict';

// console.log("Hello World!");

// const text="this is a message";

// console.log(text);

// console.info(text);

// console.dir(text);

// console.warn(text);

// console.error(text);

// console.log("%c" + text, "color: white; background-color: black; font-size: 20px; padding:5px;");

// console.log("Gareth");

// console.info("Ireson");

// console.dir("Eastleigh");

// console.warn("Aries");

// let myCar="Jaguar";
// let myModel="E Type";

// console.log("My favourite car is a " + myCar + " and the model is an " + myModel);

// let message="The quick brown fox jumped over the lazy dog";

// console.log("%c" + message, "color: orange; font-family: fantasy; font-style: bold; background-color: black; padding: 10px");

// //let a;
// let b="12345";
// let c=12345
// let d=true;
// let e={a:"Javascript"};

// //console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));

// let totalMoney=4000
// let moneyPaidSoFar=2348
// let totalLeftToPay= totalMoney - moneyPaidSoFar;

// console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);

// for(let i=0; i < 10; i++) {
//     console.log(`i = ${i}`)
// }

// let condition=true;
// let increment=0;

// while(condition===true){
//     console.log(`increment = ${increment}`);
//     increment++;
//     if(increment===3){
//         condition = 3;
//     }
// }

// let z = false;
// do {
//     console.log("run forest run run");
// } while(z === true);

// let a = 199;
// while(a <= 200){
//     console.log(a);
//     a++;
// }

// let y = 100;
// while(y <= 200){
//     if(y%2 == 0){
//         console.log("-");
//         y++;}
//         else{
//            console.log("*")
//             y++;
//         }
//     }

// for (let m = 0; m < 10; m++){
//     for (let n = 1; n <=10; n++){
//         console.log(n);
//     }
// }

// for(let g=100; g<=200; g++){
//     console.log(g);
// }

// for(let s=100; s<=200; s++){
//     if (s%2==0){
//         console.log("-")
//     }else{
//         console.log("*")
//     }
// }

// let strictA = true;
// let strictB = 1;

// console.log(strictA != strictB)
// console.log(strictA !== strictB)

// let age=30
// if(age>=18 && age<=65){
//     console.log("Age OK")
//     } else if (age<18){
//         console.log("Underage")
//     } else {
//         console.log("Overage")
//     }
// age >= 50 ? console.log("Is 50 or over") : console.log("Is under 50");

// for(let a=1; a<=100; a++){
//     if(a%3==0 && a%5==0){
//     console.log("Fizz Buzz");
//     }   else if(a%3==0){
//         console.log("Fizz")
//     }   else if(a%5==0){
//         console.log("Buzz");
//     }   else {
//         console.log(a);
//     }
// }

for(let a=1; a<=100; a++){
    switch (true){
        case (a%3==0 && a%5==0):
            console.log("Fizz Buzz")
            break;
        case (a%3==0):
            console.log("Fizz")
            break;
        case (a%5==0):
            console.log("Buzz")
            break;
        default:
            console.log(a)
            break;

    }
}