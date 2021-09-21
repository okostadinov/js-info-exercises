/* Exercise 1 */
const promptForNumeric = () => {
    let num;
    do {
        num = prompt('Number: ', 0);
    } while ( !isFinite(num) );
    return +num;
}

let x = promptForNumeric();
let y = promptForNumeric();

alert( 'Sum: ' + (x + y) );

/* Exercise 2 */
console.log( Math.round(6.35 * 10) / 10 );

/* Exercise 3 */
const random = (min, max) => {
    let x;

    do {
        x = Math.random() * 10;
    } while (x >= max || x < min);

    return x;
}

// More elegant solution

// const random = (min, max) => {
//     return min + Math.random() * (max - min);
// }

for (let i = 0; i < 5; i++) {
    alert( random(1, 5) );
}

/* Exercise 4 */
const randomInt = (min, max) => {
    return Math.floor( min + Math.random() * (max + 1 - min) );
}

for (let i = 0; i < 5; i++) {
    alert( randomInt(1, 5) );
}

