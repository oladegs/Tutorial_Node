// Started Operating System Process
// Immediate code
console.log("first");

// gets offloaded - asynchronous code
setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");
// Completed and exited Operating System Process
