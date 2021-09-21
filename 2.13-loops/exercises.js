/* Exercise 1 */
for (let i = 2; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

/* Exercise 2 */
let j = 0;
while (j < 3) {
    console.log(`number ${j}!`);
    j++;
}

/* Exercise 3 */
function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

function isPrime(i) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            return false;
        }
    }
    return true;
}

showPrimes(100);