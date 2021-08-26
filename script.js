'use strict'; // pokazuje niewidoczne błędy


let hasDrivingLicense = false;
const passTest = true;


if(passTest) hasDrivingLicense = true;
if(hasDrivingLicense) console.log('I can drive :D');


function logger () {
    console.log('My name is Filip');
};
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
    return juice;
}   
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


const fruitProcessor = (apples, oranges) => `Juice with ${apples} apples, and ${oranges} oranges`;
console.log(fruitProcessor(1, 2));

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);




 function calcAge1(birthYear) { // funkcja zadeklarowana, moze byc wywołana przed 
     return 2021 - birthYear;
 } 
 const age = calcAge1(1996);
 console.log(age);


 const calcAge2 = function(birthYear){ // wyrażenie funkcji nie moze być wywolana przed
    return 2021 - birthYear;
 }
 const age2 = calcAge2(1996);
 console.log(age2);


const calcAge3 = birthYear => 2021 - birthYear; // funkcja strzałkowa =>
const age3 = calcAge3(1996);
console.log(`Twój wiek to: ${age3}`);


const yearUntilRetirement = age => 65 - age;
const toRetirement = yearUntilRetirement(30);
console.log(`Do emerytury pozostało : ${toRetirement}` );


const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} przejdzie na emeryturę za ${retirement} lat`;
};
console.log(yearUntilRetirement(1996, 'Filip'));
console.log(yearUntilRetirement(1995, 'Tomek'));


const birthYear = 1990;
const today = new Date();
const year = today.getFullYear();
const toRetirement = (65 - (year - birthYear));
if(toRetirement > 0) {
    console.log(`Do emerytury pozostało Ci: ${toRetirement} lat!`);
} else { 
    (toRetirement <= 0)  
    console.log(`Jesteś emerytem!`);
};


function cutFruitPieces(fruit) { // funkcja w funkcji
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples, and ${orangePieces} pieces  of oranges.`;
    return juice;
}   
console.log(fruitProcessor(2, 3));


const yearUntilRetirement = function(birthYear, firstName) {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} przejdzie na emeryturę za ${retirement} lat`;
};

console.log(yearUntilRetirement(1996, 'Filip'));

