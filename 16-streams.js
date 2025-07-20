const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

// Default 64kb
// Last Buffer - Remainder
// HighWaterMark - Control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 9000 })
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' })

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => console.log(err));
