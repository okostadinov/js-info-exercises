/* Exercise 1 */
const sumSalaries = (salaries) => {
    let result = 0;
    for (salary of Object.values(salaries)) {
        result += salary;
    }
    return result;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( sumSalaries(salaries) );

/* Exercise 2 */
const countProperties = (object) => {
    return Object.keys(object).length;
}

let user = {
    name: "John",
    age: 30
};

alert( countProperties(user) );