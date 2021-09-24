/* Exercise 1 */
let user = {
    name: "John Smith",
    age: 35
};

let userToJSON = JSON.stringify(user);
alert( userToJSON );

let userFromJSON = JSON.parse(userToJSON);

/* Exercise 2 */
let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};
  
// circular references
room.occupiedBy = meetup;
meetup.self = meetup;
  
alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));