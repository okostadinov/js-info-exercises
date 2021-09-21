/* Exercise 1 */
const ucFirst = (str) => {
    if (!str) return str; // check for empty string

    return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("oleg") );
alert( ucFirst("some random string") );

/* Exercise 2 */
const checkSpam = (str) => {
    let strLower = str.toLowerCase();

    return strLower.includes("viagra") || strLower.includes("xxx");
}

alert( checkSpam("buy ViAgRA now") );
alert( checkSpam("free xxXXxXx") );
alert( checkSpam("innocent rabbit") );

/* Exercise 3 */
const truncate = (str, maxLength) => {
    return (str.length > maxLength) ? 
        str.slice(0, 19) + "..." : str;
}

alert( truncate("What I'd like to tell on this topic is:", 20) );
alert( truncate("Hi everyone!", 20) );

/* Exercise 4 */
const extractCurrencyValue = (str) => {
    return parseFloat(str.slice(1));
}

// Alternative

// const extractCurrencyValue = (str) => {
//     return +str.slice(1);
// }

alert( extractCurrencyValue("$120") === 120 );