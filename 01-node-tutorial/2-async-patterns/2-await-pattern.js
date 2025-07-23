const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// Replacement for this is the util.promisify
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

const start = async () => {
  try {
    // const first = await readFilePromise("./content/first.txt", "utf8");
    // const second = await readFilePromise("./content/second.txt", "utf8");

    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");

    // ✅ Don't pass 'utf8' here – it's not needed for writeFile when using a string
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME : ${first}, ${second}`,
      { flag: "a" }
    );

    console.log(first, second);
  } catch (error) {
    console.error(error);
  }
};
start();

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// Initial setup
// readFile("./content/first.txt", "utf8", (err, data) => {
//   if (err) {
//     return;
//   } else {
//     console.log(data);
//   }
// });
