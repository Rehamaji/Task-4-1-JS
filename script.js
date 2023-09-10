/*------------------------------------------------------Part A------------------------------------------------------*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let first5num = 0;
let even = 0
let randomNums = []

for (let i = 0; i < 10; i++) {
    randomNums[i] = getRandomInt(1, 100);
}
console.log(randomNums);
for (let i = 0; i < 10; i++) {
    if (i < 5) {
        first5num += randomNums[i];
    }
    if (randomNums[i] % 2 == 0) {
        even += randomNums[i];
    }
}
console.log('first5num', first5num);
console.log('alleven', even);
/*------------------------------------------------------Part B------------------------------------------------------*/
// Create an object:
const person = {firstName: "John", number: 099318931, age: 50, email: "reham93189310@gmail.com"};
//Print Object
document.write("<h1>All data object</h1>" + JSON.stringify(person));

document.write("<h1>The First Name is</h1>" + person.firstName);

document.write("<h1>The Number is</h1>" + person.number);

document.write("<h1>The Age is</h1>" + person.age);

document.write("<h1>The Email is</h1>" + person.email);
