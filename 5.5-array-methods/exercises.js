/* Exercise 1 */
const camelize = (str) => {
    return str.split('-')
    .map( (item, index) => 
        index == 0 ? item : item[0].toUpperCase() + item.slice(1) )
    .join('');
}

alert( camelize("background-color") );
alert( camelize("list-style-image") );
alert( camelize("-webkit-transition") );

/* Exercise 2 */
const filterRange = (arr, a, b) => {
    return arr.filter(item => (item >= a && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered );
alert( arr );

/* Exercise 3 */
const filterRangeInPlace = (arr, a, b) => {
    arr.forEach(item => 
        (item >= a && item <= b) ? arr.splice(0, 0) : arr.splice(arr.indexOf(item), 1));
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert( arr );

/* Exercise 4 */

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );

/* Exercise 5 */
const copySorted = (arr) => {
    return [].concat(arr).sort((a, b) => a > b);    
}

let arr = ['HTML', 'JavaScript', 'CSS'];

let sorted = copySorted(arr);

alert( sorted );
alert( arr );

/* Exercise 6 */
function Calculator() {
    this.calculate = (str) => {

        let arr = str.split(' '),
            a = +arr[0],
            op = arr[1],
            b = +arr[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    // methods is a prop of Calculator,
    // but also an object itself,
    // s.t. each value is a f-n
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };

    this.addMethod = (operation, func) => {
        this.methods[operation] = func;
    }
}

let calc = new Calculator();

alert( calc.calculate("4 + 7") );
alert( calc.calculate("2 - 6") );

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

alert( calc.calculate("5 * 5") );
alert( calc.calculate("6 / 2") );
alert( calc.calculate("2 ** 3") );

/* Exercise 7 */
let john = { name: "John", age: 30 };
let pete = { name: "Pete", age: 25 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(user => user.name);

alert( names );

/* Exercise 8 */
let users = [
    { name: "John", surname: "Smith", id: 1 },
    { name: "Pete", surname: "Hunth", id: 2 },
    { name: "Mary", surname: "Piege", id: 3 }
]

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

alert( usersMapped[0].id );
alert( usersMapped[1].fullName )

/* Exercise 9 */
const sortByAge = (arr) => {
    arr.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 30 };
let pete = { name: "Pete", age: 25 };
let mary = { name: "Mary", age: 29 };

let users = [ john, pete, mary ];

sortByAge(users);

alert( users[0].name );
alert( users[1].name );
alert( users[2].name );

/* Exercise 10 */
const shuffle = (arr) => {

    // start in reverse order
    for (let i = arr.length - 1; i > 0; i--) {
        
        // random index from 0 to i
        let j = Math.floor(Math.random() * (i + 1));

        // swap current item arr[i] with a previous one arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '312': 0,
    '321': 0
};

for (let i = 0; i < 1e6; i++) {
    let arr = [1, 2, 3];
    shuffle(arr);
    count[arr.join('')]++;
}

for (let key in count) {
    alert(`${key}: ${count[key]}`);
}

/* Exercise 11 */
const getAvgAge = (arr) => {
    return ( arr.reduce((sum, user) => sum + user.age, 0) / arr.length );
}

let john = { name: "John", age: 30 };
let pete = { name: "Pete", age: 25 };
let mary = { name: "Mary", age: 29 };

let users = [ john, pete, mary ];

alert( getAvgAge(users) );

/* Exercise 12 */
const uniqueArray = (arr) => {
    let uniqueArr = [];
    arr.forEach(item => {
        if ( !uniqueArr.includes(item) ) {
            uniqueArr.push(item);
        }
    });

    return uniqueArr;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( uniqueArray(strings) );

/* Exercise 13 */
const groupById = (arr) => {
    return arr.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {}); // begin with empty object
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'anne', name: "Anne Smith", age: 24},
    {id: 'pete', name: "Pete Smith", age: 31},
];
  
let usersById = groupById(users);

for (key in usersById) {
    console.log(`key: ${key}\tvalue: ${usersById[key]}`);
}