// 📦 MODULES in Node.js

// 🔒 Modules are **encapsulated** pieces of code — they keep variables/functions private unless exported
// 📤 Only the **minimum** needed is shared with other files (using `module.exports`)

// 📄 CommonJS is the module system used by Node.js
// 🧱 Every file in Node.js is automatically a **module** by default

// Example:
// If you create a file `math.js`, and export a function:
// module.exports.add = (a, b) => a + b;

// Then in another file, you can import it like this:
// const math = require('./math');
// console.log(math.add(2, 3)); // 5

// local
const secret = "SUPER SECRET";

// share
const john = "johnx";
const peter = "peterv";

module.exports = { john, peter };
//console.log(module);
