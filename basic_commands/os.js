const os = require("os");

console.log("The total mem : " + os.totalmem() / Math.pow(1024, 3));
console.log("The free mem : " + os.freemem() / Math.pow(1024, 3));
console.log("The os is : " + os.version());
console.log("The cpus : " + os.cpus());

// const cpus = os.cpus();

// for (let i of cpus) {
//   console.log(i[0]);
// }
