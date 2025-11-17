console.log("A");
const p = new Promise((resolve, reject) => {
  console.log("B");
  setTimeout(() => {
    resolve("Hey");
    console.log("D");
  }, 3000);
  console.log("C");
});
console.log("E");

p.then((v) => {
  console.log(v);
  return v + 2;
})
  .then((v) => {
    console.log(v);
    return v + 3;
  })
  .then((v) => {
    console.log(v);
    return v + 4;
  })
  .then((x) => {
    console.log(x);
  })
  .catch((err) => {
    console.log("Error", err);
  });
console.log("F");
