/* Exercise 1 */
const unique = (arr) => {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) );

/* Exercise 2 */
const aclean = (arr) => {
    let map = new Map();

    for (let word of arr) {
        let sorted = word   // "nap"
            .toLowerCase()  // "nap"
            .split('')      // ['n', 'a', 'p']
            .sort()         // ['a', 'n', 'p']
            .join('');      // "anp" -> key for the map

        // in case another word when sorted produces the same key,
        // the value being referrenced by it will be overwritten
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );