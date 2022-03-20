import * as fs from "fs";

const noOfFiles = +process.argv[2];
const quote2 = "live more , worry less";

// for (let i = 1; i <= noOfFiles; i++) {
//   fs.writeFile(`./backupFile/textFile-${i}`, quote2, (err) => {
//     console.log("File is created-" + i);
//   });
// }
// fs.readFile("./backupFile/textFile", "utf-8", (err, data) => {
//   if (err) {
//     console.log("error", err);
//     return;
//   }

//   console.log(data);
// });
const now = Date.now();
// fs.writeFile("./backupFile/" + now, now.toString(), (err) => {
//   if (err) {
//     console.log("error", err);
//     return;
//   }

//   console.log("created");
// });

fs.readdir("./backupFile", "utf-8", (err, data) => {
  if (err) {
    console.log("error", err);
    return;
  }
  for (let file of data) {
    console.log(file);
  }
});
