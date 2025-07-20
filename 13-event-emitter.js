// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require("events");

// If you're creating something custom, extend the class but if you want to emit an event as well as listen for it , then you can just create the instance
const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

// We first listen for events before emitting(triggering)
customEmitter.on("response", () => {
  console.log(`Data Received`);
});

// We can have as many methods as we want
customEmitter.on("response", () => {
  console.log(`Some other logic here`);
});

customEmitter.on("response", (name, id) => {
  console.log(`Data Received - User ${name} with ID ${id} has responded.`);
});

customEmitter.emit("response", "Farouk", 34);
