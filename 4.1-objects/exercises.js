/* Exercise 1 */
let user = {};

user.name = 'John';
user.surname = 'Smith';

for (key in user) {
    console.log(user[key]);
}

user.name = 'Pete';
console.log(user.name);

delete user.name;
console.log('name' in user); // false => no such propertt

/* Exercise 2 */
function isEmpty(obj) {
    for (prop in obj) {
        return false; // if loop has started, there is a property
    }
    return true;
}

let schedule = {};
console.log(isEmpty(schedule));

schedule['8:30'] = 'get up!';
console.log(isEmpty(schedule));

/* Exercise 3 */
function sumValues(obj) {
    let sum = 0;

    for (key in obj) {
        sum += obj[key];
    }

    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

salaries.sum = sumValues(salaries);
console.log(salaries.sum);

/* Exercise 4 */
function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

for (key in menu) {
    console.log(key + ': ' + menu[key]);
}