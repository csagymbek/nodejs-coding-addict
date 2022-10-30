const { readFile, writeFile } = require("fs");

console.log("start");

readFile("./content/first.txt", "utf-8", (er, res) => {
  if (er) {
    console.log(er);
    return;
  }
  const first = res;
  readFile("./content/second.txt", "utf-8", (rer, res) => {
    if (er) {
      console.log(er);
      return;
    }
    const second = res;
    writeFile(
      "./content/result-sync.txt",
      `Here is the result ${first}, ${second}`,
      (er, res) => {
        if (er) {
          console.log(er);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("starting next task");
