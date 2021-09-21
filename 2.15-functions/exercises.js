/* Exercise 1 */
function checkAge(age) { // Using ? operator
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAgeAlt(age) { // Using || operator
    return (age > 18) || confirm('Did parents allow you?');
}

let minor = 17;
let adult = 19;
console.log(checkAge(minor));
console.log(checkAge(adult));
console.log(checkAgeAlt(minor));
console.log(checkAgeAlt(adult));

/* Exercise 2 */
function min(a, b) {
    return (a < b) ? a : b;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

/* Exercise 3 */
function pow(x, n) {
    return x ** n;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));