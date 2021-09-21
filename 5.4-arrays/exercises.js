/* Exercise 1 */
const changeMiddleItem = (arr, item) => {
    if (arr.length % 2 == 0) return arr; // not odd amount of items
    arr[Math.floor(arr.length / 2)] = item;
    return arr;
}

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");
console.log(styles);

styles = changeMiddleItem(styles, "Classics");
console.log(styles);

console.log( styles.shift() );
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);

/* Exercise 2 */
const sumInput = () => {
    let arr = [];

    while (true) {
        let input = prompt("Number: ");

        if ( !isFinite(input) || !input ) break;

        arr.push(+input);
    }

    let sum = 0;
    for (x of arr) {
        sum += x;
    }

    return sum;
}

alert( sumInput() );

/* Exercise 3 */
const getMaxSubSum = (arr) => {
    let maxSum = 0;
    let curSum = 0;

    for (item of arr) {
        if (curSum == 0 && item < curSum) continue;

        curSum = (curSum + item < item) ? item : curSum + item;

        maxSum = Math.max(maxSum, curSum);

    }
    return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) );
alert( getMaxSubSum([2, -1, 2, 3, -9]) );
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
alert( getMaxSubSum([-2, -1, 1, 2]) );
alert( getMaxSubSum([100, -9, 2, -3, 5]) );
alert( getMaxSubSum([1, 2, 3]) );
alert( getMaxSubSum([-1, -2, -3]) );