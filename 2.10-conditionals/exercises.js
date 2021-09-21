/* Exercise 1 */
let userInput = prompt('What\'s the official name of Javascript?');

let answer = (userInput === 'ECMAScript') ? 'Right!' : 'You don\'t know? It\'s ECMAScript!';

console.log(answer);

/* Exercise 2 */
let userNumInput = prompt('Enter a number');

if (userInput > 0) {
    alert('1');
} else if (userInput < 0) {
    alert('-1');
} else {
    alert('0');
}

/* Exercise 3 */
let a = 4; b = -1;

let result = (a + b < 4) ? 'Below' : 'Above';

/* Exercise 4 */
let login = prompt('Enter login');

let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    '';

console.log(message);