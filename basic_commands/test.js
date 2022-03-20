let val = [
  { id: [2, 1], name: "nan" },
  { id: [2, 2, 3], name: "nandha" },
  { id: [1, 4], name: "Gauthu" },
];

// console.log(
//   val.filter((data, index, arr) => arr.indexOf(data["id"]) !== index)
// );

console.log(
  val.map((data) => {
    return data.id.slice(1);
  })
);
