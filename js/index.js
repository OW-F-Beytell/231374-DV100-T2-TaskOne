console.log("Hello world!");

/* Exercise One */
let firstName = "Freddy";
let lastName = "Beytell";
let age = 21;
const subject = "Development";

let greeter = "Hello, my name is " + firstName + " " + lastName + ", I am " + age + " years old and I am studying " + subject;
console.log(greeter); 

/* Exercise Two */
let numOne = 1;
let numTwo = 2;
let numThree = 3;
let numFour = 4;
let answer = 0;

answer = numOne + numTwo / numThree * numFour;
console.log(answer);

/* Exercise Three */
let timmyAmount = 10;
let timmyRate = 0.15;
let susanAmount = 25;
let susanRate = 0.26;

let Value = (timmyAmount * timmyRate) + (susanAmount * susanRate);
console.log(Value);

/* Exercise Four */
let johnValue = 75;
let timValue = 60;
let alfieValue = 64;
let gwenValue = 93;
let averageValue = (johnValue + timValue + alfieValue + gwenValue) / 4;
let testMax = 100;

let johnPerc = johnValue / testMax * 100;
let timPerc = timValue / testMax * 100;
let alfiePerc = alfieValue / testMax * 100;
let gwenPerc = gwenValue / testMax * 100;
let averagePerc = averageValue / testMax * 100;


console.log("Results:");
console.log("John: " + johnPerc + "%");
console.log("Tim: " + timPerc + "%");
console.log("Alfie: " + alfiePerc + "%");
console.log("Gwen: " + gwenPerc + "%");
console.log("Average: " + johnPerc + "%");
console.log("");

johnValue += 7;
timValue += 7;
alfieValue += 7;
gwenValue += 7;
averageValue = (johnValue + timValue + alfieValue + gwenValue) / 4;

johnPerc = johnValue / testMax * 100;
timPerc = timValue / testMax * 100;
alfiePerc = alfieValue / testMax * 100;
gwenPerc = gwenValue / testMax * 100;
averagePerc = averageValue / testMax * 100;

console.log("After adjusting grades:");
console.log("John: " + johnPerc + "%");
console.log("Tim: " + timPerc + "%");
console.log("Alfie: " + alfiePerc + "%");
console.log("Gwen: " + gwenPerc + "%");
console.log("Average: " + johnPerc + "%");