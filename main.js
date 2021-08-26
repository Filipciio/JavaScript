// let js = "amazing";
// if(js === 'amazing') alert("Hello World");

// let name = 'Filip';
// console.log(name);

// name = 'Sandra';

// const now = 2021;
// const ageFilip = now - 1996;
// const ageSandra = now - 1998;
// console.log(ageFilip, ageSandra); // mozna wyś. zmienne po ,

// console.log(ageFilip * 2, ageFilip / 10);

// const firstName = 'Filip';
// const secondName = 'Hojka';
// console.log(firstName + ' '+ secondName);

// console.log(firstName + ' ' + 'ma' + ' ' + ageFilip + ' ' + 'lat');

// if(ageFilip >= 17) {
//     console.log('Filip jest Pełnoletni')
// };
    
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageFilip + ageSandra) / 2;
// console.log(averageAge);


// CHALLANGE #1
// ex1
// let weightMark = 78;
// let weightJohn = 92;

// const heightMark = 1.69;
// const heightJohn = 1.95;

// const markBMI = weightMark / (heightMark * heightMark);
// const johnBMI = weightJohn / (heightJohn * heightJohn);

// console.log(markBMI);
// console.log(johnBMI);

// const markHigherBMI = (markBMI > johnBMI);
// console.log(markHigherBMI); 

// const firstName = 'Filip';
// const job = 'Programmer';
// const birthYear = 1996;
// const year = 2021;

// const filip = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(filip);

// const filipNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(filipNew);

// console.log(`Siemanko wtorkowy \n\
// juz nie taki\n\
// poranku`);



// const age = 15;

// if(age >= 18) {
//     console.log('Filip can start driving license 🚗');
// } else {
//     console.log(`Filip can't start driving license 😥`);
//     const yearsLeft = 18 - age;
//     console.log(`Filip is too young. Wait another ${yearsLeft} years to start`);
// }

// const birthYear = 1996;
// let century;

// if(birthYear <= 2000) {
//      century = 20;
// } else {
//      century = 21;
// };
// console.log(century);


// CHALLANGE #2
// let weightMark = 88;
// let weightJohn = 90;

// const heightMark = 1.69;
// const heightJohn = 1.95;

// const markBMI = weightMark / (heightMark * heightMark);
// const johnBMI = weightJohn / (heightJohn * heightJohn);

// // const markHigherBMI = (markBMI > johnBMI);

// if(markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}), is higher than John's BMI (${johnBMI})`);
// } else {
//     console.log(`John's BMI (${johnBMI}), is higher than Mark's BMI (${markBMI})`);
// };


// const inputYear = '1996';
// console.log(Number(inputYear), inputYear); //kowersja stringu na liczbę
// console.log(String(23)); // konwersja liczby na string

// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3); // konwersja do Number
// console.log('23' * '10'); // konwersja do Number
// console.log('23' + '10' + 3); // konwersja do stringu

// let n = '1' + 1; // '11'
// n = n - 1; // 
// console.log(n);

// const money = 0;
// if(money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log('You should get a job!');
// }

// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.5 === 0.6);

// console.log(hasDrivingLicense && hasGoodVision); // dwie wartości muszą być TRUE
// console.log(hasDrivingLicense || hasGoodVision); // jedna wartość musi być TRUE
// console.log(!hasDrivingLicense);

// const hasDrivingLicense = true; // A
// const hasGoodVision = true; // B
// const isTired = false; // C
// const name = prompt ('Jak masz na imię?');
// const hasDrivingLicense = prompt ('');

// // const shouldDrive = hasDrivingLicense && hasGoodVision;

// if(hasDrivingLicense && hasGoodVision && !isTired) {
//     console.log(`${name} moze prowadzić`);
// } else if(hasDrivingLicense && hasGoodVision && isTired) {
//     console.log('${name} nie powinien prowadzić poniewaz jest zmęczona');
// } else if(hasDrivingLicense && !hasGoodVision && !isTired){
//     console.log(`${name} nie powinna prowadzić ze względu na słaby wzrok`);
// };

// CHALLANGE #3

// const dolphinesScore = (97 + 112 + 101) / 3; 
// const koalasScore = (109 + 95 + 100) / 3;
// const minScore = 100;
// const dolphinesWin = (dolphinesScore >= minScore);
// const koalasWin = (koalasScore >= minScore);
// const draw = (dolphinesScore === koalasScore);

// if(dolphinesWin && dolphinesScore > koalasScore) {
//     console.log(`Match Result: Dolphine's WIN!
//     ---------------------------
//     Dolphine's: ${dolphinesScore.toFixed(0)} - ${koalasScore.toFixed(0)} Koala's`); //.toFixed(0) - zaokrąglenie po przecinku do (0)
// } else if(draw && dolphinesWin && koalasWin) {
//     console.log(`Match Result: DRAW!
//     ---------------------------
//     Dolphine's: ${dolphinesScore.toFixed(0)} - ${koalasScore.toFixed(0)} Koala's`);
// } else if(koalasWin && koalasScore > dolphinesScore) {
//     console.log(`Match Result: Koala's WIN!
//     ---------------------------
//     Dolphine's: ${dolphinesScore.toFixed(0)} - ${koalasScore.toFixed(0)} Koala's`);
// } else{
//     console.log(`Match Result: MIN SCORE TO WIN IS 100! 
//     ---------------------------
//     Dolphine's: ${dolphinesScore.toFixed(0)} - ${koalasScore.toFixed(0)} Koala's`);
// };

// const day = 'monday';

// switch(day) { 
//     case 'monday':
//     console.log('Poniedziałek');
//     break;
//     case 'tuesday':
//     console.log('Wtorek');
//     break;
//     case 'wednesday':
//     console.log('Środa');
//     break;
//     case 'thursday':
//     console.log('Czwartek');
//     break;
//     case 'friday':
//     console.log('Piątek');
//     break;
//     case 'saturday':
//     console.log('Sobota');
//     break;
//     case 'sunday':
//     console.log('Niedziela');
//     break;
//     default: 
//     console.log('Not a valid Day!');
// }

// if(day === 'monday') {
//     console.log('Poniedziałek');
// } else if (day === 'tuesday') {
//     console.log('Wtorek');
// } else if (day === 'thursday' || day === 'wednesday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Piątek');
// } else if (day === 'saturday') {
//     console.log('Sobota');
// } else if (day === 'sunday') {
//     console.log('Niedziela');
// } else {
//     console.log('Not a valid Day!');
// }

// const age = 17;

// const drink = age >= 18 ? 'Wine 🍷' : 'Milk 🍼'; // skrócony zapis porwównania
// console.log(drink);


// let drink2;
// if(age >= 18) {
//     drink2 = 'Wine 🍷';
// } else {
//     drink2 = 'Milk 🍼';
// }
// console.log(drink2);

 
const price = 40; 

// let tip;
// if(price >= 50 && price <= 300) {
//     tip = 15 * price / 100;
//     console.log(`The bill was ${price}, the tip was ${tip}(15%) and the total value ${price + tip}`);
// } else {
//     tip = 20 * price / 100;
//     console.log(`The bill was ${price}, the tip was ${tip}(20%) and the total value ${price + tip}`);
// };

const tip = price >= 50 && price <= 300 ? (price * 15 / 100) : (price * 20 / 100);
console.log(`The bill was: ${price}$, the tip was: ${tip}$(15%), summary: ${price + tip}$`);


