/* Exercise 1 */
function makeUserWrong() {
    return {
        userName : 'John',
        ref : this
    };
}

let userWrong = makeUserWrong();

console.log(userWrong.ref.userName);

// Works properly
function makeUserRight() {
    return {
        userName : 'John',
        ref() {
            return this;
        }
    };
}

let userRight = makeUserRight();

console.log(userRight.ref().userName);

/* Exercise 2 */
let calculator = {
    read() {
        this.x = +prompt('x: ');
        this.y = +prompt('y: ');
    },
    sum() {
        return this.x + this.y;
    },
    mul() {
        return this.x * this.y;
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

/* Exercise 3 */
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
}

// by returning this after each method call
// we can chain several calls in sequence
ladder.up().up().down().showStep();