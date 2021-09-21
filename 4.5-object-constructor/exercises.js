/* Exercise 1 */
function Calculator() {
    this.read = () => {
        this.x = +prompt('x: ', 0);
        this.y = +prompt('y: ', 0);
    };

    this.sum = () => {
        return this.x + this.y;
    };

    this.mul = () => {
        return this.x * this.y;
    };
}

let calc = new Calculator();
calc.read();

alert(calc.sum());
alert(calc.mul());

/* Exercise 2 */
function Accumulator(startValue) {
    this.value = startValue;
    this.read = () => {
        this.value += +prompt('value', 0);
    }
}

let acc = new Accumulator(1);

acc.read();
acc.read();

alert(acc.value);