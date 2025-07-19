/* 
 🧰 NPM Essentials — Explained with Symbols

 🔧 NPM (Node Package Manager)
     - Comes pre-installed with Node.js

 🌍 Check npm version:
     npm -v

---------------------------------------

 📦 Installing Packages

 🔹 Local Dependency — for this project only:
     npm install <package-name>
     OR
     npm i <package-name>

 🔹 Global Dependency — use anywhere on your system:
     npm install -g <package-name>         // Windows/Linux
     sudo npm install -g <package-name>    // macOS (requires admin)

---------------------------------------

 📄 package.json — The Project Manifest

 Stores:
     📛 Project name
     🧾 Version
     📚 Description
     🔗 Dependencies
     👤 Author
     🔧 Scripts

 🛠️ Ways to create it:
     ✍️ Manual - Create file & add details manually
     ⚙️ npm init     // Guided step-by-step setup
     ⚡ npm init -y  // Auto-create with default values

 💡 To install a package and save it as a dependency:
     npm install <package-name>

---------------------------------------

 📌 Why package.json matters:
     - Describes your project
     - Lists all dependencies
     - Makes collaboration and reinstallation easier
*/

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
