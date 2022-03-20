const sum = (a, b) => a + b;

const val = process.argv;
console.log(sum(...val.slice(2).map((el) => parseInt(el))));
