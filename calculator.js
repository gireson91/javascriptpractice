"use strict"

let calculator = document.getElementById("calculator");

let savedValue = 0;

const btn0 = () => {
    calculator.value = calculator.value + 0;
}
const btn1 = () => {
    calculator.value = calculator.value + 1;
}
const btn2 = () => {
    calculator.value = 2;
}
const btn3 = () => {
    calculator.value = 3;
}
const btn4 = () => {
    calculator.value = calculator.value + 4;
}
const btn5 = () => {
    calculator.value = calculator.value + 5;
}
const btn6 = () => {
    calculator.value = calculator.value + 6;
}
const btn7 = () => {
    calculator.value = calculator.value + 7;
}
const btn8 = () => {
    calculator.value = calculator.value + 8;
}
const btn9 = () => {
    calculator.value = calculator.value + 9;
}
const btnPlus = () => {
    savedValue = calculator.value;
    savedValue = parseInt(calculator.value) + parseInt(savedValue);
    console.log(calculator.value,"calc value");
    console.log(savedValue,"saved value");

    const updateCalc = () => {
        const addToCalc = document.body.appendChild(calculator);
        const output = document.getElementById("calculator");
        output.prepend(addToCalc);
    }
    calulator.value = savedValue;
}
const btnSub = () => {
    calculator.value = calculator.value + "2";
}
const btnMul = () => {
    calculator.value = calculator.value + "0";
}
const btnDiv = () => {
    calculator.value = calculator.value + "1";
}
const btnDec = () => {
    calculator.value = calculator.value + ".";
}
const btnDel = () => {
    calculator.value = "";
    savedValue = 0;
}