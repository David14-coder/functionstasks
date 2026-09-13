'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive');

const interface = 'audio';
const private = 3444;

function logger() {
    console.log('my name is David');
} 

logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applesJuice = fruitProcessor(5, 0);
console.log(applesJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('34');

// function declaration
function calcAge1(birthYear) {
    // const age = 2037 - birthYear;
    return 2037 -  birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);


// functions expression
const calcAge2 = function (birthYear) {
    return 2037 -  birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


function greetStudent(name) {
    console.log("Welcome David");
}

greetStudent();
greetStudent();
greetStudent();



let checkAge = function checkAge(age){
    if (age >= 18){
        console.log('you are eligible');
    }else{
        console.log('you are not eligible');
    }
}

checkAge(20);
checkAge(15);
checkAge(18);

    function calculateTotal(price, quantity) {
        let total = price * quantity;

        return total;
    }
    let amount = calculateTotal(5000, 3);
    let deliveryFee = 4000
    let finalAmount = amount * deliveryFee;

console.log(finalAmount);



function applyDiscount(price, discountPercentage){
    let discount = price * discountPercentage / 100;
    let finalPrice = price - discount

    return finalPrice;
}
console.log(applyDiscount(10000, 10));



let userName = 'admin';
let password = '1234';

function login(userName, passsword) {
    if(userName === "admin" && password === "1234"){
        console.log("login successful");
    }else{
        console.log("invalid userName or passsword");
    }
}

login("admin", "1234");


function getGrade(score) {
    if(score >= 80) {
        return"A";
    }else if(score >= 70) {
        return"B";
    }else if(score >= 60) {
        return"C";
    }else if(score >= 50) {
        return"D";
    }else{
        return"F";
    }
}

console.log(getGrade(85));
console.log(getGrade(73));
console.log(getGrade(65));
console.log(getGrade(55));
console.log(getGrade(40));