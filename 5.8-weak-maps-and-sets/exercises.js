/* Exercise 1 */
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

let readMessages = new WeakSet();

// 2 messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);

// first message was read again
readMessages.add(messages[0]);

// Confirm message 0 was read
alert( "Read message 0: " + readMessages.has(messages[0]) );

// Remove message 0 from array (might be cleared from memory later)
messages.shift();

/* Exercise 2 */
let dateReadMessages = new WeakMap();

dateReadMessages.set(messages[0], "yesterday");
dateReadMessages.set(messages[1], "today");

alert( "Message 0 was read " + dateReadMessages.get(messages[0]) );

dateReadMessages.delete(messages[0]);

alert( "Message 0 was read " + dateReadMessages.get(messages[0]) );